# Basic: Gradient Text

::: sandboxrun

```html
<h1 class="gradient-text">
  CSS Planet
</h1>
```

```css
.gradient-text {
  width: 50%;
  background-image: linear-gradient(120deg,
      hsl(252, 74%, 63%) 0%,
      hsl(299, 48%, 46%) 30%);
  font-weight: 700 !important;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

:::
