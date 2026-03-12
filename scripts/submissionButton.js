import { placeOrder } from "./transientState.js"

const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "submission-button") {
        console.log("Place Car Order button clicked")
        placeOrder()
    }
}

export const submissionButton = () => {
    document.addEventListener("click", handleOrderSubmission)

    return `<button id="submission-button">Place Car Order</button>`
}