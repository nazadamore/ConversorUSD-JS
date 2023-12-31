// se definen elementos y etiquetas que se van a usar
const cuerpo = document.body
const main = document.createElement("main")
cuerpo.prepend(main)
const botonC = document.createElement("button")
botonC.innerText = "Cotización"
botonC.id = "botonDolar"
botonC.classList = "botones"
main.appendChild(botonC)
const botonCoti = document.getElementById("botonDolar")
const divFormNombre = document.getElementById("divForm")

// Creamos un boton para saber la cotización del día usando una API
botonCoti.onclick = function() {
    fetch("https://api.bluelytics.com.ar/v2/latest")
        .then((res) => res.json())
        .then((data) => {
            const ul = document.createElement("ul")
            ul.id = "dolar"
            main.appendChild(ul)
            const dolar = document.getElementById('dolar')
            const dolarValue = data.blue
            window.dolarValor = dolarValue.value_avg

            dolar.innerHTML =
                `<h4>Referencia del Dolar hoy:</h4>
                <li>Valor de Compra: $ ${dolarValue.value_avg}.- (ARS)</li>            
                <li>Valor de Venta: $ ${dolarValue.value_buy}.- (ARS)</li>   
                <hr/>`
        })
        .catch((error) => {
            console.error("Error:", error)
            const dolar = document.getElementById('dolar')
            dolar.innerHTML = `<li>Error al cargar la cotización.</li>`
        })
}
