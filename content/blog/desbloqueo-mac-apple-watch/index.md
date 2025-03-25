---
title: "Desbloquear Mac con Apple Watch no funciona (Solución)"
date: 2019-09-07T19:16:58+02:00
image: "erdi-ugurlu-unsplash.webp"
draft: false
author: "JotaGarciaz"
tags:
  - MacOS
  - Mac
  - Apple
  - WatchOS
---

Tras actualizar mi Apple Watch series 3 a WatchOS 7, el reloj dejó de darme el servicio de poder desbloquear el Mac con él. Al intentar activar la opción me salía un mensaje de error. Decía que por favor mantuviera el iPhone y el Apple Watch desbloqueados mientras se enlazaban.

La opción de desbloqueo me es muy util en el día a día. Por ello, me interesaba bastante encontrar una solución. Así que este sábado me puse manos a la obra. Y, aunque no ha sido fácil, por fin he dado con la solución. Escribo esta entrada al blog tras escuchar en el[ podcast 214 de Asilohacemos](http://asilohacemos.com/214-asi-potenciamos-un-servicio/) en el que Àlex comenta que le está pasando lo mismo. Como, tras mirar los comentarios encontré que a otro oyente también le pasa, me he animado.

Para todos los que nos ha pasado, hay varios motivos por los que puede estar pasando. Y también varias pruebas que pueden ayudar a encontrar el fallo. Sin embargo, parece que la solución definitiva en este caso es la siguiente. ### Cómo desbloquear el Mac con el Apple Watch:

1. En el Mac accede al programa de _Keychain Access_ o _Acceso a Llaveros_ (es fácil de buscar con spotlight, no obstante te dejo [la guía de Apple](https://support.apple.com/es-es/guide/mac-help/mchlf375f392/mac)).
2. Una vez dentro en la barra superior deberemos de seleccionar la opción _Visualización_ y dentro de este _Mostrar ítems invisibles._
3. Ya realizado este paso, debemos usar el buscador de la aplicación para buscar lo siguiente Auto Unlock.
4. A continuación debemos usar el buscador de Acceso a llaveros de nuevo, pero esta vez buscaremos AutoUnlock sin espacios, nos mostrará cuatro items **tlk**, **tlk-nonsync**, **class A** y **class B**.
5. Ahora debes de seleccionar todos los resultados y eliminarlos. No te preocupes que no vas a cargarte nada.
6. Ahora abre el Finder y pulsa las teclas (**⇧⌘G**) del teclado o si lo prefieres en el menú selecciona la opción **Ir > Ir a la carpeta...** y en el cuadro de texto introduce esto sin las comillas ~/Biblioteca/Sharing/AutoUnlock.
7. En Finder te saldrán ahora varios archivos, debemos de seleccionarlos y eliminarlos.
8. Reinicia el ordenador.
9. Nos vamos a: **Preferencias del sistema > Seguridad y privacidad > General > Usar el Apple Watch** para desbloquear apps y el Mac. Y mientras se esta activando mantén el Apple Watch y el iPhone desbloqueados.

### Vídeo explicativo:

{{< youtube "fYoPOsGDNt0?si=YLE4VF-jy7tYoAYF" >}}

En un principio con esta solución debería de empezar a funcionarnos a la mayoría.

Si te sirve la solución te invito a que le compartas la publicación con más afectados. Parece que de momento Apple no ha tomado medidas para solucionar el problema y podría ser útil.

Un saludo de paso a toda la comunidad Asiler y en especial a Joan y Àlex.
