import type { ObjectDirective, DirectiveBinding } from "vue";
import { message as $message } from "ant-design-vue";
$message.config({
  duration: 1, // 持续时间
  maxCount: 0,
});

export const copy: ObjectDirective = {
  beforeMount(el, binding) {
    el.targetContent = binding.value;
    const success: Function | any = binding.arg;
    el.addEventListener("click", () => {
      if (!el.targetContent) return console.warn("没有需要复制的目标内容");
      const textarea = document.createElement("textarea");
      textarea.readOnly = true;
      textarea.style.position = "fixed";
      textarea.style.top = "-99999px";
      textarea.value = el.targetContent;
      document.body.appendChild(textarea);
      textarea.select();
      const res = document.execCommand("Copy");
      // res && console.log('复制成功，剪贴板内容：' + el.targetContent);
      res && success ? success(el.targetContent) : $message.success("复制成功");
      document.body.removeChild(textarea);
    });
  },
  updated(el, binding) {
    el.targetContent = binding.value;
  },
  unmounted(el) {
    el.removeEventListener("click", () => {});
  },
};
