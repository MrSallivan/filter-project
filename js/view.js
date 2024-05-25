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
      const markup = `
				<li>
					  <b><span>${element.subtitle}</span></b>
						<p>${element.name}</p>
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
      sortCategory: this.elements.sortCategorySelect.value
    }
  }

  sortingElements() {
    return {
      sortType: this.elements.sortTypeSelect,
      sortOrder: this.elements.sortOrderSelect,
      sortCategory: this.elements.sortCategorySelect
    }
  }

  resetFilter(elementsObj) {
    const { sortType, sortOrder, sortCategory } = elementsObj
    this.elements.filterInput.value = ""
    sortOrder.value = "asc"
    sortType.value = "price"
    sortCategory.value = "all"
  }
}
