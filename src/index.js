import EtInput from '../packages/input'

const components = [
    EtInput
]

const install = (Vue, opts) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default install