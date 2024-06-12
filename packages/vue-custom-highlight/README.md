# vue-custom-highlight

vue component using the CSS Custom Highlight API

## What is `CSS Custom Highlight API`

[CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API)

## Online Demo

[https://codesandbox.io/p/github/tjyuanpeng/vue-custom-highlight](https://codesandbox.io/p/github/tjyuanpeng/vue-custom-highlight)

## Installation

```bash
// pnpm
pnpm add vue-custom-highlight

// npm
npm install vue-custom-highlight

// yarn
yarn add vue-custom-highlight
```

## Basic Usage

```vue
<script setup lang="ts">
import VueCustomHighlight from 'vue-custom-highlight'
</script>
<template>
  <VueCustomHighlight text="quick">
    The quick brown fox jumps over the lazy dog
  </VueCustomHighlight>
</template>
```

## Component Reference

### text

text to highlight

### highlightStyle

the style of highlight text

default value is `background-color: yellow;`

```vue
<!-- string -->
<VueCustomHighlight highlightStyle="color: red">text content</VueCustomHighlight>

<!-- css property object -->
<VueCustomHighlight highlightStyle="{ color: 'red' }">text content</VueCustomHighlight>
```

note that Only certain CSS properties can be used

- color
- background-color
- text-decoration and its associated properties
- text-shadow
- -webkit-text-stroke-color, -webkit-text-fill-color and -webkit-text-stroke-width

[https://developer.mozilla.org/en-US/docs/Web/CSS/::highlight#allowable_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/::highlight#allowable_properties)

### ignoreCase

ignore case sensitive of text, default value is `false`

### uid

custom identifier to register highlight

Note that uid must start with an alphabet

if value is empty, component will generate an id automatically

### childrenSelector

deteminate how to select child elements to render

default value is `*`, it means including component`s child elements self and all sub doms

you can exclude the dom to render

```vue
<template>
  <VueCustomHighlight text="button" childrenSelector="*:not(button)" >
    text content outside the button
    <button>I`m a button</button>
  </VueCustomHighlight>
</template>
```

[about `:scope` in `querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll#selectors)

### renderHighlight

instance method

if dom changed, you can call `renderHighlight` manually to re-render highlight

### clearHighlight

instance method

clear highlight

## useCustomHighlight Reference

you can use hook api to render highlight directly

### renderHighlight

```ts
const { renderHighlight } = useCustomHighlight()
renderHighlight({
  uid: `uid`,
  text: `text`,
  ignoreCase: false,
  nodeList: nodeList,
})
```

- uid: custom identifier to register highlight
- text: text to highlight
- nodelist: the list of node to highlight
- ignoreCase: ignore case sensitive of text, default value is `false`

### clearHighlight

```ts
const { clearHighlight } = useCustomHighlight()
clearHighlight(`uid`)
```

- uid: custom identifier to the registered highlight

### getHighlightKeys

get all keys of the registered highlight

```ts
const { getHighlightKeys } = useCustomHighlight()
getHighlightKeys()
```
