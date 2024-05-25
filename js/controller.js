import { View } from "./view.js"
import { Model } from "./model.js"

const view = new View()
const model = new Model()

init()

async function init() {
  await model.loadingData()
  view.renderItems(model.data)
  addEventListeners()
}

function addEventListeners() {
  view.elements.sortTypeSelect.addEventListener("change", sortProduct)
  view.elements.sortCategorySelect.addEventListener("change", sortProduct)
  view.elements.sortOrderSelect.addEventListener("change", sortProduct)
  view.elements.filterInput.addEventListener("input", filterProduct)
  view.elements.form.addEventListener("submit", resetFilter)
}

function sortProduct() {
  const sortingValue = view.sortingElementsValue()
  const filteredItems = model.filteringData(sortingValue)
  view.renderItems(filteredItems)
}

function filterProduct(){
	const value = this.value.toLowerCase()
	model.filterSearch(value)
	sortProduct()
}

function resetFilter(e){
  e.preventDefault()
	const sortingElements = view.sortingElements()
	view.resetFilter(sortingElements)
	sortProduct()
}