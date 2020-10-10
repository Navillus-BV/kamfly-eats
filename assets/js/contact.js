;(function () {
  const form = document.querySelector('form[name="contact"]')
  const modal = document.getElementById('contact-modal')

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(talkForm)
    fetch(talkForm.getAttribute('action'), {
      method: 'POST',
      headers: {
        Accept: 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams(formData).toString(),
    }).then((res) => {
      modal.open()
      form.reset()
    })
  })
})()
