# Animation: Horse Racing Light

```vue preview
<template>
  <div class="interate-animation-horse-racing-light">
    Horse Racing Light
    <div class="interate-animation-horse-racing-light__border-top" />
    <div class="interate-animation-horse-racing-light__border-right" />
    <div class="interate-animation-horse-racing-light__border-bottom" />
    <div class="interate-animation-horse-racing-light__border-left" />
  </div>
</template>

<style scoped>
.interate-animation-horse-racing-light {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: #000000;
  color: aquamarine;
  margin: 8px;
  padding: 12px;
  box-sizing: border-box;
}

.interate-animation-horse-racing-light__border-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent , #0FF);
  animation: top 1s ease-in infinite;
}

@keyframes top {
  from {
    transform:translateX(-100%);
  }
  to {
    transform: translateX(200%);
  }
}

.interate-animation-horse-racing-light__border-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, transparent , #0FF);
  animation: right 1s ease-in infinite;
}

@keyframes right {
  from {
    transform:translateY(-200%);
  }
  to {
    transform: translateY(100%);
  }
}

.interate-animation-horse-racing-light__border-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to left, transparent , #0FF);
  animation: bottom 1s ease-in infinite;
}

@keyframes bottom {
  from {
    transform:translateX(100%);
  }
  to {
    transform: translateX(-200%);
  }
}

.interate-animation-horse-racing-light__border-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to top, transparent , #0FF);
  animation: left 1s ease-in infinite;
}

@keyframes left {
  from {
    transform:translateY(200%);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
```
