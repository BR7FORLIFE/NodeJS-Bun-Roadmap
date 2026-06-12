import { EventEmitter } from "node:events";

//creamos un emisor de eventos capaz de escuchar y emitir eventos
const emitter = new EventEmitter();

//escuchar eventos
//aun no ocurre nada solo definimos lo que queremos escuchar cuando se subcriba a dichos eventos
emitter.on("saludo", () => {
  console.log("hola");
});

//emitir eventos
emitter.emit("saludo"); //el nombre del evento que definimos anteriormente (on)

//los eventos igual pueden transferir informacion
emitter.on("usuario", (name) => {
  console.log(`Hola ${name}`);
});

emitter.emit("usuario", "bryan"); //le pasamos bryan como tranferencia de informacion

//enviar multiples argumentos
emitter.on("login", (id, name) => {
  console.log(
    `El usuario con la id ${id} y nombre ${name} logueado exitosamente!`,
  );
});

emitter.emit("login", "585aab7d-4246-49ce-bb67-6e895e6c4164", "bryan");

//escuchar un evento una vez, siempre queremos que un evento se dispare una sola vez
// sin importar el numero de veces que se emita dicho evento hay un metodo el cual es
emitter.once("inicio", () => {
  console.log("Empezando juego...");
});

//se emite el evento una vez
emitter.emit("inicio");
emitter.emit("inicio");
emitter.emit("inicio");

//eliminar listeners
function handler() {
  console.log("emitiendo un listener...");
}

emitter.on("guardando", handler);
emitter.off("guardando", handler); // quitamos el listener

//ver los listeners registrado en el objeto EventEmitter
console.log(emitter.listenerCount("saludo")); // 1

//obtener todos los eventos registrados en el EventEmitter
console.log(emitter.eventNames());

//eventos de error
emitter.emit("error", new Error("fallo!----"));

emitter.emit("error");
