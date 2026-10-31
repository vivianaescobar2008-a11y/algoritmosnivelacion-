function calcularComision() {
    let nombre;
    let ventas;
    let antiguedad;
    let porcentaje;
    let valorComision;

    alert("Este algoritmo calcula la comisión de un vendedor según sus ventas mensuales y su antigüedad.");

    nombre = prompt("Ingrese el nombre del vendedor:");
    ventas = parseFloat(prompt("Ingrese el valor de las ventas del mes:"));
    antiguedad = parseInt(prompt("Ingrese los años de antigüedad en la empresa:"));

    if (ventas < 3000000) {
        porcentaje = 0;
    } else if (ventas >= 3000000 && ventas < 8000000) {
        porcentaje = 0.05;
    } else if (ventas >= 8000000 && antiguedad >= 2) {
        porcentaje = 0.10;
    } else {
        porcentaje = 0.05;
    }

    valorComision = ventas * porcentaje;

    alert("--- RESULTADO DE LA LIQUIDACIÓN ---");
    alert("Nombre del vendedor: " + nombre);
    alert("Ventas realizadas: $" + ventas);
    alert("Porcentaje de comisión: " + (porcentaje * 100) + "%");
    alert("Valor de la comisión: $" + valorComision);
}


function ClasificacionPrestamo() {
    let nombre;
    let ingresos;
    let gastos;
    let historial;
    let dineroDisponible;
    let resultado;

    alert("Este algoritmo evalúa una solicitud de préstamo según los ingresos, gastos y el historial crediticio.");

    nombre = prompt("Ingrese el nombre del solicitante:");
    ingresos = parseFloat(prompt("Ingrese los ingresos mensuales:"));
    gastos = parseFloat(prompt("Ingrese los gastos mensuales:"));
    historial = prompt("Ingrese el historial crediticio (positivo o negativo):");

    dineroDisponible = ingresos - gastos;

    if (ingresos <= gastos) {
        resultado = "Rechazado por capacidad de pago insuficiente";
    } else if (historial === "negativo") {
        resultado = "Rechazado por historial crediticio";
    } else if (historial === "positivo") {
        if (dineroDisponible >= 1000000) {
            resultado = "Preaprobado";
        } else {
            resultado = "Pendiente de revisión";
        }
    } else {
        resultado = "Historial crediticio no válido";
    }

   
    alert("RESULTADO DE LA EVALUACIÓN ");
    alert("Nombre del solicitante: " + nombre);
    alert("Dinero disponible: $" + dineroDisponible);
    alert("Resultado de la evaluación: " + resultado);
}



function TarifaAlojamiento() {
    let nombre;
    let tipoHabitacion;
    let temporada;
    let noches;
    let tarifaBase = 0;
    let costoAntesDescuento = 0;
    let descuentoAplicado = 0;
    let totalAPagar = 0;

    alert("Este algoritmo calcula el costo de alojamiento según el tipo de habitación, temporada y noches.");

    nombre = prompt("Ingrese el nombre del huésped:");
    tipoHabitacion = prompt("Ingrese el tipo de habitación (estándar, ejecutiva o suite):");
    temporada = prompt("Ingrese la temporada (alta o baja):");
    noches = parseInt(prompt("Ingrese el número de noches reservadas:"));

if (noches <= 0) {
    alert("Error: El número de noches debe ser mayor a cero.");
} else {
    if (tipoHabitacion === "estándar" || tipoHabitacion === "estandar") {
        tarifaBase = 150000;
    } else if (tipoHabitacion === "ejecutiva") {
        tarifaBase = 250000;
    } else if (tipoHabitacion === "suite") {
        tarifaBase = 400000;
    } else {
        tarifaBase = 0;
    }

    if (tarifaBase === 0) {
        alert("Error: Tipo de habitación no válido.");
    } else {
        if (temporada === "alta") {
            tarifaBase = tarifaBase * 1.20;
        }

        costoAntesDescuento = tarifaBase * noches;

        if (noches >= 5) {
            descuentoAplicado = costoAntesDescuento * 0.10;
        }

        totalAPagar = costoAntesDescuento - descuentoAplicado;

        
        alert(" RESULTADO DE ALOJAMIENTO ");
        alert("Nombre del huésped: " + nombre);
        alert("Tarifa por noche: $" + tarifaBase);
        alert("Costo antes del descuento: $" + costoAntesDescuento);
        alert("Descuento aplicado: $" + descuentoAplicado);
        alert("Total a pagar: $" + totalAPagar);

        }
    }
}

// ALGORITMOS BUCLES 

