var auto = {
      marca: 'Chevrolet',
      año: '2013',
      modelo: 'Sonic',
      color:'Gris'};
  console.log(Object.keys(auto));

  Object.keys(auto).forEach((valor) => {
    console.log(valor);
  });


var fecha = new Date('Enero 2, 1969 17:45:00');
var diaSemana = fecha.getDay();
console.log(diaSemana);

NO SUPE COMO RESOLVERLO
function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    console.log("Hola")
    var a=40

}

function crearGato(nombre, edad) {
    var gato = {
  nombre : nombre,
  edad: edad,
  meow: function (){
    return "Meow!";
  }
}
return gato;
}
var perro = crearGato ('Lupe', 5);
console.log(perro)


Se me incendió la cabeza con este
function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
}


var nombres = ['Leonardo', 'Diego', 'Lucas', 'Julieta'];
  nombres.sort();
console.log(nombres);
