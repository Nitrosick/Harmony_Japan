const VENDOR_URL = 'https://saf-systems.com/index.php?option=com_ajax&plugin=calculator&group=ajax&format=json'

const badRequest = (message: string) => ({
  success: false,
  error: {
    code: 'BAD_REQUEST',
    message
  }
})

const upstreamError = () => ({
  success: false,
  error: {
    code: 'UPSTREAM_ERROR',
    message: 'Pricing API could not be reached.'
  }
})

const upstreamInvalid = () => ({
  success: false,
  error: {
    code: 'UPSTREAM_INVALID_RESPONSE',
    message: 'Pricing API returned an invalid response.'
  }
})

const parseJsonStringSafely = (value: string) => {
  try {
    return {
      ok: true as const,
      value: JSON.parse(value.trim())
    }
  } catch {
    return {
      ok: false as const
    }
  }
}

const normalizePossiblyEncodedJson = (value: unknown, maxDepth = 3) => {
  let current = value

  for (let i = 0; i < maxDepth; i += 1) {
    if (typeof current !== 'string') {
      break
    }

    const parsed = parseJsonStringSafely(current)
    if (!parsed.ok) {
      return {
        ok: false as const
      }
    }

    current = parsed.value
  }

  return {
    ok: true as const,
    value: current
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody<any>(event)

  const calcName = body?.calcName
  const storageNumber = body?.data?.storageNumber?.value
  const bundle = body?.data?.bundle?.value

  if (typeof calcName !== 'string' || !calcName.trim()) {
    setResponseStatus(event, 400)
    return badRequest('calcName is required')
  }

  const storageValue = Number(storageNumber)
  if (!Number.isFinite(storageValue) || storageValue <= 0) {
    setResponseStatus(event, 400)
    return badRequest('data.storageNumber.value must be a positive number')
  }

  if (typeof bundle !== 'string' || !bundle.trim()) {
    setResponseStatus(event, 400)
    return badRequest('data.bundle.value is required')
  }

  try {
    const vendorResponse = await $fetch<unknown>(VENDOR_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })

    const normalizedTopLevel = normalizePossiblyEncodedJson(vendorResponse, 3)
    if (!normalizedTopLevel.ok || !normalizedTopLevel.value || typeof normalizedTopLevel.value !== 'object') {
      setResponseStatus(event, 502)
      return upstreamInvalid()
    }

    const topLevel = normalizedTopLevel.value as Record<string, any>

    if (topLevel.success === true && 'data' in topLevel) {
      const normalizedData = normalizePossiblyEncodedJson(topLevel.data, 3)
      if (!normalizedData.ok || !normalizedData.value || typeof normalizedData.value !== 'object') {
        setResponseStatus(event, 502)
        return upstreamInvalid()
      }

      const total = Number((normalizedData.value as Record<string, any>).total)
      if (!Number.isFinite(total)) {
        setResponseStatus(event, 502)
        return upstreamInvalid()
      }

      return {
        success: true,
        data: normalizedData.value
      }
    }

    const total = Number(topLevel.total)
    if (!Number.isFinite(total)) {
      setResponseStatus(event, 502)
      return upstreamInvalid()
    }

    return {
      success: true,
      data: topLevel
    }
  } catch {
    setResponseStatus(event, 502)
    return upstreamError()
  }
})
