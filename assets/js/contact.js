;(function () {
  const urlParams = new URLSearchParams(window.location.search)

  if (urlParams.has('success')) {
    const modal = document.querySelector('.modal')
    if (modal) {
      modal.open()
    }
  }
})()
