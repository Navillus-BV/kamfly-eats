;(function () {
  'use strict'

  const menuToggle = document.getElementById('header-menu-toggle')
  const mobileMenu = document.getElementById('header-mobile-menu')

  if (menuToggle) {
    // open menu
    menuToggle.addEventListener('click', function () {
      document.body.classList.toggle('off-nav-is-active')
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
        document.body.classList.remove('header__sidenav--open')
        mobileMenu.style.maxHeight = null
        menuToggle.setAttribute('aria-expanded', false)
      }
    })
  }
})()
