---
title: "¿Es posible vivir sin Google? El servicio de Google DNS"
date: 2019-07-16T13:42:35+02:00
image: "james-qualtrough-unsplash.webp"
draft: false
author: "JotaGarciaz"
lastmod: 2025-07-25T09:06:50+02:00
priority: 0.7
tags:
  - chrome
  - DNS
  - DoH
  - Google
---

Aquí esta la tercera parte sobre [si es posible vivir sin Google y cómo le rehuimos](../posible-vivir-sin-google-chrome/), esta vez sobre Google DNS. En la entrada anterior hablábamos sobre el navegador, ese famoso "devorador de RAM". A Chrome lo tratábamos de evitar proponiendo algunas alternativas, como las que uso actualmente: Safari o Firefox.

[![monster](./iu-2.webp)(./iu-2.webp)
Fuente: [Fciencas](https://www.fciencias.com/2016/10/10/google-chrome-vai-deixar-um-comilao-ram/)]

Esta tercera entrega también será más corta que la primera ya que no hay mucho que contar sobre el tema. Así que nuevamente nos podremos centrar en las distintas alternativas y en las ventajas y desventajas de estas.

## ¿Qué es el Google DNS?

Antes de empezar con las alternativas, debemos hablar un poco sobre el DNS de Google. Lo primero es entender [qué es un DNS y para qué sirve](../dns/). Una vez entendido el funcionamiento de este, nos es fácil comprender por qué Google está interesada en que uses su servicio de DNS.

En este caso, Google usa sus DNS 8.8.8.8 y 8.8.4.4 para recabar información sobre las direcciones web que visitas. Además, se lo pones en bandeja, ya que cuando tú pones una URL, o pinchas en una, ellos se encargan en enviarle a tu ordenador la información que realmente necesita para poder entrar en la web que quieres.

De esta forma, Google tiene permiso para aprender sobre las paginas web que visitas, cuándo las visitas y un largo etc. de información.

¿Cómo podemos evitar, por lo tanto, el uso de la DNS de Google?

## Alternativas a Google DNS.

Lo primero que debemos realizar es una búsqueda sobre qué opción nos interesa más para sustituir el DNS de Google. Hay un montón de alternativas, todas con ventajas y desventajas. Por ello te recomiendo pasarte por páginas como esta de [Lifewire](https://www.lifewire.com/free-and-public-dns-servers-2626062). En ella hay listados con un montón de alternativas. Yo, para explicar el procedimiento, usaré [FreeDNS](https://freedns.zone/en/), cuyas direcciones para España son:

- DNS primario: 172.104.237.57.
- DNS secundario: 172.104.49.100.

Una vez tengamos elegido nuestro DNS con sus cualidades, debemos pasar a usarlo. Pero, ¿cómo?

## Configurar DNS:

La configuración de DNS la podemos realizar tanto en los dispositivos como en el router.
La primera opción nos obligará a configurar los DNS de cada dispositivo que tengamos. Esto puede ser un jaleo. Aunque también te permite ajustar en cada uno el DNS que más te guste. Puedes tener, por ejemplo, un DNS rápido para un dispositivo multimedia, un DNS seguro para el dispositivo con tus cuentas bancarias y un dispositivo con otro DNS para navegar por internet.

La otra opción es cambiar el DNS del router. Implica algo más de complicación normalmente que la opción anterior (aunque configurar el DNS en móviles y tablets puede llegar a resultar más difícil).
La configuración del DNS del dispositivo normalmente se podrá hacer desde ajustes. Incluso algunas aplicaciones permiten tener su propia configuración de DNS, que puede ser muy interesante para terminar de ajustar nuestro dispositivo a medida.

Para configurar el DNS del router necesitamos acceder a la interfaz de configuración de este. Para los que no han entrado nunca en la interfaz de configuración del router, os recomiendo buscar el router y vuestra compañía en internet. Así podréis ver cuáles son el usuario y claves por defecto. Además, encontraréis posiblemente manuales y rutas para encontrar la configuración.

## Una curiosidad.

Extraer información sobre las búsquedas que hacemos a través del DNS es muy común por parte de empresas proveedoras de servicios. Tanto que Google, y sobre todo Firefox, están investigando este hecho y sacando soluciones como DNS over HTTPS, que encripta la comunicación entre puntos, de forma que se complique la extracción de información por parte de otras empresas ajenas al cometido. De hecho, Firefox ya está sacando resultados de estudios de esta funcionalidad: «DoH» o «DNS over HTTPS».

Os dejo este link por si queréis [saber más acerca de DoH o DNS over HTTPS](https://blog.nightly.mozilla.org/2018/08/28/firefox-nightly-secure-dns-experimental-results/).

Además, DoH, aparte de brindarnos un sistema cifrado entre el servidor DNS y el cliente, en algunos casos hará que la búsqueda sea más rápida.

Todo esto ha producido también el enfado de ciertas empresas e incluso países por el uso de esta tecnología. [Como el caso de Reino Unido y sus proveedores de servicio.](https://www.zdnet.com/article/uk-isp-group-names-mozilla-internet-villain-for-supporting-dns-over-https/)

Creo que con esto podemos dar por concluido el post de hoy. Pero si quieres más información sobre alguno de los puntos o que te ayude con algo, puedes dejar un comentario por aquí y intentaré echarte un cable cuando lo lea.

Un saludo y nos vemos en el próximo post.
