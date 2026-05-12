function mostrarDatos(){

    // OBTENER VALORES
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;

    // VALIDAR CAMPOS
    if(nombre === "" || edad === ""){

        document.getElementById("resultado").innerHTML =
        "⚠️ Por favor completa todos los campos.";

        return;
    }

    // MOSTRAR RESULTADO
    document.getElementById("resultado").innerHTML = `
        <strong>Nombre:</strong> ${nombre} <br>
        <strong>Edad:</strong> ${edad} años
    `;
}
