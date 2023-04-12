import { h, defineComponent } from "vue";
import { Icon as IconifyIcon, addIcon } from "@iconify/vue/dist/offline";

export default defineComponent({
    name: "IconifyIconOffline",
    components: { IconifyIcon },
    props: {
        icon: {
            type: String,
            default: ""
        }
    },
    render() {
        if (typeof this.icon === "object") addIcon(this.icon!, this.icon!);
        const attrs = this.$attrs;
        return h(
            IconifyIcon,
            {
                icon: this.icon,
                style: attrs?.style
                    ? Object.assign(attrs.style, { outline: "none" })
                    : { outline: "none" },
                ...attrs
            },
            {
                default: () => []
            }
        );
    }
});
