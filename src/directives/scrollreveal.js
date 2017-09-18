/* globals ScrollReveal */
const sr = ScrollReveal()
const VueScrollReveal = {}

function Setinserted (el, binding) {
  binding.modifiers = {
    reset: true
  }

  sr.reveal(el, binding)
}

VueScrollReveal.install = function (Vue) {
  Vue.directive('scrollreveal', {
    inserted (el, binding) {
      Setinserted(el, binding)
    }
  })
}

export default VueScrollReveal
