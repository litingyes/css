# 交互效果: 动态背景

::: sandboxrun

```html
<button class="dynamic-background-color">
  Dynamic Background Color
</button>
```

```css
.dynamic-background-color {
  position: relative;
  z-index: 1;
  padding: 8px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
background: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  border: none;
  border-radius: 8px;
}

.dynamic-background-color::before {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  content: '';
  border-radius: inherit;
  background: rgba(255, 255,255, 0.4);
  backdrop-filter: blur(48px);
}

.dynamic-background-color:hover::before {
  width: 100%;
  transition: width 0.3s ease-out;
}
```

:::
