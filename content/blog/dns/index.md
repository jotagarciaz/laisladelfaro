---
title: "DNS"
date: 2017-11-03T19:45:01+02:00
image: "robert-wiedemann-unsplash.webp"
author: "JotaGarciaz"
draft: false
tags:
  - dirección ip
  - dns
  - domain name system
  - dominio
---

Hola de nuevo. En mi afán por que todo el mundo monte su propia página web, aunque solo sea por experimentar, he decidido escribir este pequeño artículo sobre DNS. Creo que es bastante importante si ya habéis comprado un nombre de dominio. También si ya tenéis la web alojada en algún sitio. Es importante porque con él podrás hacer la interconexión entre ambos.

![Google DNS](https://cloud.google.com/images/products/dns/global-dns-network.png?hl=es)

## ¿Qué es el DNS?

Muchos conoceréis que los dispositivos, cuando se conectan a internet, pasan a estar identificados por un número largo llamado IP. Un ejemplo de IP sería **192.168.1.1**. Es decir, a groso modo, cualquier dispositivo tiene una IP en internet. Esto también involucra a los servidores de paginas web, y gracias a ello nosotros podemos entrar en ellas.

Así pues, por ejemplo el que os he puesto no llega realmente a salir a internet, es una IP local. Por ello, si intentas meter esa IP en la barra de direcciones de tu navegador, como mucho entrarás a la configuración de tu router. En cambio, si escribes **216.58.210.131 o 74.125.29.101**, verás como entras a Google. Así es como navegamos realmente por internet, aunque nosotros no lo sepamos.

Y no lo sabemos por culpa del DNS.

El DNS es el **D**omain **N**ame **S**ystem o, en castellano, Sistema de Nombres de Dominio. Nos permite decorar nuestra IP de forma que cuando alguien pregunte por una dirección por ejemplo **http://google.es** esta dirección se interprete como **216.58.210.131.**

Podemos imaginarnos los DNS como una gran tabla en la que hay nombres de webs y su correspondencia de IP, para que cuando queramos buscar una página mediante su nombre podamos acudir a él, ver cuál es su IP y entonces entrar con ella.

Todo esto es invisible para el usuario final, pero útil de saber para el encargado de la web.

## ¿Por qué los dominios tienen dos DNS?

Muchas veces nos encontraremos con dominios que tienen dos DNS.

Esto se hace así por precaución ya que, como todo en informática, puede fallar. En ese caso, podría ser que se cayese algún DNS. Así que, para que la gente pueda seguir conectándose mientras el DNS falla, hay un DNS secundario al que se le podría consultar por la IP del dominio.

## Configuración de DNS.

Si tienes comprado un dominio, podrás buscar en el sitio en el que lo compraste hasta encontrar una sección que te permita configurarlo.

Estos son algunos de los ajustes que puedes hacer:

#### DNS Tipo A

En este apartado tendremos que poner la IP de nuestro servidor, VPS y el hosting en el que tengamos almacenado nuestra web. De esta forma, cuando se pregunte por el nombre de dominio, este devolverá la IP de nuestro servidor, y por lo tanto la web si lo tenemos bien configurado.

#### DNS Tipo AAAA

Este apartado sirve para las IPv6, que son más largas que las IPs antiguas, llamadas IPv4. Estas IPv4 son como los ejemplo de IPs anteriores. Un ejemplo de IPv6 sería 2001:0db8:85a3:08d3:1319:8a2e:0370:7334.

Las IPv6 se sacaron principalmente para ser utilizadas cuando se agotasen las IPv4. La configuración sirve para lo mismo que las anteriores. El único cambio es que introducimos la IPv6 de nuestro servidor en caso de tenerla.

#### DNS Tipo MX

Si tenemos un servidor de correo y queremos mandar correos con nuestro nombre de dominio en este apartado deberíamos colocar la IP de nuestro servidor de correos. Con esto me refiero a crear direcciones de correo, por ejemplo, como podría ser la de [La isla del faro](https://www.laisladelfaro.com): noreply@laisladelfaro.com

#### DNS CName

Para enmascarar otra web a la que te dirijas. Por ejemplo: www.laisladelfaro.com podría pasar a ser la laisladelfaro.com Para el caso que he puesto como ejemplo, bastaría con poner en este apartado _laisladelfaro.com_ y listo.

#### DNS TXT

Para añadir texto con un identificador. Así por ejemplo, en vez de subir un archivo de verificación que te pide Google al inscribir tu sitio en Google webmasters, puedes poner el valor en este DNS y Google te lo validará como si hubieras subido el archivo.

## Si mi proveedor de dominios no tiene la configuración de DNS, ¿qué hago?

Podremos usar Dynahosting, aunque la configuración es complicada y no conozco ningún tutorial bueno para facilitar el link. Si conseguís alguno bueno, por favor hacédmelo llegar, para que cuelgue el link aquí.

Y, en un principio, esto sería todo lo que considero necesario conocer si uno se plantea configurar un dominio para que apunte a su página web.

Si queréis seguir trabajando en ello, lo siguiente que os recomendaría hacer para vuestra web es [instalar un certificado SSL](http://laisladelfaro.local/https-certificado-ssl/).
