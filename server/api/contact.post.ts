import nodemailer from 'nodemailer'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const badRequest = (message: string) => ({
  success: false,
  error: {
    code: 'BAD_REQUEST',
    message
  }
})

const serverError = (code: string, message: string) => ({
  success: false,
  error: {
    code,
    message
  }
})

const normalizeString = (value: unknown) => (
  typeof value === 'string' ? value.trim() : ''
)

const toBoolean = (value: unknown) => value === true || value === 'true'

export default defineEventHandler(async (event) => {
  const body = await readBody<any>(event)

  const honeypot = normalizeString(body?.website)
  if (honeypot) {
    return { success: true }
  }

  const name = normalizeString(body?.name)
  const company = normalizeString(body?.company)
  const email = normalizeString(body?.email)
  const inquiryType = normalizeString(body?.inquiryType)
  const message = normalizeString(body?.message)
  const jobTitle = normalizeString(body?.jobTitle)
  const phone = normalizeString(body?.phone)
  const countryRegion = normalizeString(body?.countryRegion)
  const selectedPricingConfiguration = normalizeString(body?.selectedPricingConfiguration)
  const consent = toBoolean(body?.consent)

  if (!name) {
    setResponseStatus(event, 400)
    return badRequest('name is required')
  }

  if (!company) {
    setResponseStatus(event, 400)
    return badRequest('company is required')
  }

  if (!email || !emailPattern.test(email)) {
    setResponseStatus(event, 400)
    return badRequest('valid email is required')
  }

  if (!inquiryType) {
    setResponseStatus(event, 400)
    return badRequest('inquiryType is required')
  }

  if (!message) {
    setResponseStatus(event, 400)
    return badRequest('message is required')
  }

  if (!consent) {
    setResponseStatus(event, 400)
    return badRequest('consent is required')
  }

  const smtpHost = normalizeString(process.env.SMTP_HOST)
  const smtpPortRaw = normalizeString(process.env.SMTP_PORT)
  const smtpSecureRaw = normalizeString(process.env.SMTP_SECURE).toLowerCase()
  const smtpUser = normalizeString(process.env.SMTP_USER)
  const smtpPass = normalizeString(process.env.SMTP_PASS)
  const smtpFrom = normalizeString(process.env.SMTP_FROM) || smtpUser
  const contactTo = normalizeString(process.env.CONTACT_TO) || 'info@harmonytec.jp'

  const smtpPort = Number(smtpPortRaw)
  const smtpSecure = smtpSecureRaw === 'true' || smtpSecureRaw === '1'

  if (!smtpHost || !Number.isFinite(smtpPort) || smtpPort <= 0 || !smtpUser || !smtpPass || !smtpFrom) {
    setResponseStatus(event, 500)
    return serverError('EMAIL_NOT_CONFIGURED', 'Email service is temporarily unavailable.')
  }

  const submittedAt = new Date().toISOString()
  const subject = `[Harmony Technology] ${inquiryType} inquiry from ${company}`

  const plainText = [
    'Harmony Technology inquiry',
    '',
    `Name: ${name}`,
    `Company: ${company}`,
    `Job Title: ${jobTitle || '-'}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    `Country / Region: ${countryRegion || '-'}`,
    `Inquiry Type: ${inquiryType}`,
    `Selected pricing configuration: ${selectedPricingConfiguration || '-'}`,
    '',
    'Message:',
    message,
    '',
    `Submitted at: ${submittedAt}`
  ].join('\n')

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    })

    await transporter.sendMail({
      to: contactTo,
      from: smtpFrom,
      replyTo: email,
      subject,
      text: plainText
    })

    return { success: true }
  } catch {
    setResponseStatus(event, 502)
    return serverError('EMAIL_SEND_FAILED', 'Unable to send inquiry right now. Please try again later.')
  }
})
