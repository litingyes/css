<script lang="ts" setup>
import { useBrowserLocation, useClipboard } from '@vueuse/core'
import { ref } from 'vue'
import IconCode from '../icons/code.svg'
import IconJuejin from '../icons/juejin.svg'
import IconCopy from '../icons/copy.svg'
import IconCopied from '../icons/copied.svg'
import { juejinLinks } from '../utils/link'

interface Props {
  lang: string
  meta: string
  code: string
}
const props = defineProps<Props>()

const isCodeVisibled = ref(false)
const { copy, copied } = useClipboard()

const location = useBrowserLocation()
const juejinLinkKey = Object.keys(juejinLinks).find(link => location.value.pathname?.includes(link))
</script>

<template>
  <div class="code-preview">
    <div class="code-preview__preview">
      <slot />
    </div>

    <div class="code-preview__btns">
      <a v-if="juejinLinkKey" :href="juejinLinks[juejinLinkKey]!" target="_blank">
        <IconJuejin class="code-preview__icon" />
      </a>
      <IconCopied v-if="copied" class="code-preview__icon" />
      <IconCopy v-else class="code-preview__icon" @click="copy(props.code)" />
      <IconCode class="code-preview__icon" @click="isCodeVisibled = !isCodeVisibled" />
    </div>
    <div class="code-preview__code" :class="{ visible: isCodeVisibled }">
      <slot name="code" />
    </div>
  </div>
</template>

<style lang="scss">
.code-preview {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  overflow: hidden;

  &__preview {
    padding: 16px 8px;
    background: #a5f3fc;
  }

  &__btns {
    margin: 4px 0;
    padding-right: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
  }

  &__icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: 0.3s;
    color: #1e293b;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__code {
    transition: max-height 0.5s;
    max-height: 0;
    overflow: hidden;

    &.visible {
      max-height: 10000px;
    }
  }
}
</style>
