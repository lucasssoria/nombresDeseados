// Se pide la CANTIDAD de nombres
let cantidad: number = Number(
  prompt("¿Cuantos nombres desea ingresar? Ingrese la cantidad en numeros: ")
);
// Array para guardar los NOMBRES
let nombres: string[] = new Array("");
// Bucle hasta que el usuario ingrese los nombres segun la cantidad
for (let i = 0; i < cantidad; i++) {
  let ingresos = String(
    prompt("Ingreso nº: " + (i + 1) + "Ingrese un nombre: ")
  );
  nombres[i] = ingresos;
}
console.log(nombres);
