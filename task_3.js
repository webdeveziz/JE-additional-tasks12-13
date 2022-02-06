// Задание 3

class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  }

  constructor(name, workingHours = CarService.DefaultWorkingHours) {
    this.name = name
    this.workingHours = workingHours || CarService.DefaultWorkingHours
  }

  repairCar(carName) {
    const currentDate = new Date()

    if (!carName)
      return console.error(
        `Вам необходимо указать название машины, чтобы ее отремонтировать. Например BMW, Audi, Tesla model S и так далее!`
      )

    const from = Number(this.workingHours.from.split(':')[0])
    const till = Number(this.workingHours.till.split(':')[0])
    if (currentDate.getHours() > from && currentDate.getHours() < till) {
      alert(
        `Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста!`
      )
    } else {
      alert(`К сожалению, мы сейчас закрыты. 
Сейчас время ${currentDate.getHours()}:${currentDate.getMinutes()}.
Мы работаем с ${this.workingHours.from} до ${this.workingHours.till}.
Приходите завтра! `)
    }
  }
}

const carService = new CarService('RepairCarNow', {
  from: '8:00',
  till: '20:00',
})
carService.repairCar('BMW')
