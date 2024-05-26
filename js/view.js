export class View {
  constructor() {}

  elements = {
    productList: document.querySelector(".productList"),
    sortTypeSelect: document.querySelector("#sortType"),
    sortCategorySelect: document.querySelector("#sortCategory"),
    sortOrderSelect: document.querySelector("#sortOrder"),
    filterInput: document.querySelector("#filterInput"),
    form: document.querySelector("#form")
  }

  renderItems(items) {
    this.elements.productList.innerHTML = ""

    items.forEach((element) => {
      const name = this.hightLightFilterValue(
        element.name,
        this.elements.filterInput.value
      )
      const markup = `
				<li>
					  <b><span>${element.subtitle}</span></b>
						<p>${name}</p>
						<p>Цена:<i> ${element.price}</i> руб.</p>
						<p>Дата добавления: ${element.date}</p>
				</li>
			`
      this.elements.productList.insertAdjacentHTML("afterbegin", markup)
    })
  }
  sortingElementsValue() {
    return {
      sortType: this.elements.sortTypeSelect.value,
      sortOrder: this.elements.sortOrderSelect.value,
      sortCategory: this.elements.sortCategorySelect.value,
      input: this.elements.filterInput.value
    }
  }

  sortingElements() {
    return {
      sortType: this.elements.sortTypeSelect,
      sortOrder: this.elements.sortOrderSelect,
      sortCategory: this.elements.sortCategorySelect,
      input: this.elements.filterInput
    }
  }

  resetFilter(elementsObj) {
    const { sortType, sortOrder, sortCategory, input } = elementsObj
    input.value = ""
    sortOrder.value = "asc"
    sortType.value = "price"
    sortCategory.value = "all"
  }

  hightLightFilterValue(name, filterValue) {
    const lowerCaseName = name.toLowerCase()
    const lowerCaseFilterValue = filterValue.toLowerCase()
    const startIdx = lowerCaseName.indexOf(lowerCaseFilterValue)
    if (startIdx !== -1) {
      const start = name.substring(0, startIdx)
      const interval = name.substring(startIdx, startIdx + filterValue.length)
      const end = name.substring(startIdx + filterValue.length)
      const highlightName = `${start}<span class="active">${interval}</span>${end}`
      return highlightName
    }
    return name
  }
}
