---
title: "Transferir archivos con SCP usando SSH"
date: 2019-06-12T18:44:15+02:00
image: "ricardo-iv-tamayo-unsplash.webp"
draft: false
author: "JotaGarciaz"
tags:
  - SSH
  - SCP
  - raspberry
  - raspberry pi
---

Hoy vamos a enseñaros a transferir archivos con SCP usando SSH. ¿Para qué sirve esto?, os preguntaréis. Pues bien simple. ¿Alguna vez habéis querido pasar archivos a la [Raspberry](../raspberry-pi-primeros-pasos/), o a cualquier ordenador, pero no teníais instalado un servidor FTP o solo podías conectarte con SSH a la terminal? Para eso es para lo que sirve este comando. Es sorprendentemente útil, sobre todo con la Raspberry, por lo menos para nosotros.

## Los pasos del comando SCP para enviar archivos o descargarlos.

Lo primero que necesitaremos es nuestra cuenta de acceso por SSH. Tiene que estar configurada en el ordenador de destino. Lo siguiente que debemos hacer es ejecutar este comando en nuestra terminal:

```
scp /ruta-al-archivo-a-enviar/archivo-a-enviar usuario@IP-de-Destino:ruta-en-el-destino-deseada
```

Si queremos subir un directorio, entonces debemos de añadir _-r_. De esta manera:

```
scp -r /ruta-al-archivo-a-enviar/archivo-a-enviar usuario@IP-de-Destino:ruta-en-el-destino-deseada
```

Para descargar un archivo desde el destino remoto a nuestro ordenador local basta con invertir el comando. Es decir:

```
scp  usuario@IP-de-Destino:ruta-en-el-destino-del-archivo /ruta-a-la-que-deseemos-recibir-el-fichero
```

Y el mismo proceso si queremos descargar un directorio. En ese caso debemos de añadir -r al comando anterior:

```
scp -r  usuario@IP-de-Destino:ruta-en-el-destino-del-archivo /ruta-a-la-que-deseemos-recibir-el-fichero
```

Y eso sería todo. La verdad es que es un comando bastante sencillo, pero creo que muy útil.

Espero que os haya resultado de ayuda este breve tutorial. Nosotros lo utilizamos de vez en cuando. Sobre todo, cuando estamos trabajando con la Raspberry, donde arrancar FileZilla o conectarse al Samba, la mayoría de las veces, implica más tiempo que ejecutar este sencillo comando en la terminal.

¿Ya conocíais este comando? Los que sí, ¿lo soléis usar con frecuencia o preferís otras alternativas?

Echaremos un vistazo a todas las alternativas que nos dejéis en los comentarios, como siempre. Y, si nos gustan más que esta, quizás hablemos de ellas en un futuro post.

Un saludo y nos vemos en el próximo post :)
