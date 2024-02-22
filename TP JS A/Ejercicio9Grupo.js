class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

var personas = [];

function agregarDatos() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;

    var nuevaPersona = new Persona(nombre, apellido, dni);
    personas.push(nuevaPersona);

    actualizarTabla();

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
}

function actualizarTabla() {
    var tablaDatos = document.getElementById("tablaDatos");
    var lastRowIndex = personas.length - 1;

    var row = tablaDatos.insertRow();

    var celNombre = row.insertCell(0);
    var celApellido = row.insertCell(1);
    var celDNI = row.insertCell(2);

    celNombre.innerHTML = personas[lastRowIndex].nombre;
    celApellido.innerHTML = personas[lastRowIndex].apellido;
    celDNI.innerHTML = personas[lastRowIndex].dni;
}