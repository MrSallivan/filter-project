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
}

function sortProduct() {
  const sortingValue = view.sortingElementsValue()
  console.log(sortingValue)
  const filteredItems = model.filteringData(sortingValue)
  console.log(filteredItems)
}
