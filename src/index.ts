import { copy } from "./directives/copy";
import { throttle } from "./directives/throttle";
import { App } from "vue";

export { copy, throttle };
const testProp = "sss";
export default {
  install(app: App) {
    app.directive("copy", copy);
    app.directive("throttle", throttle);
  },
};
