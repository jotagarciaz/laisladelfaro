---
title: "HTTPS y Certificado SSL"
date: 2017-01-08T10:59:00+02:00
image: "paulius-dragunas-lighthouse.webp"
draft: false
author: "JotaGarciaz"
tags:
  - certificados ssl
  - entidades certificadoras
  - http
  - https
  - protocolos
  - información
---

# **Hypertext Transfer Protocol Secure** (_Protocolo seguro de transferencia de hipertexto_)

El HTTPS es un modo de navegación web seguro, presente en muchísimas páginas web en la actualidad. Este modo es muy reconocido por estar representado con un candado verde. Se puede conseguir instalando un certificado SSL en nuestro servidor o hosting (si necesitáis ayuda con la configuración dejad un comentario o escribirme un email y estaré encantado de crear un tutorial para ello).

## **Certificado SSL**

Este certificado sirve para brindar seguridad a visitantes de su página web. Es una manera de decirles a sus clientes que el sitio es auténtico, real y confiable para ingresar datos personales. El certificado SSL es un protocolo de seguridad que hace que sus datos viajen de manera íntegra y segura. Es decir, la transmisión de los datos entre un servidor y usuario web, se encriptan de manera que los usuarios mediante una clave pueden recibir los datos del servidor y descifrarlos y al revés. Así los datos sólo pueden ser interpretados por los clientes y el servidor, ya que los datos viajarán cifrados. Evitando así que si alguien capta los datos por el camino (Man-in-the-middle) pueda leerlos.

## **¿Cómo conseguir nuestro certificado SSL?**

Tenemos dos posibilidades para generar un certificado SSL para nuestra web:-

- #### **Autogenerado:**

Tú puedes crear tus propios certificados SSL, si alguien tiene interés en autogenerarse un certificado que me pregunte por ello y crearé un tutorial. Esta solución suele ser poco útil en web porque los certificados autogenerados no suelen estar reconocidos por los navegadores web, así que si estamos usando Chrome por ejemplo e intentamos entrar a una web con un certificado autogenerado lo más probable es que nos encontremos con esto.Evidentemente este mensaje puede provocar que muchos usuarios potenciales terminen marchándose por su seguridad. Por tanto autogenerarse un certificado no suele ser muy recomendado, sobre todo si la principal fuente de ingresos de la empresa será su web.![Google](peligroso.png)

- #### **Entidades certificadoras:**

Esta es la segunda opción que tenemos para conseguir nuestro certificado. Consiste en encargarle a una empresa externa que certifique nuestra web. La ventaja de esta segunda opción es que la mayoría de las Entidades Certificadoras sí están reconocidas por nuestro navegador (que en el caso de las imagenes expuestas es Chrome). Por lo que al entrar en la web nos encontraremos con una de estas alternativas:![Google](no-es-seguro.png)![Google](seguro.png)Estas alternativas parecen mejores que la anterior, por lo que ya habremos optimizado la web en ese aspecto. La diferencia entre “Seguro” e “información o no seguro” reside en que a la segunda le faltan que ciertas peticiones de la web sean administradas por HTTPS. Por ello bastaría con solucionar el problema de estas peticiones para que se nos ponga “el candado verde”.Como contrapartida a conseguir el certificado por una entidad certificadora es que estas empresas suelen cobrar bastante dinero por generarlo. Dependiendo de la empresa y del tipo de certificado SSL que te vendan, podemos estar hablando desde los 60€ hasta cientos de € al año. Por lo que para pequeñas empresas puede suponer un gran sacrificio.Lo bueno es que hoy en día contamos con alguna entidad certificadora que te los hace gratis como por ejemplo [Certbot](https://certbot.eff.org/), y gracias a este tipo de certificadoras gratuitas, las grandes empresas certificadoras están abaratando mucho sus precios y permiten que todas las web se puedan permitir tener una página segura.Si necesitáis ayuda para generar certificaciones con Certbot, podeis contactar conmigo sin ningún problema.
