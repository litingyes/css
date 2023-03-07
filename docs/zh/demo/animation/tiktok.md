# 动画效果: 抖音

```vue preview outputBgColor=black
<template>
  <span class="animation-tiktok">TikTok</span>
</template>

<style scoped>
.animation-tiktok {
  color: #ffffff;
  font-size: 36px;
  animation: tiktok 2s linear infinite;
}

@keyframes tiktok {
  0%, 100% {
    text-shadow: -1.5px -1.5px 0 #0ff, 1.5px 1.5px 0 #f00;
  }
  25% {
    text-shadow: 1.5px 1.5px 0 #0ff, -1.5px -1.5px 0 #f00;
  }
  50% {
    text-shadow: 1.5px -1.5px 0 #0ff, 1.5px -1.5px 0 #f00;
  }
  75% {
    text-shadow: -1.5px 1.5px 0 #0ff, -1.5px 1.5px 0 #f00;
  }
}
</style>
```
