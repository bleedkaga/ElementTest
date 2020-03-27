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
      <div
        class="et-dialog"
        :style="style"
      >
        <div class="et-dialog__header">
          <slot name="title">
            <span class="et-dialog__title">{{ title }}</span>
            <span class="el-icon-close" />
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
    import Popup from 'element-ui-test/src/utils/popup'
    export default {
        name: 'EtDialog',
        mixins: [Popup],
        props: {

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
            },
            top: {
                type: String,
                default: '15vh'
            },
            fullscreen: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            style() {
                let style = {};
                if (!this.fullscreen) {
                    style.marginTop = this.top;
                    if (this.width) {
                        style.width = this.width
                    }
                }
                return style
            }
        },
        mounted() {
            if (this.visible) {
                this.rendered = true
                this.open();
                if (this.appendToBody) {
                document.body.appendChild(this.$el);
                }
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