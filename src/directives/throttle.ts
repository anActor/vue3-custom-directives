import type { ObjectDirective, DirectiveBinding } from "vue";

export const throttle: ObjectDirective = {
  mounted(el: HTMLButtonElement, binding: DirectiveBinding) {
    el.addEventListener("click", () => {
      if (!el.disabled) {
        el.disabled = true;
        setTimeout(() => {
          el.disabled = false;
        }, binding.value);
      }
    });
  },
};

// import { ObjectDirective } from 'vue'

// interface ThrottleEl extends HTMLElement {
//   throttleEvent: () => void
// }

// // 节流指令封装
// export const throttle: ObjectDirective = {
//   beforeMount(el: ThrottleEl, binding: any) {
//     let throttled = false
//     let delay: number = 1000
//     const keys = Object.keys(binding.modifiers)
//     if (keys) {
//       const key: string | undefined = keys.find((key) => key.includes('delay'))?.toString()
//       const value = (key ?? '').match(/(?<=\[).*?(?=\])/)
//       if (value) delay = parseInt(value[0])
//     }
//     el.throttleEvent = () => {
//       if (!throttled) {
//         throttled = true
//         setTimeout(() => {
//           binding.value()
//           throttled = false
//         }, delay)
//       }
//     }
//     el.addEventListener(binding.arg, el.throttleEvent)
//   },
//   beforeUnmount(el: ThrottleEl, binding: any) {
//     el.removeEventListener(binding.arg, el.throttleEvent)
//   },
// }
