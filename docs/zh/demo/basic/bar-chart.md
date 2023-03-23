# 基础: 柱形图

```vue preview
<template>
  <div class="basic-bar-chart__container">
    <div class="basic-bar-chart">
      <div class="basic-bar-chart__prism" />
    </div>
  </div>
</template>

<style>
.basic-bar-chart__container {
  --height: 200px;
  height: var(--height);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 24px;
}

.basic-bar-chart {
  position: absolute;
  width: 36px;
  height: 30%;
  background-image: linear-gradient(to top, #3f51b1 0%, #f7c978 100%);
  transition: all 1s;
}

.basic-bar-chart:hover {
  height: 80%;
}

.basic-bar-chart::before,
.basic-bar-chart::after {
  content: "";
  position: absolute;
  left: 0;
  width: 36px;
  height: calc(36px * 0.4);
  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
  background: red;
}

.basic-bar-chart::before {
  top: calc(36px * -0.2);
  background: #f7c978;
  z-index: 2;
}

.basic-bar-chart::after {
  bottom: calc(36px * -0.2);
  background: #3f51b1;
  z-index: -1;
}

.basic-bar-chart__prism {
  height: 100%;
  width: 18px;
  position: absolute;
  left: 9px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1)
}
</style>
```
