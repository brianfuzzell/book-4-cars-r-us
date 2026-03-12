import { interiorOptions } from "./interiorOptions.js"
import { paintOptions } from "./paintOptions.js"
import { technologyOptions } from "./technologyOptions.js"
import { wheelOptions } from "./wheelsOptions.js"
// import submission button
// import orders

const container = document.querySelector("#container")

const render = async () => {
    const interiorOptionsHTML = await interiorOptions()
    const paintOptionsHTML = await paintOptions()
    const technologyOptionsHTML = await technologyOptions()
    const wheelOptionsHTML = await wheelOptions()
    // submission button
    // orders

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="options">
                <h2>Paint</h2>
                ${paintOptionsHTML}
            </section>

            <section class="options">
                <h2>Interior</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="options">
                <h2>Wheels</h2>
                ${wheelOptionsHTML}
            </section>

            <section class="options">
                <h2>Technology</h2>
                ${technologyOptionsHTML}
            </section>
        </article>

        <article class="submit">
            ${buttonHTML}
        </article>

        <article class="orders">
            ${ordersHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

// Add an event listener for our new custom event

render()