import { setWheelChoice } from "./transientState.js"

// Set up change handler
const handleWheelSelection = (changeEvent) => {
    if (changeEvent.target.id === "wheel-options") {
        setWheelChoice(parseInt(changeEvent.target.value))
    }
}

export const wheelOptions = async () => {
    // Fetch wheels from the API

    // console.log(wheels)

    // Add an event listener
    document.addEventListener("change", handleWheelSelection)

    let optionsHTML = ""

    // Generate a new array of HTML strings using the Array.map() method
    const divStringArray = wheels.map(
        (wheel) => {
            return `<div>
                <select id="wheel-options">
                    <option value="0">Select a wheel style</option>
                    <option value="${wheel.id}"> ${wheel.option}</option>
                </select>
            </div>`
        }
    )

    // console.log(divStringArray)

    optionsHTML += divStringArray.join("")

    return optionsHTML
}