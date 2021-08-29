export default {
  install(app) {
    app.config.globalProperties.$lazyLoad = (element, animateType = 'animate__jello') => {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.classList.add('animate__animated', animateType)
          }
        })
      })
      io.observe(element)
    }
  }
}