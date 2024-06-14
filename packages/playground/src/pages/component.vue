<script setup lang="ts">
import { ref } from 'vue'
import { Grid } from 'ant-design-vue'
import VueCustomHighlight from 'vue-custom-highlight'

const useBreakpoint = Grid.useBreakpoint
const screens = useBreakpoint()

const chl = ref<InstanceType<typeof VueCustomHighlight> | null>()
const text = ref('debitis')
const ignoreCase = ref(false)
const highlightStyle = ref('background-color: yellow;')
const childrenSelector = ref('*')
const visible = ref(false)
</script>
<template>
  <a-card title="Component" class="main">
    <a-row :gutter="24">
      <a-col :span="screens.lg ? 10 : 24">
        <a-form :label-col="{ span: 7 }">
          <a-form-item label="Search Text">
            <a-input v-model:value="text" placeholder="Search Text" />
          </a-form-item>
          <a-form-item label="Ignore Case">
            <a-switch v-model:checked="ignoreCase" />
          </a-form-item>
          <a-form-item label="Highlight Style">
            <a-input v-model:value="highlightStyle" placeholder="Highlight Style" />
          </a-form-item>
          <a-form-item label="Children Selector">
            <a-input v-model:value="childrenSelector" placeholder="Children Selector, default value is '*'" />
          </a-form-item>
          <a-form-item label="uid">
            {{ chl?.$props.uid }}
          </a-form-item>
          <a-form-item label="methods">
            <a-space direction="vertical">
              <a-button @click="chl?.renderHighlight">.renderHighlight()</a-button>
              <a-button @click="chl?.clearHighlight">.clearHighlight()</a-button>
            </a-space>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="screens.lg ? 14 : 24">
        <VueCustomHighlight
          ref="chl"
          :text="text"
          :ignoreCase="ignoreCase"
          :highlightStyle="highlightStyle"
          :childrenSelector="childrenSelector"
        >
          Maxime debitis hic, delectus perspiciatis laborum molestiae labore, deleniti, quam consequatur iure veniam
          alias voluptas nisi quo. Dolorem eaque alias, quo vel quas repudiandae architecto deserunt quidem, sapiente
          laudantium nulla.
          <p>
            Maiores odit molestias, necessitatibus doloremque dolor illum reprehenderit provident nostrum laboriosam
            iste, tempore perferendis! Ab porro neque esse voluptas libero necessitatibus fugiat, ex, minus atque
            deserunt veniam molestiae tempora? Vitae.
          </p>
          <div>
            <p>
              Dolorum facilis voluptate eaque eius similique ducimus dignissimos assumenda quos architecto. Doloremque
              deleniti non exercitationem rerum quam alias harum, nisi obcaecati corporis temporibus vero sapiente
              voluptatum est quibusdam id ipsa.
            </p>
          </div>
          <a-button @click="visible = !visible">toggle the rendering of child elements</a-button>
          <article v-if="visible" style="margin-left: 40px">
            <p>
              Maxime debitis hic, delectus perspiciatis laborum molestiae labore, deleniti, quam consequatur iure veniam
              alias voluptas nisi quo. Dolorem eaque alias, quo vel quas repudiandae architecto deserunt quidem,
              sapiente laudantium nulla.
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
        </VueCustomHighlight>
      </a-col>
    </a-row>
  </a-card>
</template>
<style scoped>
.main {
  max-width: 1200px;
}
</style>
