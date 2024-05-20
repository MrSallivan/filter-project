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
  view.elements.sortTypeSelect.addEventListener("change", onClickSorting)
  view.elements.sortCategorySelect.addEventListener("change", onClickSorting)
  view.elements.sortOrderSelect.addEventListener("change", onClickSorting)
}

function onClickSorting() {
  const sortingValue = view.sortingElementsValue()
  console.log(sortingValue)
}
