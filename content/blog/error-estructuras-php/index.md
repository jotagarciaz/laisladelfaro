---
title: "Error en estructuras de control PHP por la sintaxis alternativa"
date: 2019-07-10T18:54:26+02:00
image: "tom-gainor-unsplash.webp"
draft: false
author: "JotaGarciaz"
lastmod: 2025-07-25T09:06:50+02:00
priority: 0.9
tags:
  - PHP
  - Sintaxis Alternativa
  - Plesk
  - error
---

## El error en las estructuras de control.

Acabo de encontrarme con un problema al intentar configurar una página en Plesk para su funcionamiento en este panel de control.El problema es que la página contenía [sintaxis alternativas (alternative syntax)](https://secure.php.net/manual/en/control-structures.alternative-syntax.php) para el tratamiento de algunas estructuras de control (bucles y condicionales) con sintaxis como la siguiente:

```
<?php if ($a == 5): ?> A is equal to 5 <?php endif; ?>
```

Primero, al buscar cómo podía configurar el servidor para su correcto funcionamiento, no me he encontrado con la solución que arreglaba este fallo. Por ello, he indagado por las configuraciones de Plesk, y allí he dado con la clave.

## La solución.

Para hacerlo funcionar lo único que tuve que hacer es:

1. En el menú lateral seleccionar la pestaña de _Sitios web y dominios._
2. A continuación, bajo el dominio en el que queremos permitir la sintaxis alternativa, seleccionamos _Configuración de PHP._
3. Activamos `short_open_tag`.
4. Aplicamos los cambios y tras el autoreinicio del servidor debería de empezar a funcionar.

Espero que si estás leyendo esto porque tienes este problema, se te solucione.
