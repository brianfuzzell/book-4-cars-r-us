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
    const newOrder = {
        WheelsId: transientState.wheelId,
        TechnologyId: transientState.technologyId,
        PaintId: transientState.paintId,
        InteriorId: transientState.interiorId
    }

    await fetch("https://localhost:7204/orders", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newOrder)
    })

    // Dispatch a custom event when the submission is complete
    const stateChanged = new CustomEvent("newOrderSubmitted")
    document.dispatchEvent(stateChanged)
}
