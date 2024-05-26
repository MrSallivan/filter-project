export class Model {
  constructor() {
    this.data = []
    this.filterData = []
  }

  async loadingData() {
    return new Promise((resolve, reject) => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => {
          this.data = data
          this.filterData = [...this.data]
          resolve()
        })
        .catch((err) => {
          console.error("Ошибка загрузки данных", err)
          reject()
        })
    })
  }

  filteringData(sortsArray) {
    const { sortType, sortCategory, sortOrder, input } = sortsArray
    let filteredData
    if (sortCategory !== "all" && input === "") {
      filteredData = this.filterData.filter((item) => {
        return item.category === sortCategory
      })
    } else if (sortCategory === "all" && input !== "") {
      filteredData = [...this.data]
      filteredData = filteredData.filter((product) => {
        return product.name.toLowerCase().includes(input.toLowerCase())
      })
    } else if (sortCategory !== "all" && input !== "") {
      filteredData = this.filterData.filter((item) => {
        return item.category === sortCategory
      })
      filteredData = filteredData.filter((product) => {
        return product.name.toLowerCase().includes(input.toLowerCase())
      })
    } else {
      filteredData = [...this.data]
    }

    return filteredData.sort((a, b) => {
      switch (sortType) {
        case "date":
          return sortOrder === "desc"
            ? Date.parse(a.date) - Date.parse(b.date)
            : Date.parse(b.date) - Date.parse(a.date)

        case "alphabet":
          const nameA = a.name.toLowerCase()
          const nameB = b.name.toLowerCase()
          if (sortOrder === "desc") {
            if (nameA < nameB) {
              return 1
            } else if (nameA > nameB) {
              return -1
            } else {
              return 0
            }
          } else if (sortOrder === "asc") {
            if (nameA > nameB) {
              return 1
            } else if (nameA < nameB) {
              return -1
            } else {
              return 0
            }
          }

        case "price":
          const priceA = a.price
          const priceB = b.price
          return sortOrder === "desc" ? priceA - priceB : priceB - priceA
      }
    })
  }

  // filterSearch(value) {
  //   if (value === "") {
  //     this.filterData = [...this.filterData]
  //   } else {
  //     this.filterData = this.filterData.filter((product) => {
  //       return product.name.toLowerCase().includes(value)
  //     })
  //   }
  // }
}
