import EtInput from './src/input'

// 这个应该是为了单独调用组件的时候设置的
EtInput.install = Vue => {
    Vue.component(EtInput.name, EtInput)
}

export default EtInput;