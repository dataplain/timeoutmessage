<template>
    <transition name="progress">
        <div v-if="countDown" class="progress-container">
            <div>
                <div :class="textClass">{{ message }}</div>
                <div class="progress-transition" :class="barClass" :style="{ width: barWidth, height: barHeight }" />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        timeout: {
            type: [Number, String],
            default: 5,
            validator: timeout => (typeof timeout === "number") || (typeof timeout === "string" && /^[0-9]+$/.test(timeout))
        },
        textClass: {
            type: String,
            default: ""
        },
        barClass: {
            type: String,
            default: "progress-bar"
        },
        barHeight: {
            type: String,
            default: "3px"
        },
        value: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            interval: null,
            countDown: 0,
            message: this.value
        }
    },
    computed: {
        barWidth() {
            const timeout = (typeof this.timeout === "number" ? this.timeout : parseInt(this.timeout));
            return ((100 * (this.countDown - 1)) / timeout).toFixed(0) + "%";
        }
    },
    watch: {
        value(message) {
            this.updateCountDown(message);
        }
    },
    created() {
        this.updateCountDown(this.value);
    },
    methods: {
        updateCountDown(message) {
            if (this.interval !== null) {
                clearInterval(this.interval);
                this.interval = null;
            }

            if (message == "") {
                this.message = "";
                this.countDown = 0;
            }
            else {
                this.message = message;
                this.countDown = (typeof this.timeout === "number" ? this.timeout : parseInt(this.timeout)) + 1;
                this.interval = setInterval(() => {
                    if (this.countDown > 0)
                        this.countDown--;
                    else
                        this.$emit("input", "");
                }, 1000);
            }
        }
    }
}
</script>

<style scoped>
.progress-container {
    display: flex;
    justify-content: center;
}
.progress-transition {
    transition: width 1s;
}
.progress-bar {
    background-color: black;
}

.progress-enter-active {
    transition: all .3s ease;
}
.progress-leave-active {
    transition: all .3s ease;
}
.progress-enter {
    transform: translateY(10px);
    opacity: 0;
}
.progress-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
