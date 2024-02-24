# 动画效果: 自旋

::: sandboxrun

```html
<div class="spin" />
```

```css
.spin {
  margin: 24px;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  color: rgba(0, 0, 0, .4);
  box-shadow: 0 -10px rgba(0, 0, 0, .9),
    10px 0px,
    0 10px,
    -10px 0 rgba(0, 0, 0, .7),
    -7px -7px rgba(0, 0, 0, .8),
    7px -7px rgba(0, 0, 0, .1),
    7px 7px,
    -7px 7px;
  animation: spin 1s steps(8) infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
```

:::