function RegistroVentasJornada() {
    let cantidadVentas;
    let totalVendido = 0;
    let ventasMayores200k = 0;
    let ventaMasAlta = 0;
    let promedio = 0;

    alert("Este algoritmo registra las ventas de una jornada laboral.");

    cantidadVentas = parseInt(prompt("Ingrese la cantidad de ventas que se van a registrar:"));

if (cantidadVentas <= 0 || isNaN(cantidadVentas)) {
    alert("Error: La cantidad de ventas debe ser mayor a cero.");
} else {
    for (let i = 1; i <= cantidadVentas; i++) {
        let valorVenta = parseFloat(prompt("Ingrese el valor de la venta #" + i + ":"));

      
        totalVendido = totalVendido + valorVenta;

        
        if (valorVenta > 200000) {
            ventasMayores200k++;
        }

        
        if (i === 1) {
            ventaMasAlta = valorVenta;
        } else if (valorVenta > ventaMasAlta) {
            ventaMasAlta = valorVenta;
        }
    }

    promedio = totalVendido / cantidadVentas;

    alert(" RESULTADO DE VENTAS DE LA JORNADA ");
    alert("Cantidad de ventas registradas: " + cantidadVentas);
    alert("Total recaudado: $" + totalVendido);
    alert("Promedio por venta: $" + promedio);
    alert("Cantidad de ventas superiores a $200.000: " + ventasMayores200k);
    alert("Valor de la venta más alta: $" + ventaMasAlta);
    }

}

function ControlInventario() {
    let nombreProducto;
    let inventarioInicial;
    let unidadesVendidasTotal = 0;
    let operacionesValidas = 0;
    let inventarioActual;

    alert("Este algoritmo realiza el control de inventario de una tienda.");

    nombreProducto = prompt("Ingrese el nombre del producto:");
    inventarioInicial = parseInt(prompt("Ingrese el inventario inicial:"));

if (inventarioInicial <= 0 || isNaN(inventarioInicial)) {
    alert("Error: El inventario inicial debe ser mayor a cero.");
} else {
    inventarioActual = inventarioInicial;

    
    while (inventarioActual > 0) {
        let unidadesVenta = parseInt(prompt("Inventario actual: " + inventarioActual + "\nIngrese la cantidad de unidades vendidas en esta operación:"));

        if (unidadesVenta > inventarioActual) {
            alert("Error: La cantidad solicitada supera el inventario disponible. La operación no puede realizarse.");
        } else if (unidadesVenta <= 0 || isNaN(unidadesVenta)) {
            alert("Error: Ingrese una cantidad válida mayor a cero.");
        } else {
            
            inventarioActual = inventarioActual - unidadesVenta;
            unidadesVendidasTotal = unidadesVendidasTotal + unidadesVenta;
            operacionesValidas++;
        }
    }

    
    alert("--- RESULTADO DE CONTROL DE INVENTARIO ---");
    alert("Nombre del producto: " + nombreProducto);
    alert("Unidades vendidas en total: " + unidadesVendidasTotal);
    alert("Operaciones válidas: " + operacionesValidas);
    alert("Inventario final: " + inventarioActual);
    }

}

function AnalisisTemperaturas() {
    let cantidadDias;
    let sumaTemperaturas = 0;
    let temperaturaMasAlta = 0;
    let temperaturaMasBaja = 0;
    let diasSuperiores30 = 0;
    let promedio = 0;

    alert("Este algoritmo analiza las temperaturas registradas en un periodo determinado[cite: 5].");

    cantidadDias = parseInt(prompt("Ingrese la cantidad de días que se van a registrar:"));

if (cantidadDias > 0) {
    for (let i = 1; i <= cantidadDias; i++) {
        let temperatura = parseFloat(prompt("Ingrese la temperatura del día " + i + " (°C):"));

        
        sumaTemperaturas = sumaTemperaturas + temperatura;

        
        if (temperatura > 30) {
            diasSuperiores30 = diasSuperiores30 + 1;
        }

        
        if (i === 1) {
            temperaturaMasAlta = temperatura;
            temperaturaMasBaja = temperatura;
        } else {
            if (temperatura > temperaturaMasAlta) {
                temperaturaMasAlta = temperatura;
            }
            if (temperatura < temperaturaMasBaja) {
                temperaturaMasBaja = temperatura;
            }
        }
    }

    
    promedio = sumaTemperaturas / cantidadDias;

    
    alert("--- RESULTADO ANÁLISIS DE TEMPERATURAS ---");
    alert("Cantidad de días registrados: " + cantidadDias);
    alert("Temperatura promedio: " + promedio + " °C");
    alert("Temperatura máxima: " + temperaturaMasAlta + " °C");
    alert("Temperatura mínima: " + temperaturaMasBaja + " °C");
    alert("Cantidad de días superiores a 30 °C: " + diasSuperiores30);
} else {
    alert("Error: La cantidad de días debe ser mayor a cero.");

    }
    
}

