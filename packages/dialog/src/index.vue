<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      v-show="visible"
      class="et-dialog__wrapper"
      @click.self="handleWrapperClick"
    >
      <div class="et-dialog">
        <div class="et-dialog__header">
          <slot name="title">
            <span class="et-dialog__title">{{ title }}</span>
          </slot>
        </div>
        <div
          v-if="rendered"
          class="et-dialog__body"
        >
          <slot />
        </div>
        <div
          v-if="$slots.footer"
          class="et-dialog__footer"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'EtDialog',
        props: {
            visible: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: ''
            },
            modal: {
                type: Boolean,
                default: true
            },
            beforeClose: {
                type: Function,
                default() {
                    return () => {}
                }
            }
        },
        mounted() {
            if (this.visible) {
                this.rendered = true
            }
        },
        methods: {
            handleWrapperClick() {
                if (!this.closeOnClickModal) return
                this.handleClose();
            },
            handleClose() {
                if (typeof this.beforeClose === 'function') {
                    this.beforeClose(this.hide)
                } else {
                    this.hide();
                }
            },
            hide(cancel) {
                if (cancel !== false) {
                    this.$emit('update:visible', false);
                    this.$emit('close');
                    this.closed = true
                }
            },
            afterEnter() {
                this.$emit('opened')
            },
            afterLeave() {
                this.$emit('closed')
            }
        }
    }
</script>

<style lang="scss">

</style>