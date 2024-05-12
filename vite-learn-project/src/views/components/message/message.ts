import { createVNode, render } from "vue";
import type { AppContext } from 'vue'
import Message from "@/views/components/message/messageComponent";

function getInstance(config: {[key: string]: any}) {
    const div = document.createElement("div");
    const conf = Object.assign({}, config);
    if (conf.duration === undefined) {
        conf.duration = 3000;
    }

    const close = () => {
        try {
            document.body.removeChild(div);
        } catch (error) {}
    };
    conf.close = close;

    const vnode = createVNode(Message, conf);
    render(vnode, div);
    document.body.appendChild(div);

    if (conf.duration) {
        setTimeout(() => {
            try {
                document.body.removeChild(div);
            } catch (error) {

            }
        }, conf.duration);
    }

    return {
        close,
    };
}
const message = (opts: {[key: string]: any}) => {
    return getInstance(opts);
};

message.install = (app: AppContext) => {
    // 这样就可以值选项式api中通过this.$message的形式调用了 返回一个包含close的对象，可以手动关闭，也支持自动关闭
    app.config.globalProperties.$message = message;
};

message.success = (msg: string) => {
    let conf = {
        type: "success",
        message: msg,
    };
    return getInstance(conf);
};
message.error = (msg: string) => {
    let conf = {
        type: "error",
        message: msg,
    };
    return getInstance(conf);
};


export default message;
