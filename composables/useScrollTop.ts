import { useIntersectionObserver } from "@vueuse/core"

export default function () {
  const scrollerRef = ref<HTMLElement | null>()
  const targetRef = ref()

  const targetIsVisible = ref(true)

  useIntersectionObserver(
    targetRef,
    ([{ isIntersecting }], observerEl) => {
      targetIsVisible.value = isIntersecting
    })


  function jumpUp() {
    console.log("🚀 | jumpUp | jumpUp", scrollerRef.value)

    if (!scrollerRef.value) return

    scrollerRef.value.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return {
    scrollerRef,
    targetRef,
    targetIsVisible,
    jumpUp,
  }
}