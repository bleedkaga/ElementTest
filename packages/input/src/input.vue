<template>
  <div
    :class="classNames"
  >
    <template
      v-if="type !== 'textarea'"
    >
      <input
        type="text"
        placeholder="这是一个组件"
        v-bind="$attrs"
        class="et-input__inner"
      >
      <span
        v-if="getSuffixVisible()"
        class="el-input__suffix"
      />
    </template>
    <textarea
      v-else
      v-bind="$attrs"
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
          },
          clearable: {
            type: Boolean,
            default: false
          },
          size: {
            type: String,
            default: ''
          }
        },
        computed: {
          inputSize: {
            get() {
              return this.size
            }
          },
          classNames: {
            get() {
              return [
                this.type === 'textarea' ? 'et-textarea' : 'et-input',
                this.inputSize ? 'el-input--' + this.inputSize : '',
                {
                  'el-input--suffix': this.$slots.suffix || this.clearable
                }
              ]
            }
          }
        },
        methods: {
          getSuffixVisible() {
            return this.clearable
          }
        }
    }
</script>

<style lang="scss">

</style>
