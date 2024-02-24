# Basic: Shadow

## Long Projection

::: sandboxrun

```html
<div class="shadow__long-projection" />
```

```css
.shadow__long-projection {
  width: 96px;
  height: 96px;
  margin-bottom: 64px;
  background: #ffffff;
  position: relative;
}

.shadow__long-projection::before {
  position: absolute;
  top: 96px;
  width: 96px;
  height: 72px;
  content: '';
  transform-origin: top center;
  transform: skewX(30deg);
   background: linear-gradient(180deg, rgba(0, 0, 0, .3), transparent);
}

.shadow__long-projection::after {
  position: absolute;
  left: 96px;
  width: 44px;
  height: 96px;
  content: '';
  transform-origin: center left;
  transform: skewY(60deg);
  background: linear-gradient(to right,rgba(0, 0, 0, .3), transparent);
}
```

:::

## Stereographic Projection

::: sandboxrun

```html
  <div class="shadow__stereographic-projection" />
```

```css
.shadow__stereographic-projection {
  position: relative;
  width: 200px;
  height: 48px;
  background: hsla(52, 34%, 62%);
  border-radius: 12px;
  margin-bottom: 12px;
}

.shadow__stereographic-projection::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 1%;
  right: 10%;
  bottom: 0;
  z-index: -1;
  background: hsla(52, 34%, 40%);
  box-shadow: 0 0 4px 2px hsla(52, 34%, 40%);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  transform: rotateZ(-4deg)
}
```

:::

## Relief Sculpture

::: sandboxrun

```html
  <span class="shadow__relief-sculpture">
    shadow
  </span>
```

```css
.shadow__relief-sculpture {
  font-size: 32px;
  font-weight: bold;
  padding: 8px;
  background: #BF9A6C;
  color: #BF9A6C;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
}
```

:::
