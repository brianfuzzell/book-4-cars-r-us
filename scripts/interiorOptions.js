import { setInteriorChoice } from "./transientState.js"

const handleInteriorSelection = (changeEvent) => {
    if (changeEvent.target.id === "interior-options") {
        setInteriorChoice(parseInt(changeEvent.target.value))
    }
}

export const interiorOptions = async () => {
    // Fetch interiors from the API
    const response = await fetch("https://localhost:7204/interiors")
    const interiors = await response.json()

    // console.log(interiors)

    // Add an event listener
    document.addEventListener("change", handleInteriorSelection)

    let optionsHTML = "<h2>Interior</h2>"

    optionsHTML += '<select id="interior-options">'
    optionsHTML += '<option value="0">Select an interior material</option>'

    // Generate a new array of HTML strings using the Array.map() method 
    const arrayOfOptions = interiors.map(
        (interior) => {
            return `<option value="${interior.id}"> ${interior.type}</option>`
        }
    )  
    
    // console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")
    optionsHTML += "</select>"

    return optionsHTML
}