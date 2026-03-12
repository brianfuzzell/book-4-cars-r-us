// import from transientState.js

const handleInteriorSelection = (changeEvent) => {
    if (changeEvent.target.id === "interior-options") {
        const chosenOption = changeEvent.target.value
        console.log(parseInt(chosenOption))
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
                    <option value="0">Select your interior</option>
                    <option value="1">Beige Fabric</option>
                    <option value="2">Charcoal Fabric</option>
                    <option value="3">White Leather</option>
                    <option value="4">Black Leather</option>
                </select>
            </div>`
        }
    )  
    
    // console.log(divStringArray)

    optionsHTML += divStringArray.join("")

    return optionsHTML
}