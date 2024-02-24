# 动画效果: 走马灯

::: sandboxrun

```html
<div class="horse-racing-light">
  Horse Racing Light
  <div class="horse-racing-light__border-top"></div>
  <div class="horse-racing-light__border-right"></div>
  <div class="horse-racing-light__border-bottom"></div>
  <div class="horse-racing-light__border-left"></div>
</div>
```

```css
.horse-racing-light {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: #000000;
  color: aquamarine;
  margin: 8px;
  padding: 12px;
  box-sizing: border-box;
}

.horse-racing-light__border-top {
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

.horse-racing-light__border-right {
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

.horse-racing-light__border-bottom {
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

.horse-racing-light__border-left {
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
```

:::
