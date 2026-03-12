export const ordersList = async () => {
    // Fetch orders from the API
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel")
    const orders = await response.json()

    // Generate the HTML representation for each order
    let html = `
        <div id="order-submissions">
            <h2>Custom Car Orders</h2>
    `

    const ordersHTML = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price
            // Trying out the toLocalString() method to format the order price
            const formattedPrice = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            return `
                <section class="order-submission-container">
                    <p>${order.paint.color} car with ${order.wheel.option} wheels, ${order.interior.type} interior, and the ${order.technology.package} for a total cost of ${formattedPrice}</p>
                </section>
            `
        }
    )

    html += ordersHTML.join("")

    html += `
        </div>
    `

    return html
}