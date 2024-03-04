# vue3-custom-directives

## Description

These are useful directives that you can include into your vue application.

| Directive       | Description                                                                                                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v-copy | Directly bind the value that needs to be copied, which is triggered when the user clicks on the element bound by the instruction, and also supports throwing a callback function after clicking  |

## Installation

`npm i --save  vue3-custom-directives`

To only use certain directives and reduce bundle size, register your directives show below.

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { copy } from "vue3-custom-directives";

createApp(App).directive(copy).mount("#app");
```

After registering `v-copy` is available throughout your entire vue application

There is a quicker way to register all directives if you are going to use them:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import Vue3CustomDirectives from "vue3-custom-directives";

createApp(App).use(Vue3CustomDirectives).mount("#app");
```

This will make all directives accessible throughout your application

## Usage

### v-copy

```html
<template>
  <div id="main" style="width: 500px; height: 500px">
    <p v-copy="copyValue">点击复制</p>
  </div>
</template>

<script setup>
 const copyValue = ref('我是要被复制的值');
</script>
```
```html
<template>
  <div id="main" style="width: 500px; height: 500px">
    <p v-copy:[success]="copyValue">点击复制</p>
  </div>
</template>

<script setup>
 const copyValue = ref('我是要被复制的值');
 const success = (copyValue) => {
  console.log('这是成功复制之后的回调函数, 值为:' + copyValue);
 }
</script>
```