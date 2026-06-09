import express from "express";
// const data: Response = await fetch(apiUrl).then((res) => res.json()) as Response; version fetch
import axios from "axios";

interface Response {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/";

const api = axios.create({
    baseURL: apiUrl,
});

//creamos un interceptor antes de enviar la request para ver su configuracion
api.interceptors.request.use((config) => {
    console.log("hola desde el interceptor de request");
    console.log(config);
    return config;
});

//Interceptors.request -> contiene el config o el draft de la que se pretende ser la request
/*
Es como un boceto de la peticion que se quiere enviar al servidor, ahi puedes colocar cabeceras, informacion
relevante, efectos secundarios etc etc

¡Importante! -> los interceptores usan un patron de diseño llamado chain of responsability

Donde en Interceptors.request se concatenan los interceptores de manera LIFO (el ultimo es el primero en ejecutar)
en cambui en Interceptors.response se los 
*/

//Interceptors.response -> contiene por asi decirlo el objeto res (en el cliente) de la peticion que se acaba
// de hacer al encadenarlas siguen un principio FIFO donde el primer interceptor se ejecuta y despues los demas

/*
Ejemplo al hacer un fetch obtener toda la metadata de la respuesta para posteriormente utilizarla
*/

console.log("antes de hacer el fetch");
const data = await api.get("");

console.log(data);
