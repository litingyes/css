# Animation: Ripple

```vue preview
<template>
  <span class="animation-ripple" />
</template>

<style>
.animation-ripple {
  margin-top: 30px;
  margin-left: 50%;
  translate: -50%;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: hsl(356, 100%, 63%);
}

.animation-ripple::before {
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
</style>
```
