document.addEventListener("DOMContentLoaded", function() {
    let contador = 0;

    const frmDatosPersonales = document.getElementById("frmDatosPersonales");
    frmDatosPersonales.addEventListener("submit", function(event) {
        event.preventDefault();

        contador++;
        const txtPaso = document.getElementById("txtPaso").value;
        const txtProducto = document.getElementById("txtProducto").value;
        const txtMarca = document.getElementById("txtMarca").value;
        const txtPrecio = document.getElementById("txtPrecio").value;
        const txtFecha = document.getElementById("txtFecha").value;

        const fila = document.createElement("tr");
        const celdaPaso = document.createElement("td");
        const celdaProducto = document.createElement("td");
        const celdaMarca = document.createElement("td");
        const celdaPrecio = document.createElement("td");
        const celdaFecha = document.createElement("td");

        const divBotones = crearBotones();

        celdaPaso.textContent = txtPaso;
        celdaProducto.textContent = txtProducto;
        celdaMarca.textContent = txtMarca;
        celdaPrecio.textContent = txtPrecio;
        celdaFecha.textContent = txtFecha;

        fila.appendChild(celdaPaso);
        fila.appendChild(celdaProducto);
        fila.appendChild(celdaMarca);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaFecha);
        fila.appendChild(divBotones);

        document.getElementById("cuerpoTabla").appendChild(fila);
        frmDatosPersonales.reset();
    });

    function crearBotones() {
        const divBotones = document.createElement("div");
        divBotones.className = "btn-group";
    
        const btnEditar = crearBoton("src/assets/edit.png", "btn-primary");
        const btnEliminar = crearBoton("src/assets/delete.png", "btn-danger");
        const btnAceptar = crearBoton("src/assets/save.png", "btn-success");
    
        btnEditar.addEventListener("click", function () {
            const fila = this.closest("tr");
            if (fila) {
                habilitarEdicion(fila);
                btnAceptar.disabled = false;
                btnEliminar.disabled = true;
                btnEditar.disabled = true;
            } else {
                console.log("No se encontró la fila");
            }
        });
    
        btnAceptar.addEventListener("click", function () {
            const filaEditar = this.closest("tr");
            if (filaEditar) {
                deshabilitarEdicion(filaEditar);
                btnAceptar.disabled = true;
                btnEliminar.disabled = false;
                btnEditar.disabled = false;
            }
        });
    
        btnEliminar.addEventListener("click", function () {
            const filaEliminar = this.closest("tr");
            if (filaEliminar) {
                filaEliminar.remove();
            }
        });
    
        divBotones.appendChild(btnEditar);
        divBotones.appendChild(btnEliminar);
        divBotones.appendChild(btnAceptar);
    
        btnAceptar.disabled = true;
    
        return divBotones;
    }
    
    function crearBoton(imagenSrc, clase) {
        const btn = document.createElement("button");
        btn.className = "btn " + clase;
        const imagen = document.createElement("img");
        imagen.src = imagenSrc;
        btn.appendChild(imagen);
        return btn;
    }
    
    function habilitarEdicion(fila) {
        fila.querySelectorAll("td").forEach(function (celda, index) {
            if (index !== 0 && index !== fila.cells.length - 1) {
                celda.contentEditable = true;
            }
        });
    }
    
    function deshabilitarEdicion(fila) {
        fila.querySelectorAll("td").forEach(function (celda, index) {
            if (index !== 0 && index !== fila.cells.length - 1) {
                celda.contentEditable = false;
            }
        });
    }
    
});
