const transientState = {
    interiorId: 0,
    paintId: 0,
    technologyId: 0,
    wheelId: 0
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    // console.log(`Selected interior ID is ${transientState.interiorId}`)
}

export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    // console.log(`Selected paint ID is ${transientState.paintId}`)
}

export const setTechnologyChoice = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    // console.log(`Selected technology ID is ${transientState.technologyId}`)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    // console.log(`Selected wheen ID is ${transientState.wheelId}`)
}

// Write and export the placeOrder function
export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state data to the API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    // Dispatch a custom event when the submission is complete
}

    