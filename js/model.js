export class Model {
  constructor() {
    this.data = []
  }

  async loadingData() {
    return new Promise((resolve, reject) => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
          this.data = data
          resolve()
        })
        .catch((err) => {
          console.error("Ошибка загрузки данных", err)
          reject()
        })
    })
  }

  sortingData(sortsArray) {}
}
