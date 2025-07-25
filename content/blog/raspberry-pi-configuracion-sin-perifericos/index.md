---
title: "Raspberry Pi Configuración Sin Perifericos"
date: 2019-04-24T18:38:51+02:00
image: "lawrence-hookham-unsplash.webp"
draft: false
author: "JotaGarciaz"
lastmod: 2025-07-25T09:06:50+02:00
priority: 0.5
tags:
  - linux
  - raspberry pi
---

Hola ;) El otro día, Clare me comentó que tenía que hacer un tutorial de cómo configurar la Raspberry Pi sin periféricos. Es decir, sin monitor, ni teclado, ni ratón. Solamente con el Wi-Fi o el cable de Internet. Así que a ello voy. Podréis encontrar más información al respecto si buscáis conexión headless de la Raspberry. Como ya os habrá contado ella, vamos a [utilizar una tarjeta micro SD que hará las veces de Disco Duro](../raspberry-pi-primeros-pasos/). Dentro de esta tarjeta tendréis que tener el Sistema Operativo que hayáis escogido. Una vez seguido el proceso que explica Clare aquí, deberemos hacer lo siguiente.

## Antes de meter la micro SD en la Raspberry.

Lo primero es crear un archivo llamado **ssh**, pero sin ninguna extensión. Este archivo tenemos que crearlo en la raíz del SO, que normalmente coincide con la raíz de la partición boot de la micro SD. Además, si la vais a conectar por Wi-Fi, deberemos crear otro archivo. En este caso, con extensión, llamado **wpa-supplicant.conf**. Sin embargo, yo os recomendaría que el arranque inicial fuese siempre por cable, por los problemas que el Wi-Fi puede ocasionar.

## Para crear algunos archivos sin periféricos.

Lo primero es crear un archivo llamado **ssh**, pero sin ninguna extensión en la raíz del S.O. que lo normal es que coincida con la raíz de la Micro SD de la partición boot. Además si la vais a conectar por Wi-Fi (para el arranque inicial siempre recomiendo por cable, por los problemas que puede ocasionar el Wi-FI) deberemos de crear otro archivo pero esta vez con extensión llamado **wpa-supplicant.conf**.

### Para editar esos archivos.

Una vez creado el **wpa-supplicant.conf** deberéis abrirlo con un editor, como Notepad++ o VSCode, y añadir lo siguiente.

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid=home
    scan_ssid=1
    psk=very secret passphrase
    key_mgmt=WPA-PSK
}
```

En este caso, home sería el nombre del router. El nombre del router, para quien no lo sepa, es el que te aparece al intentar conectarte al Wi-Fi. Y very secret passphrase será tu contraseña del Wi-Fi. Recuerda dejar estos datos entre las dobles comillas, o te dará error. Por último, guardáis el archivo y voilà. Ya debería estar todo suficientemente configurado como para poder arrancar y poder acceder a ella mediante SSH en tu ordenador. Para saber la IP de la RaspBerry, como os indica Clare que necesitáis, cada uno deberá buscarse un método. El que yo encuentro más sencillo es conectarse al router y ver la tabla de IP, para encontrar cuál ha sido asignada a tu RPi.
