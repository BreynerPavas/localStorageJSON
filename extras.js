window.onload = () => {
    //Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)

    document.getElementById("bEnviar").addEventListener("click",showInfo)
    const objetoInputs = {
        nombre: [],
        correo : [],
        mensaje:[]
    }
    function showInfo(e){
        e.preventDefault()
        let inputs = document.getElementsByClassName("info");
        objetoInputs.nombre.push(inputs[0].value);
        objetoInputs.correo.push(inputs[1].value);
        objetoInputs.mensaje.push(inputs[2].value);
        console.log(objetoInputs)
        localStorage.setItem("usuarios",JSON.stringify(objetoInputs))
        
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = objetoInputs.nombre[objetoInputs.nombre.length-1];
        var td2 = document.createElement("td");
        td2.innerText = objetoInputs.correo[objetoInputs.correo.length-1];
        var td3 = document.createElement("td");
        td3.innerText = objetoInputs.mensaje[objetoInputs.mensaje.length-1];
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        var btnBorrar = document.createElement("td");
        btnBorrar.innerHTML = '<a href="">X</a>';
        btnBorrar.setAttribute("style","color:red")
        btnBorrar.firstChild.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log(e.target.parentElement.parentElement);
            e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
            
        })
        tr.appendChild(btnBorrar) 
        console.log(tr);

        document.getElementById("tablaInformacion").appendChild(tr)

    }
    document.getElementById("bBorrar").addEventListener("click",(e)=>{
        e.preventDefault();
        localStorage.clear();
        document.getElementById("tablaInformacion").innerHTML = "";
    })
}