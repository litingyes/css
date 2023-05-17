# 基础: 正反相消旋转

```vue preview
<template>
  <div class="basic-forward">
    <div class="basic-reverse">
      正反相消旋转
    </div>
  </div>
</template>

<style>
.basic-forward {
    transform-style: preserve-3d;
    perspective: 500px;
    width: 128px;
    height: 128px;
    margin: 24px;

    --degZ: -360deg;
    --degX: 0;
    animation: rotate 5s linear infinite;
}

.basic-reverse {
    box-sizing: border-box;
    transform-style: preserve-3d;
    perspective: 500px;
    width: 128px;
    height: 128px;
    background: hsl(252, 74%, 63%);
    padding: 12px;

    --degZ: 360deg;
    --degX: 20deg;
    animation: rotate 5s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotateX(0deg) rotateZ(0deg);
    }
    50% {
        transform: rotateX(var(--degX));
    }
    100% {
        transform: rotateX(0deg) rotateZ(var(--degZ));
    }
}
</style>
```
