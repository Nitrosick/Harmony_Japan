<script setup>
const localePath = useLocalePath()

await navigateTo(localePath('/saf'), { redirectCode: 301 })
</script>
