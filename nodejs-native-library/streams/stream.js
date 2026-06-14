import fs from "node:fs";
import { dirname } from "node:path";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

// aun no pasa nada solo definimos el stream y a que archivo se le aplicara
const stream = fs.createReadStream(`${_dirname}/examples/text.txt`);

//escuchamos los datos
stream.on("data", (chunks) => console.log(chunks)); //buffer de datos en formato hexadecimal

//eschamos los datos pero en formato con una codificacion de texto utf 8
const streamUtf8 = fs.createReadStream(`${_dirname}/examples/text.txt`, {
  encoding: "utf-8",
});

streamUtf8.on("data", (chunk) => console.log(chunk));

//evento de finalizacion de lectura de informacion
streamUtf8.on("end", () => console.log("Lectura de archivo finalizado"));

//evento de error
streamUtf8.on("error", (err) => console.log(err));

//Writable streams
const writable = fs.createWriteStream(`${_dirname}/examples/text.txt`);

writable.write("Este es un texto escrito por un writable ");
writable.end();

//copiar un archivo de forma manual (no recomendado BACKPRESSURE)
const origin = `${_dirname}/examples/read.txt`;
const destiny = `${_dirname}/examples/destiny.txt`;

//creamos el stream reader oara el archivo de origen
const reader = fs.createReadStream(origin, { encoding: "utf-8" });
const writer = fs.createWriteStream(destiny);

//pretendemos leer el archivo y al mismo tiempo escribimos al archivo de destino

//generalmente la velocidad de lectura es mucho mas rapida que de lectura ocurriendo en perdidas de datos
reader.on("data", (chunk) => {
  writer.write(chunk); //tenemos un problema ya que el tiempo de lectura no es el mismo de escritura (BACKPRESSURE)
});

reader.on("end", () => writer.close());

//solucion PIPE
reader.pipe(writer); //asi garantizamos consistencia

//forma node like Pipeline/promises
await pipeline(reader, writer, (err) => (err ? console.log(err) : null));

