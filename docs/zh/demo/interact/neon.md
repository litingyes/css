# 交互效果: 霓虹

```vue preview
<template>
  <div class="interact-neon__container">
    <div class="interact-neon">
      Hover Neon
    </div>
    <div class="interact-neon">
      Hover Neon
    </div>
    <div class="interact-neon">
      Hover Neon
    </div>
  </div>
</template>

<style scoped>
  .interact-neon__container {
    display: flex;
    gap: 8px;
  }

  .interact-neon__container > div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .interact-neon {
    width: 100px;
    height: 40px;
  }

  .interact-neon:nth-child(1) {
    color: #618A6A;
    border: 1px solid #618A6A;
  }

  .interact-neon:nth-child(1):hover {
    color: #ffffff;
    background: #618A6A;
    box-shadow: 12px 12px 99px 12px #618A6A;
  }

  .interact-neon:nth-child(2) {
    color: #526F34;
    border: 1px solid #526F34;
  }

  .interact-neon:nth-child(2):hover {
    color: #ffffff;
    background: #526F34;
    box-shadow: 12px 12px 99px 12px #526F34;
  }

  .interact-neon:nth-child(3) {
    color: #83846C;
    border: 1px solid #83846C;
  }

  .interact-neon:nth-child(3):hover {
    color: #ffffff;
    background: #83846C;
    box-shadow: 12px 12px 99px 12px #83846C;
  }
</style>
```
