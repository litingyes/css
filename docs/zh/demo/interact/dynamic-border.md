# 交互效果: 动态边框

::: sandboxrun

```html
<button class="dynamic-border">
  Dynamic Border
</button>
```

```css
.dynamic-border {
  position: relative;
  padding: 8px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  background: #BFB67C;
  border: none;
  box-sizing: border-box;
}

.dynamic-border::before,
.dynamic-border::after {
  position: absolute;
  box-sizing: border-box;
  content: '';
  width: 0;
  height: 0;
  border: 2px solid transparent
}

.dynamic-border::before {
  top: 0;
  left: 0;
}

.dynamic-border::after {
  bottom: 0;
  right: 0;
}

.dynamic-border:hover::before,
.dynamic-border:hover::after {
  width: 100%;
  height: 100%;
}

.dynamic-border:hover::before {
  border-top-color: #D03E2C;
  border-right-color: #D03E2C;
  transition: width 0.3s ease-out,
    height 0.3s ease-out 0.3s;
}

.dynamic-border:hover::after {
  border-bottom-color: #D03E2C;
  border-left-color: #D03E2C;
  transition:
    border-color 0s ease-out 0.6s,
    width 0.3s ease-out 0.6s,
    height 0.3s ease-out 0.9s;
}
```

:::
