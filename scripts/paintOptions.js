import { setPaintChoice } from "./transientState.js"

const handlePaintSelection = (changeEvent) => {
    if (changeEvent.target.id === "paint-options") {
        setPaintChoice(parseInt(changeEvent.target.value))
    }
}

export const paintOptions = async () => {
    // Fetch paints from the API
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    // console.log(paints)

    // Add an event listener
    document.addEventListener("change", handlePaintSelection)

    let optionsHTML = "<h2>Paint</h2>"

    optionsHTML += '<select id="paint-options">'
    optionsHTML += '<option value="0">Select a paint color</option>'

    // Generate a new array of HTML strings using the Array.map() method
    const arrayOfOptions = paints.map(
        (paint) => {
            return `<option value="${paint.id}"> ${paint.color}</option>`
        }
    )

    // console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")
    optionsHTML += "</select>"

    return optionsHTML
}