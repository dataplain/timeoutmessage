# @dataplain/timeoutmessage

Vue component to display ephemeral text and a countdown progress bar.

* Report bugs: <https://github.com/dataplain/timeoutmessage/issues>

## Install

Create a new vue project:

```shell
vue create
```

Install component:

```shell
npm install --save @dataplain/timeoutmessage
```

## Environment setting

Make a src/plugins folder at the root:

```shell
mkdir src/plugins
```

### Configure the timeoutmessage.js

Create the src/plugins/timeoutmessage.js:

```javascript
import Vue from "vue";
import TimeoutMessage from "@dataplain/timeoutmessage";
import "@dataplain/timeoutmessage/dist/TimeoutMessage.css";

Vue.use(TimeoutMessage, { TimeoutMessageName: "MyTimeoutMessage" });
```

### Import timeoutmessage.js

The "src/main.js" file should look like this:

```javascript
import Vue from "vue";
import App from "./App.vue";

import "./plugins/timeoutmessage";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

```

## How to use (example in App.vue)

```vue
<template>
    <div>
        <my-timeout-message value="Too easy." timeout="3" @timesup="showNextProgressbar" />

        <!-- if you set the message using a variable via v-model, it will be set to empty when times out -->
        <my-timeout-message v-model="anotherMessage" barClass="my-progress-color" textClass="my-progress-text" />

        <!-- you can use predefined classes from your preferred framework, such as bootstrap -->
        <my-timeout-message value="It's also very simple." barClass="bg-primary" textClass="text-primary" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            anotherMessage: ""
        }
    },
    methods: {
        showNextProgressbar() {
            this.anotherMessage = 'Next progress bar!';
        }
    }
}
</script>

<style>
.my-progress-color {
    background-color: green;
}
.my-progress-text {
    color: blue;
}
</style>
```

## Properties

Property | Description | Required | Default
-|-|-|-
v-model or value | Text message to show | no |
timeout | Time in seconds | no | 5
barHeight | Bar height | no | 3px
barClass | CSS Class to apply on progressbar | no |
textClass | CSS Class to apply on message | no |

## Events

Event | Description
-|-
input | To clear the message when time runs out

## Using in the browser

To use directly in the browser, import @dataplain/timeoutmessage:

```html
<script src="https://unpkg.com/@dataplain/timeoutmessage" />
```
