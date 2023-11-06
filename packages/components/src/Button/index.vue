// button.vue
<template>
  <button class="sum-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import "./style/index.scss";

defineOptions({ name: "sum-button" });

type ButtonProps = {
  type?: string;
};

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`sum-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
