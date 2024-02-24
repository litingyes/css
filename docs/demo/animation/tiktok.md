# Animation: Tiktok

::: sandboxrun

```html
<span class="tiktok">TikTok</span>
```

```css
.tiktok {
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
```

:::
