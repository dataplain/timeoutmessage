import Vue from "vue";
import TimeoutMessage from "@/components/TimeoutMessage";

function install(Vue, options = {}) {
    Vue.component(options.TimeoutMessageName || "TimeoutMessage", TimeoutMessage);
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue)
    install(window.Vue);

export { TimeoutMessage };
