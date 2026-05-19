export const ordersList = async () => {
  // Fetch orders from the API
  const response = await fetch("https://localhost:7204/orders");
  const orders = await response.json();

  // Generate the HTML representation for each order
  let html = `
        <div id="order-submissions">
            <h2>Custom Car Orders</h2>
    `;

  const ordersHTML = orders.map((order) => {
    return `
                <section class="order-submission-container">
                    <p>${order.paintColor.color} car with ${order.wheels.style} wheels, ${order.interior.material} interior, and the ${order.technology.package} for a total cost of ${order.totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                    <input type="button" name="complete" id="${order.id}" value="Complete">
                </section>
            `;
  });

  html += ordersHTML.join("");

  html += `
        </div>
    `;

  return html;
};
