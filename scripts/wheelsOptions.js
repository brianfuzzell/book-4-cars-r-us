import { setWheelChoice } from "./transientState.js"

// Set up change handler
const handleWheelSelection = (changeEvent) => {
    if (changeEvent.target.id === "wheel-options") {
        setWheelChoice(parseInt(changeEvent.target.value))
    }
}

export const wheelOptions = async () => {
    // Fetch wheels from the API
    const response = await fetch("https://localhost:7204/wheels")
    const wheels = await response.json()

    // console.log(wheels)

    // Add an event listener
    document.addEventListener("change", handleWheelSelection)

    let optionsHTML = "<h2>Wheels</h2>"

    optionsHTML += '<select id="wheel-options">'
    optionsHTML += '<option value="0">Select a wheel style</option>'

    // Generate a new array of HTML strings using the Array.map() method
    const arrayOfOptions = wheels.map(
        (wheel) => {
            return `<option value="${wheel.id}"> ${wheel.style}</option>`
        }
    )

    // console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")
    optionsHTML += "</select>"

    return optionsHTML
}