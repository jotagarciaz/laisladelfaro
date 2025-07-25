---
title: "Algunos trucos para la terminal del Mac."
date: 2019-04-26T14:37:01+02:00
image: "mark-hamilton-unsplash.webp"
draft: false
author: "JotaGarciaz"
lastmod: 2025-07-25T09:06:50+02:00
priority: 0.3
tags:
  - tips
  - Mac
  - MacOS
---

Para esta serie de comandos voy a suponer que ya tienes algo de conocimiento con la Terminal y sus comandos básicos.

- Comprimir un archivo con contraseña. Para ello iniciamos la terminal usamos `zip -e nombre-del-archivo-comprimido.zip /directorio-del-archivo` a comprimir. El comando también se puede usar para comprimir carpetas por lo que puede resultar muy útil por ejemplo para encriptar las copias de seguridad de tus BBDD.
- Desactivar el Dashboard y ahorrar algo de recursos `defaults write com.apple.dashboard mcx-disabled -boolean TRUE; killall Dock`
- Desactivar el delay al salir del Dock. `defaults write com.apple.dock autohide-delay -float 0; killall Dock`
- Desactivar la animación del Dock. `defaults write com.apple.dock autohide-time-modifier -float 0; killall Dock`
- Desactivar la sombra de ventanas a la hora de hacer una captura de pantalla `defaults write com.apple.screencapture disable-shadow -bool TRUE; killall SystemUIServer`
- Mantener el mac despierto, para que no pierda por ejemplo la conexión a internet, o los procesos que estabas realizando. `cafeinate`

Fuente: [https://www.youtube.com/watch?v=BxePMaHH878](https://www.youtube.com/watch?v=BxePMaHH878)
