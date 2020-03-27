import EtInput from '../packages/input'
import EtDialog from '../packages/dialog'

const components = [
    EtInput,
    EtDialog
]

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default install