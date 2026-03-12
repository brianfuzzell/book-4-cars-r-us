// import from transientState.js

const handlePaintSelection = (changeEvent) => {
    if (changeEvent.target.id === "paint-options") {
        const chosenOption = changeEvent.target.value
        console.log(parseInt(chosenOption))
    }
}

export const paintOptions = async () => {
    // Fetch paints from the API

    // console.log(paints)

    // Add an event listener
    document.addEventListener("change", handlePaintSelection)

    let optionsHTML = ""

    // Generate a new array of HTML strings using the Array.map() method
    const divStringArray = paints.map(
        (paint) => {
            return `<div>
                <select id="paint-options">
                    <option value="0">Select a paint color</option>
                    <option value="${paint.id}"> ${paint.color}</option>
                </select>
            </div>`
        }
    )

    // console.log(divStringArray)

    optionsHTML += divStringArray.join("")

    return optionsHTML
}