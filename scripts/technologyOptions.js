// import from transientState.js

const handleTechnologySelection = (changeEvent) => {
    if (changeEvent.target.id === "technology-options") {
        const chosenOption = changeEvent.target.value
        console.log(parseInt(chosenOption))
    }
}

export const technologyOptions = async () => {
    // Fetch technologies from the API

    // console.log(technologies)

    // Add an event listener
    document.addEventListener("change", handleTechnologySelection)

    let optionsHTML = ""

    // Generate a new array of HTML strings using the Array.map() method
    const divStringArray = technologies.map(
        (technology) => {
            return `<div>
                <select id="technology-options">
                    <option value="0">Select your technology package</option>
                    <option value="${technology.id}"> ${technology.package}</option>
                </select>
            </div>`
        }
    )

    // console.log(divStringArray)

    optionsHTML += divStringArray.join("")

    return optionsHTML
}