# Interact: Dynamic Color

```vue preview
<template>
  <p class="interate-dynamic-color">
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
    Dynamic Color - Dynamic Color - Dynamic Color -
  </p>
</template>

<style scoped>
.interate-dynamic-color {
    display: inline;
    font-size: 16px;
    line-height: 20px;
    color: transparent;
    background:
        linear-gradient(90deg, rgba(60, 60, 67, 0.7), rgba(60, 60, 67, 0.7)),
        linear-gradient(90deg, hsl(252, 74%, 63%), hsl(252, 74%, 63%));
    background-clip: text;
    -webkit-background-clip: text;
    background-size: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    background-position: 100% 100%, 0 100%;
    transition: 0.7s all linear;
}

.interate-dynamic-color:hover {
    background-size: 0 100%, 100% 100%;
}
</style>
```
