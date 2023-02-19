export default function (target, threshold) {
  threshold = threshold ? threshold : 50

  function scrollAnimation() {
    const motionEls = getMotionElements(target)
    motionEls.forEach(function (element) {
      if (domInView(element)) {
        element.classList.remove('out-view')
        element.classList.add('in-view')
      } else {
        element.classList.remove('in-view')
        element.classList.add('out-view')
      }
    })
  }
  function domInView(element) {
    var viewHeight = window.innerHeight || document.documentElement.clientHeight
    var elementRectTop = element.getBoundingClientRect().top
    return elementRectTop + threshold <= viewHeight
  }
  function getMotionElements(target) {
    var elements = []
    if (typeof target === 'string') {
      elements = [].slice.call(document.querySelectorAll(target), 0)
    } else {
      if (isElement(target)) {
        elements = [target]
      }
      if (target && target.length > 0) {
        elements = [].slice.call(target, 0)
      }
    }
    return elements
  }
  function isElement(obj) {
    return !!(obj && obj.nodeType === 1)
  }
  function debounce(func, wait) {
    var timer
    return function () {
      var _this = this
      var args = arguments
      if (timer) clearTimeout(timer)
      timer = setTimeout(function () {
        func.apply(_this, args)
      }, wait)
    }
  }
  window.addEventListener('scroll', debounce(scrollAnimation, 15))
}
