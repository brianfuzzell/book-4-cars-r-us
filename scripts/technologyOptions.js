import { setTechnologyChoice } from "./transientState.js"

const handleTechnologySelection = (changeEvent) => {
    if (changeEvent.target.id === "technology-options") {
        setTechnologyChoice(parseInt(changeEvent.target.value))
    }
}

export const technologyOptions = async () => {
    // Fetch technologies from the API
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    // console.log(technologies)

    // Add an event listener
    document.addEventListener("change", handleTechnologySelection)

    let optionsHTML = "<h2>Technology</h2>"

    optionsHTML += '<select id="technology-options">'
    optionsHTML += '<option value="0">Select a technology package</option>'

    // Generate a new array of HTML strings using the Array.map() method
    const arrayOfOptions = technologies.map(
        (technology) => {
            return `<option value="${technology.id}"> ${technology.package}</option>`
        }
    )

    // console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")
    optionsHTML += "</select>"

    return optionsHTML
}