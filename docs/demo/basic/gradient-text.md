# Basic: Gradient Text

```vue preview
<template>
  <h1 class="basic-gradient-text">
    CSS Planet
  </h1>
</template>

<style>
.basic-gradient-text {
  width: 50%;
  background-image: linear-gradient(120deg,
      hsl(252, 74%, 63%) 0%,
      hsl(299, 48%, 46%) 30%);
  font-weight: 700 !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
```
