// example on classes usage
class Vacation {
  constructor (destination, length) {
    this.destination = destination
    this.length = length
  }

  print () {
    console.log(`${this.destination} will take ${this.length} days. `)
  }
}
const trip = new Vacation('Chanxopa', 7)
console.log(trip.print())

class Expedition extends Vacation {
  constructor (destination, length, gear) {
    super(destination, length)
    this.gear = gear
  }

  print () {
    super.print()
    console.log(`bring your ${this.gear.join(' and your ')}`)
  }
}

const expedition = new Expedition('armeria', 1, ['armas', 'drogas', 'narcos'])
expedition.print()
