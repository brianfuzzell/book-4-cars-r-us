import { placeOrder, completeOrder } from "./transientState.js"

const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "submission-button") {
        placeOrder()
    }
}

export const submissionButton = () => {
    document.addEventListener("click", handleOrderSubmission)

    return `<button id="submission-button">Place Car Order</button>`
}

document.addEventListener("click", (event) => {
    const { name, id } = event.target;
    if (name === "complete") {
        completeOrder(id);
    }
});