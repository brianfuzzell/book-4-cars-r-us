import { interiorOptions } from "./interiorOptions.js"
import { paintOptions } from "./paintOptions.js"
import { technologyOptions } from "./technologyOptions.js"
import { wheelOptions } from "./wheelsOptions.js"
import { submissionButton } from "./submissionButton.js"
import { ordersList } from "./ordersList.js"

const container = document.querySelector("#container")

const render = async () => {
    const interiorOptionsHTML = await interiorOptions()
    const paintOptionsHTML = await paintOptions()
    const technologyOptionsHTML = await technologyOptions()
    const wheelOptionsHTML = await wheelOptions()
    const buttonHTML = submissionButton()
    const ordersHTML = await ordersList()

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="options">
                ${paintOptionsHTML}
            </section>

            <section class="options">
                ${interiorOptionsHTML}
            </section>

            <section class="options">
                ${wheelOptionsHTML}
            </section>

            <section class="options">
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