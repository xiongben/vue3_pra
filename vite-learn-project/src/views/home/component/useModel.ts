import { computed } from 'vue'

export function useModel(props: {[propName: string]: unknown}, emit: (name: string, val: unknown) => void, name = 'modelValue') {
    return computed({
        get() {
            return props[name]
        },
        set(value) {
            emit(`update:${name}`, value)
        }
    })
}
