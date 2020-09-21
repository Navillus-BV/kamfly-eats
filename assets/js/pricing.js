class Slider {
  constructor(options) {
    this.config = Slider.mergeSettings(options)

    this.elem =
      typeof this.config.selector === 'string'
        ? document.querySelector(this.config.selector)
        : this.config.selector

    if (this.elem === null) {
      throw new Error('Something wrong with your Pivot selector 😭')
    }

    this.init()
  }

  init() {
    this._triggers = {}

    this.inputElem = document.createElement('input')
    this.inputElem.type = 'range'
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

class PricingPage {
  constructor() {
    this.kamflyPriceElem = document.getElementById('kamfly-price')
    this.thuisbezordPriceElem = document.getElementById('thuisbezorgd-price')
    this.uberEatsPriceElem = document.getElementById('ubereats-price')

    this.init()
  }

  init() {
    this.slider = new Slider({
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
    this.updateKamfly()
    this.updateThuisbezorgd()
    this.updateUberEats()
  }

  updateKamfly() {
    const price = 100 + this.slider.value * 0.02
    this.kamflyPriceElem.innerText = PricingPage.formatCurrency(price)
  }

  updateThuisbezorgd() {
    const price = this.slider.value * 0.13
    this.thuisbezordPriceElem.innerText = PricingPage.formatCurrency(price)
  }

  updateUberEats() {
    const price = this.slider.value * 0.15
    this.uberEatsPriceElem.innerText = PricingPage.formatCurrency(price)
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

new PricingPage()
