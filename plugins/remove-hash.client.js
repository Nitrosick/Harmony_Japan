export default defineNuxtPlugin(() => {
  if (import.meta.server) return

  const router = useRouter()

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0 && window.location.hash) {
      router.replace({
        path: router.currentRoute.value.path,
        query: router.currentRoute.value.query
      })
    }
  })
})
