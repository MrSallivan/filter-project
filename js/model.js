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

  filteringData(sortsArray) {
    const { sortType, sortCategory, sortOrder } = sortsArray
    let filteredData
		if (sortCategory !== 'all') {
			filteredData = this.data.filter((item)=> {
				return item.category === sortCategory
			})
		} else {
			filteredData = [...this.data]
		}
		filteredData.sort((a, b)=>{
			switch()




		})

  }
}
