# 基础: 正反相消旋转

::: sandboxrun

```html
<div class="forward">
  <div class="reverse">
    Forward and Reverse Rotation
  </div>
</div>
```

```css
.forward {
    transform-style: preserve-3d;
    perspective: 500px;
    width: 128px;
    height: 128px;
    margin: 24px;

    --degZ: -360deg;
    --degX: 0;
    animation: rotate 5s linear infinite;
}

.reverse {
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
```

:::
