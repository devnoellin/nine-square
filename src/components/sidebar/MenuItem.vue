<template>
  <div
    @click="toggleItemEmit(props.item)"
    :class="['sidebar-drawer__item text-ellipsis', isOpen ? 'toggling' : '']"
  >
    {{ props.item.text }}
  </div>
  <div
    v-if="props.item.children && isOpen"
    class="sidebar-drawer__subitem"
  >
    <MenuItem
      v-for="childItem in props.item.children"
      :key="childItem.key"
      :item="childItem"
      :toggleItem="showSubitem"
      @toggle="toggleSubitem"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { MenuItem as MenuItemType } from './types'

interface PropsType {
  item: MenuItemType
  toggleItem: string
}
interface EmitsType {
  (e: 'toggle', value: MenuItemType): void
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();
const showSubitem = ref<string>('');
const isOpen = computed(() => props.toggleItem === props.item.key);

// 通知父層subitem被點擊
const toggleItemEmit = (item: MenuItemType) => emits('toggle', item);
// 當子層subitem被點擊時, 設定要顯示的subitem
const toggleSubitem = (item: MenuItemType) => {
  if (showSubitem.value === item.key) {
    showSubitem.value = '';
  } else {
    showSubitem.value = item.key;
  }
};

</script>