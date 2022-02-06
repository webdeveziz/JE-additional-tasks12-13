// Задание 1

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,

  checkChancesToWin(defenderObject) {
    let shans = 0

    for (const key in this) {
      if (typeof this[key] === 'number' && this[key] > defenderObject[key]) {
        shans += 1
      }
    }

    return [shans, Object.keys(defenderObject).length]
  },

  improveArmy() {
    for (const key in this) {
      if (typeof this[key] === 'number') {
        this[key] += 5
      }
    }
  },

  attack(defender) {
    const maximumChances = Object.keys(defender).length
    const ourArmyChances = this.checkChancesToWin(defender)[0]
    if (ourArmyChances < 3) {
      this.improveArmy()
      alert(
        `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`
      )
    } else {
      alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
    }
  },
}

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}

attacker.attack(defender) // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender) // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender) // Мы усилились! Мы несомненно победим! Наши шансы высоки!
