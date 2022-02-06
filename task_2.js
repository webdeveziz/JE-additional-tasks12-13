// Задание 2

class Dictionary {
  #words
  #name
  constructor(name) {
    this.#name = name
    this.#words = {}
  }

  get mainName() {
    return this.#name
  }

  set setMainName(name) {
    this.#name = name
    return this.#name
  }

  get allWords() {
    return this.#words
  }

  addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = wordObj
  }

  add(word, description) {
    const doneWord = this.#words[word]?.word
    if (doneWord === undefined || word !== doneWord) {
      this.addNewWord(word, { word, description })
    }
  }

  remove(key) {
    delete this.#words[key]
  }

  get(key) {
    return this.#words[key]
  }

  showAllWords() {
    for (const key in this.#words) {
      const el = this.#words[key]
      console.log(`${el.word} - ${el.description}`)
    }
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name)
  }
  add(word, description) {
    const doneWord = this.allWords[word]?.word
    if (doneWord === undefined || word !== doneWord) {
      this.addNewWord(word, { word, description, isDifficult: true })
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')

hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
)

hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
)

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
)

hardWordsDictionary.remove('неологизм')

hardWordsDictionary.showAllWords()

console.log(hardWordsDictionary.mainName) // Сложные слова
hardWordsDictionary.setMainName = 'Новый Словарь'
console.log(hardWordsDictionary.mainName) // Новый Словарь
console.log(hardWordsDictionary.allWords) // выводит объект в котором есть слова
// // дилетант и квант
