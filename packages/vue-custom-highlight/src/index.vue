<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useCustomHighlight } from './use-custom-highlight'
import { stringifyStyle, type AllowCssStyle } from './utils'

const props = withDefaults(
  defineProps<{
    text: string
    highlightStyle: AllowCssStyle | string
    ignoreCase: boolean
    uid: string
    childrenSelector?: string
  }>(),
  {
    text: '',
    highlightStyle: 'background-color: yellow;',
    ignoreCase: false,
    uid: () => `chl-${Math.random().toString(36).slice(-5)}`,
  }
)

// uid
watch(
  () => props.uid,
  (_v, old) => {
    console.log('# old uid', old)
    clearHighlight(old)
  }
)

// style
const style = ref<HTMLStyleElement>()
const renderStyle = () => {
  if (!style.value) {
    const dom = document.createElement('style')
    document.head.appendChild(dom)
    style.value = dom
  }
  style.value.setAttribute('data-custom-highlight-uid', props.uid)
  style.value.innerHTML = `::highlight(${props.uid}) { ${stringifyStyle(props.highlightStyle)} }`
}
onMounted(renderStyle)
onUnmounted(() => style.value?.remove())
watch(() => [props.uid, props.highlightStyle], renderStyle, { deep: true })

// highlight
const { renderHighlight, clearHighlight } = useCustomHighlight()
const wrap = ref<HTMLElement>()
const render = () =>
  renderHighlight({
    uid: props.uid,
    text: props.text,
    nodeList: [wrap.value!].concat(
      Array.from(wrap.value!.querySelectorAll<HTMLElement>(props.childrenSelector || '*'))
    ),
    ignoreCase: props.ignoreCase,
  })
const clear = () => clearHighlight(props.uid)
onMounted(render)
onUnmounted(clear)
watch(() => [props.uid, props.text, props.ignoreCase, props.childrenSelector], render)

defineExpose({
  renderHighlight: render,
  clearHighlight: clear,
})
</script>
<template>
  <div ref="wrap"><slot></slot></div>
</template>
