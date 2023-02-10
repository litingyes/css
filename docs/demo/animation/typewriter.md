# Animation: Typewriter

```vue preview
<template>
  <div class="animation-typewriter__container">
    <div class="animation-typewriter">
      Css World
    </div>
  </div>
</template>

<style scoped>
.animation-typewriter {
  font-size: 24px;
  font-weight: 700;
  font-family: monospace;
  white-space: nowrap;
  letter-spacing: 2px;
  overflow: hidden;
  border-right: 2px #000 solid;
  animation: typewriter 8s steps(10) infinite , cursor 0.5s infinite alternate;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 164px;
  }
}

@keyframes cursor {
  from {
    border-right: transparent;
  }
}
</style>
```
