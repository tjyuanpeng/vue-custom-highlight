<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import { useCustomHighlight, version } from 'vue-custom-highlight'

console.log(`version: ${version}`)

const text = ref('debitis')
const ignoreCase = ref(false)
const uid = ref('chl-uid')

const dom = ref<HTMLElement>()
onMounted(async () => {})
const { renderHighlight, clearHighlight, getHighlightKeys } = useCustomHighlight()
const render = () => {
  const nodeList = Array.from(dom.value!.querySelectorAll<HTMLElement>('*'))
  renderHighlight({ uid: uid.value, text: text.value, ignoreCase: ignoreCase.value, nodeList })
}
const clear = () => clearHighlight(uid.value)
const keys = () => {
  const keys = getHighlightKeys()
  message.info(`keys: ${keys.join(',')}`)
}
</script>
<template>
  <a-card title="Use Case" class="main">
    <a-row :gutter="24">
      <a-col :span="10">
        <a-form :label-col="{ span: 7 }">
          <a-form-item label="Search Text">
            <a-input v-model:value="text" placeholder="Search Text" />
          </a-form-item>
          <a-form-item label="Ignore Case">
            <a-switch v-model:checked="ignoreCase" />
          </a-form-item>
          <a-form-item label="uid">
            <a-input v-model:value="uid" placeholder="uid" />
          </a-form-item>
          <a-form-item label="methods">
            <a-space direction="vertical">
              <a-button @click="render">renderHighlight()</a-button>
              <a-button @click="clear">clearHighlight()</a-button>
              <a-button @click="keys">getHighlightKeys()</a-button>
            </a-space>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="14">
        <article ref="dom">
          <p>
            Maxime debitis hic, delectus perspiciatis laborum molestiae labore, deleniti, quam consequatur iure veniam
            alias voluptas nisi quo. Dolorem eaque alias, quo vel quas repudiandae architecto deserunt quidem, sapiente
            laudantium nulla.
          </p>
          <p>
            Maiores odit molestias, necessitatibus doloremque dolor illum reprehenderit provident nostrum laboriosam
            iste, tempore perferendis! Ab porro neque esse voluptas libero necessitatibus fugiat, ex, minus atque
            deserunt veniam molestiae tempora? Vitae.
          </p>
          <p>
            Dolorum facilis voluptate eaque eius similique ducimus dignissimos assumenda quos architecto. Doloremque
            deleniti non exercitationem rerum quam alias harum, nisi obcaecati corporis temporibus vero sapiente
            voluptatum est quibusdam id ipsa.
          </p>
        </article>
      </a-col>
    </a-row>
  </a-card>
</template>
<style scoped>
.main {
  max-width: 1200px;
  margin: 100px auto;
}
</style>
<style>
::highlight(chl-uid) {
  background-color: yellow;
}
</style>
