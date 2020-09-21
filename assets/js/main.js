;(function () {
  'use strict'

  const menuToggle = document.getElementById('header-menu-toggle')
  const mobileMenu = document.getElementById('header-mobile-menu')

  if (menuToggle) {
    // open menu
    menuToggle.addEventListener('click', function () {
      document.body.classList.toggle('off-nav-is-active')
      menuToggle.classList.toggle('is-active')
      mobileMenu.classList.toggle('header__sidenav--open')
      mobileMenu.style.maxHeight = mobileMenu.style.maxHeight
        ? null
        : `${mobileMenu.scrollHeight}px`
      this.getAttribute('aria-expanded') === true
        ? this.setAttribute('aria-expanded', false)
        : this.setAttribute('aria-expanded', true)
    })

    window.addEventListener('resize', function () {
      if (
        mobileMenu.classList.contains('header__sidenav--open') &&
        window.innerWidth >= 1024
      ) {
        document.body.classList.remove('off-nav-is-active')
        menuToggle.classList.toggle('is-active')
        mobileMenu.classList.remove('header__sidenav--open')
        mobileMenu.style.maxHeight = null
        menuToggle.setAttribute('aria-expanded', false)
      }
    })
  }

  const modals = document.getElementsByClassName('modal')
  const modalTriggers = document.getElementsByClassName('modal-trigger')

  function openModal(el) {
    if (el) {
      document.body.classList.add('modal-is-active')
      el.classList.add('is-active')
    }
  }

  function closeModals() {
    document.body.classList.remove('modal-is-active')
    for (let i = 0; i < modals.length; i++) {
      modals[i].classList.remove('is-active')
    }
  }

  if (modals.length > 0 && modalTriggers.length > 0) {
    for (let i = 0; i < modalTriggers.length; i++) {
      let modalTrigger = modalTriggers[i]
      let modal = document.getElementById(
        modalTrigger.getAttribute('aria-controls')
      )
      if (modal) {
        modalTrigger.addEventListener('click', function (e) {
          e.preventDefault()
          if (modalTrigger.hasAttribute('aria-controls')) {
            openModal(modal)
          }
        })
      }
    }
  }

  document.addEventListener('click', function (e) {
    if (
      e.target.classList.contains('modal') ||
      e.target.classList.contains('modal-close-trigger')
    ) {
      e.preventDefault()
      closeModals()
    }
  })

  document.addEventListener('keydown', function (event) {
    var e = event || window.event
    if (e.keyCode === 27) {
      closeModals()
    }
  })
})()
