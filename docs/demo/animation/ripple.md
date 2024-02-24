# Animation: Ripple

::: sandboxrun

```html
<span class="ripple" />
```

```css
.ripple {
  margin: 64px 0;
  margin-left: 50%;
  translate: -50%;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: hsl(356, 100%, 63%);
}

.ripple::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: inherit;
  border-radius: 50%;
  z-index: -1;
  animation: ripple 1.5s ease-out infinite;
}

@keyframes ripple {
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(3);
  }
}
```

:::
