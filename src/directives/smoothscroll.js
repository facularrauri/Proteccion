const SmoothScroll = require('smoothscroll')
const VueSmoothScroll = {}

function Setinserted (el, binding) {
  SmoothScroll(el, binding.value['duration'], binding.value['callback'], binding.value['context'])
}

VueSmoothScroll.install = function (Vue) {
  Vue.directive('smoothscroll', {
    inserted (el, binding) {
      Setinserted(el, binding)
    }
  })
}

export default VueSmoothScroll
