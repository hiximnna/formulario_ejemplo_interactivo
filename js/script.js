function mostrarDatos(){

    // OBTENER DATOS
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    // VALIDAR
    if(nombre === "" || edad === ""){

        document.getElementById("resultado").innerHTML =
        "⚠️ Completa todos los campos.";

        return;
    }

    // MOSTRAR DATOS
    document.getElementById("resultado").innerHTML =
    "<strong>Nombre:</strong> " + nombre +
    "<br><strong>Edad:</strong> " + edad + " años";
}
