import fs from "node:fs";
import fsAsync from "node:fs/promises";

const PATH = "./fs-fs-promise/files";

//leer un archivo
fs.readFile(`${PATH}/text.txt`, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});

const content = await fsAsync.readFile(`${PATH}/text.txt`, "utf-8");
console.log(content);

//escribir en un archivo (crea el archivo si no existe)
//version asincrona
await fs.writeFile(
  `${PATH}/hola-async.txt`,
  "hola desde writefile de forma asincrona",
  "utf-8",
  (err) => console.error(err),
);

//version sincrona
fs.writeFileSync(
  `${PATH}/hola-sync.txt`,
  "Hola desde write file de forma sincrona",
  "utf-8",
  (err) => console.error(err),
);

//añadir contenido a un archivo modo append
await fs.appendFile(
  `${PATH}/hola-async.txt`,
  "\n\neste es un texto añadido ademas del anterior",
  "utf-8",
  (err) => console.error(err),
);

fs.appendFileSync(
  `${PATH}/hola-sync.txt`,
  "\n\neste es un texto añadido ademas del anterior",
  "utf-8",
  (err) => console.error(err),
);

//existencia de un archivo
try {
  await fs.access(`${PATH}/hola-async.txt`, null, (err) => console.log(err));
  console.log("existe el archivo");
} catch (error) {
  console.log(error);
}

//eliminar un archivo (ya de aca para alante tenemos version con callback y la version asincrona)
await fs.unlink(`${PATH}/hola-async.txt`, (err) => console.log(err));

//renombrar un archivo
await fs.rename(
  `${PATH}/hola-sync.txt`,
  `${PATH}/hola-sync-rename.txt`,
  (err) => console.log(err),
);

//informacion del archivo
await fs.stat(`${PATH}/text.txt`, (_, data) => console.log(data));

//crear carpetas
await fs.mkdir(`${PATH}/carpeta-generada-xd`, { recursive: true }, (err) =>
  console.error(err),
);

//leer directorio
await fs.readdir(
  `${PATH}`,
  { recursive: true }, //le dice que lea todos los archivos recursivamente si hay carpetas con mas archivos leera dentro de ellas caso contrario solo lee la parte superior o el nivel mas alto
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  },
);

//CopyFile (origen, destino) -> copia archivos
// rm -> borra carpetas puede recibir opciones ya sea de forma recursiva o forzada o ambas
