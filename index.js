window.onload = () => {
    //Crea una función que cuando envíes el formulario muestre por consola los datos de contacto rellenados en un objeto de JS
    document.getElementById("bEnviar").addEventListener("click",showInfo)
    function showInfo(e){
        e.preventDefault()
        let inputs = document.getElementsByClassName("info");
        const objetoInputs = {
            nombre: inputs[0].value,
            correo : inputs[1].value,
            mensaje:inputs[2].value
        }
        console.log(objetoInputs)
        //Guardar en Local Storage el objeto consoleado antes (sólo guarda un usuario)
        const localInfo = localStorage.setItem("informacion",(JSON.stringify(objetoInputs)))
        //Muestra el usuario que has guardado en el DOM (en el HTML)
        const localInfoObjeto = JSON.parse(localStorage.getItem("informacion"));
        console.log(localInfoObjeto)
        document.getElementById("mostrarNombre").innerText = localInfoObjeto.nombre;
        document.getElementById("mostrarCorreo").innerText = localInfoObjeto.correo;
        document.getElementById("mostrarMensaje").innerText = localInfoObjeto.mensaje;

    }
    
}