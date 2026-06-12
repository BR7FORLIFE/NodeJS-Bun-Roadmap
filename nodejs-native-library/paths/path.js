import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "path";

//ayuda mucho a tratar con rutas ya que en diferentes sistemas operativos su file system es muy distinto

const joinPath = path.join("uploads", "images", "foto.png"); // uploads/images/foto.png
console.log(joinPath);

// fileURLToPath -> convierte una url de archivo a una ruta de sistema absocluta y compatible con el sistema operativo
// import.meta -> proporciona metadatos sobre el modulo que se esta ejecutando actualmente
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

console.log(_dirname); //ruta del directorio del archivo actual
console.log(_filename); // ruta completa del archivo actual incluyendo en dicho path el nombre del archivo

const resolve = path.resolve("uploads"); //genera una ruta absoluta a diferencia del join que la genera en segmentos
console.log(resolve);

const basename = path.basename("uploads"); //acepta un segunfo parametro que es la extension de dicho archivo
console.log(basename); //obtiene el nombre del archivo de una ruta en especifica

const dirnamePath = path.dirname("/paths/foto.png");
console.log(dirnamePath); // obtiene la carpeta donde se encuentra alojado el archivo

const extension = path.extname("foto.png");
console.log(extension); //obtiene la extension de un archivo

const parse = path.parse("/uploads/fotos/foto.png");
console.log(parse); // divide la ruta en partes ejemplo:

/*
    {
        root: '/',
        dir: '/uploads',
        base: 'foto.jpg',
        ext: '.jpg',
        name: 'foto'
    }
*/

const format = path.format({
  dir: "/uploads",
  name: "foto",
  ext: ".png",
});
console.log(format); //lo contrario al parse, este te entrega la ruta formateada para usar

const normalize = path.normalize("/uploads//images/../foto.png");
console.log(normalize); //normaliza una ruta

const isAbsolute = path.isAbsolute("/uploads/foto.png"); //verifica si la ruta es absoluta o no (true / false)
console.log(isAbsolute);
