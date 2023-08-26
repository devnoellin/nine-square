<template>
  <div class="sidebar-wrapper">
    <button
      class="btn"
      @click="toggleDrawer"
    >
      <img :src="Bars" class="bars-icon">
    </button>
    <div
      :class="['sidebar-drawer', drawerStatus]"
      @click="toggleDrawer"
    >
      <aside
        class="sidebar-drawer__content"
        @click.stop
      >
      <MenuItem
        v-for="item in menuItem"
        :key="item.key"
        :item="item"
        :toggleItem="showSubitem"
        @toggle="toggleSubitem"
      />
      </aside>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Bars from '@images/bars-solid.svg'
import MenuItem from '@components/sidebar/MenuItem.vue'
import { MenuItem as MenuItemType } from './types'
import { list } from './data'

// 側邊欄開關狀態: 預設為關
const drawerStatus = ref('close');
// 側邊欄清單
const menuItem = ref<MenuItemType[]>([]);
// 是否顯示子選單
const showSubitem = ref<string>('');

// 當子層subitem被點擊時, 設定要顯示的subitem
const toggleSubitem = (item: MenuItemType) => {
  if (showSubitem.value === item.key) {
    showSubitem.value = '';
  } else {
    showSubitem.value = item.key;
  }
};
// 取得側邊欄清單
const getMenuItem = () => {
  menuItem.value = list;
};
// 切換側邊欄開關狀態
const toggleDrawer = () => {
  drawerStatus.value = drawerStatus.value === 'open' ? 'close' : 'open';
};


onMounted(() => {
  getMenuItem();
})

</script>

<style>
@import "@css/button.scss";
@import "./index.scss";
</style>
