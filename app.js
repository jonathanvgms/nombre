const btnEnviar = document.getElementById('btnEnviar')
const txtNombre = document.getElementById('txtNombre')
btnEnviar.addEventListener('click', mostrarNombre)

function mostrarNombre() {
    let nombre = txtNombre.value
    alert(nombre)
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}