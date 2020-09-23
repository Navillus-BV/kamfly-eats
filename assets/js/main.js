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

class Slider {
  constructor(options) {
    console.log('+++ SLIDER +++')

    this.config = Slider.mergeSettings(options)

    this.elem =
      typeof this.config.selector === 'string'
        ? document.querySelector(this.config.selector)
        : this.config.selector

    if (this.elem === null) {
      throw new Error('Something wrong with your Slider selector 😭')
    }

    this.init()
  }

  init() {
    console.log('SLIDER: init')

    this._triggers = {}

    this.labelElem = document.createElement('label')
    this.labelElem.setAttribute('for', 'slider')
    this.labelElem.innerText = this.elem.dataset.label
    this.labelElem.classList.add('sr-only')

    this.inputElem = document.createElement('input')
    this.inputElem.type = 'range'
    this.inputElem.id = 'slider'
    this.inputElem.classList.add('slider__input')
    this.inputElem.min = this.elem.hasAttribute('min')
      ? parseInt(this.elem.getAttribute('min'))
      : this.config.min
    this.inputElem.max = this.elem.hasAttribute('max')
      ? parseInt(this.elem.getAttribute('max'))
      : this.config.max
    this.inputElem.step = this.elem.hasAttribute('step')
      ? parseInt(this.elem.getAttribute('step'))
      : this.config.step
    this.inputElem.value = this.elem.hasAttribute('value')
      ? parseInt(this.elem.getAttribute('value'))
      : this.config.value

    this.valueElem = document.createElement('div')
    this.valueElem.classList.add('slider__value')
    this.valueElem.innerText = this.config.format(this.value)

    this.elem.appendChild(this.valueElem)
    this.elem.appendChild(this.inputElem)
    this.elem.appendChild(this.labelElem)

    document.addEventListener('DOMContentLoaded', this.update.bind(this))
    this.inputElem.addEventListener('input', this.update.bind(this))
    window.addEventListener('resize', this.update.bind(this))

    this.update()
  }

  get value() {
    return this.inputElem.value
  }

  update() {
    this.updateValue()
  }

  updateValue() {
    console.log('SLIDER: update', this.value)

    this.valueElem.innerText = this.config.format(this.value)
    const newValue = Number(
      (this.value - this.inputElem.min) /
        (this.inputElem.max - this.inputElem.min)
    )

    const thumbCenter = this.inputElem.getBoundingClientRect().width * newValue
    const valueCenter = this.valueElem.getBoundingClientRect().width / 2
    const thumbWidth = Slider.remToPx(1)
    const thumbOffset = thumbWidth / 2 - newValue * thumbWidth

    this.valueElem.style.transform = `translateX(${
      thumbCenter - valueCenter + thumbOffset
    }px)`

    this.fire('input', this.value)
  }

  on(event, callback) {
    this._triggers[event] = this._triggers[event] || []
    this._triggers[event].push(callback)
  }

  fire(event, params) {
    if (this._triggers[event]) {
      this._triggers[event].map((cb) => cb(params))
    }
  }

  static mergeSettings(options) {
    const settings = {
      selector: '.slider',
      min: 0,
      max: 100,
      value: 50,
      step: 1,
      format: (value) => value,
    }

    return { ...settings, ...options }
  }

  static remToPx(rem) {
    return rem * parseInt(getComputedStyle(document.documentElement).fontSize)
  }
}

window.Slider = Slider

class PriceComparison {
  constructor() {
    console.log('+++ PRICECOMPARISON +++')

    this.kamflyPriceElem = document.getElementById('kamfly-price')
    this.thuisbezordPriceElem = document.getElementById('thuisbezorgd-price')
    this.uberEatsPriceElem = document.getElementById('ubereats-price')

    this.init()
  }

  init() {
    console.log('PriceComparison: init')

    this.slider = new window.Slider({
      format: (value) => {
        return new Intl.NumberFormat('nl-NL', {
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'narrowSymbol',
        })
          .format(value)
          .replace(/\D00(?=\D*$)/, '')
      },
    })

    this.slider.on('input', this.update.bind(this))
  }

  update() {
    console.log('PriceComparison: update', this.slider.value)

    this.updateKamfly()
    this.updateThuisbezorgd()
    this.updateUberEats()
  }

  updateKamfly() {
    const price = 100 + this.slider.value * 0.02
    this.kamflyPriceElem.innerText = PriceComparison.formatCurrency(price)
  }

  updateThuisbezorgd() {
    const price = this.slider.value * 0.13
    this.thuisbezordPriceElem.innerText = PriceComparison.formatCurrency(price)
  }

  updateUberEats() {
    const price = this.slider.value * 0.15
    this.uberEatsPriceElem.innerText = PriceComparison.formatCurrency(price)
  }

  static formatCurrency(value) {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'narrowSymbol',
    })
      .format(value)
      .replace(/\D00(?=\D*$)/, '')
  }
}

window.PriceComparison = PriceComparison
