<template>
  <div
    :class="[
      type === 'textarea' ? 'et-textarea': 'et-input'
    ]"
  >
    <template
      v-if="type !== 'textarea'"
    >
      <input
        type="text"
        placeholder="这是一个组件"
        class="et-input__inner"
      >
    </template>
    <textarea
      v-else
      class="et-textarea__inner"
    />
  </div>
</template>

<script>
    export default {
        name: 'EtInput',
        inheritAttrs: false,
        props: {
          type: {
            type: String,
            default: 'input'
          }
        }
    }
</script>

<style lang="scss">

</style>
