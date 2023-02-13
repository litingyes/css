# Interact: Dynamic Border

```vue preview
<template>
  <button class="interate-dynamic-border">
    Dynamic Border
  </button>
</template>

<style scoped>
.interate-dynamic-border {
  position: relative;
  padding: 8px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  background: #BFB67C;
  border: none;
  box-sizing: border-box;
}

.interate-dynamic-border::before,
.interate-dynamic-border::after {
  position: absolute;
  box-sizing: border-box;
  content: '';
  width: 0;
  height: 0;
  border: 2px solid transparent
}

.interate-dynamic-border::before {
  top: 0;
  left: 0;
}

.interate-dynamic-border::after {
  bottom: 0;
  right: 0;
}

.interate-dynamic-border:hover::before,
.interate-dynamic-border:hover::after {
  width: 100%;
  height: 100%;
}

.interate-dynamic-border:hover::before {
  border-top-color: #D03E2C;
  border-right-color: #D03E2C;
  transition: width 0.3s ease-out,
    height 0.3s ease-out 0.3s;
}

.interate-dynamic-border:hover::after {
  border-bottom-color: #D03E2C;
  border-left-color: #D03E2C;
  transition:
    border-color 0s ease-out 0.6s,
    width 0.3s ease-out 0.6s,
    height 0.3s ease-out 0.9s;
}
</style>
```
