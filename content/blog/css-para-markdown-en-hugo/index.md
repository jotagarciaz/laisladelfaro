---
title: "Css Para Markdown en Hugo"
date: 2026-02-27T17:21:01+01:00
image: "image.jpeg"
draft: true
author: "JotaGarciaz"
lastmod: 2026-02-27T17:21:01+01:00
priority: 0.7
tags:
   - markdown
   - css
   - Hugo
---

El otro día mientras diseñaba una página en Hugo me surgió una duda, como podía editar pequeños elementos de una entrada, por ejemplo un titulo en concreto sin alterar el layout de ese tipo.

En mi caso quería centrar un subtitulo en específico para esa entrada pero no quería hacerlo para todo el proyecto.

Investigando me tope con la solución, especificar un identificador de css usando la propia tecnología de plantillas que usa Hugo:

en mi caso puse las almohadillas para crear el subtitulo y a continuación añadí el identificador de el estilo css que debia tener {#css_id}, el conjunto quedaba algo así

` ## subtitulo {#id} `

posteriormente en mi archivo css añadí el estilo apropiado, a través del identificado #id y quedó funcionando perfectamente.