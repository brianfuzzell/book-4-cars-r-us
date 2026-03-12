import { setInteriorChoice } from "./transientState.js"

const handleInteriorSelection = (changeEvent) => {
    if (changeEvent.target.id === "interior-options") {
        setInteriorChoice(parseInt(changeEvent.target.value))
    }
}

export const interiorOptions = async () => {
    // Fetch interiors from the API

    // console.log(interiors)

    // Add an event listener
    document.addEventListener("change", handleInteriorSelection)

    let optionsHTML = ""

    // Generate a new array of HTML strings using the Array.map() method 
    const divStringArray = interiors.map(
        (interior) => {
            return `<div>
                <select id="interior-options">
                    <option value="0">Select an interior material</option>
                    <option value="${interior.id}"> ${interior.type}</option>
                </select>
            </div>`
        }
    )  
    
    // console.log(divStringArray)

    optionsHTML += divStringArray.join("")

    return optionsHTML
}