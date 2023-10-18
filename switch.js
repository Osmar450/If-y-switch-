function evaluarOpcion(opcion) {
    switch (opcion) {
        case 1:
            document.write("Seleccionaste la opción 1");
            break;
        case 2:
            document.write("Seleccionaste la opción 2");
            break;
        case 3:
            document.write("Seleccionaste la opción 3");
            break;
        default:
            document.write("Opción no válida");
    }
}

evaluarOpcion(1); // Llama a la función con la opción 1
