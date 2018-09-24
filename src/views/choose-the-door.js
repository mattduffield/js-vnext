export class ChooseTheDoor {

  constructor() {

  }
  test() {
    this.init();
  }
  lock(secret) {
    const key = Symbol('key')

    return {
      key, unlock(keyUsed) {
        if (keyUsed === key) {
          return secret
        } else {
          return '*'.repeat( secret.length || secret.toString().length )
        }
      }
    }
  }
  choose(message, options, secondAttempt) {
    const opts = options.map((option, index) => {
      return `Type ${index+1} for: ${option}`
    })

    const resp = Number( prompt(`${message}\n\n${opts.join('\n')}`) ) - 1

    if ( options[resp] ) {
      return resp
    } else if (!secondAttempt) {
      return this.choose(`Last try!\n${message}`, options, true)
    } else {
      throw Error('No selection')
    }
  }
  init() {
    const { key:key1, unlock:door1 } = this.lock('A new car')
    const { key:key2, unlock:door2 } = this.lock('A trip to Hawaii')
    const { key:key3, unlock:door3 } = this.lock('$100 Dollars')

    const keys = [key1, key2, key3]
    const doors = [door1, door2, door3]

    const key = keys[Math.floor(Math.random() * 3)]

    const message = 'You have been given a \u{1F511} please choose a door.'

    const options = doors.map((door, index) => {
      return `Door #${index+1}: ${door()}`
    })

    const door = doors[ this.choose(message, options) ]

    alert( door(key) )
  }
}
