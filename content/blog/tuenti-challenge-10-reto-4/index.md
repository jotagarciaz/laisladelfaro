---
title: "Resolviendo la edición Tuenti Challenge 10 con Python: Reto 4"
date: 2020-06-05T12:08:02+02:00
image: "bastian-unsplash.webp"
draft: false
author: "JotaGarciaz"
tags:
  - tuenti
  - challenge
  - hackathon
---

¡Ya hemos superado 3 retos! Vamos a por el reto 4. ¿!QUÉ!? ¿Que aún no has empezado o te perdiste el reto de la semana anterior? Entonces te recomiendo pasarte por los enlaces que dejaré a continuación antes de empezar con este:

- [Empezando el Tuenti Challenge 10 Reto 1.](../tuenti-challenge-10-reto-1/)
- [El reto anterior del Tuenti Challenge 10, el reto 3.](../tuenti-challenge-10-reto-3/)

Si aún sigues por aquí entiendo que ya has conseguido completar los anteriores 3 retos, así que mi enhorabuena, porque el anterior fue un reto de superación para muchos concursantes.

Hoy vamos a por el que para mí fue mi primer talón de Aquiles, y no por la complejidad. Al contrario, este reto se tarda minutos en resolver, siempre y cuando des con la tecla adecuada. A mí me dejo sin sueño y sin pensamientos más que qué podría estar haciendo mal. Incluso @Clare y su padre se estuvieron escudriñando los sesos para ayudarme.

Pasemos pues a ver que dice el challenge 4 del Tuenti Challenge 10:

## **Reto 4** - My Favorite Video Game

You\'re looking at your favorite video game website and you see some news that stops your heart. The video game platform steam-origin is releasing \'Cat Fight\' next week. This has been your favorite game since childhood. You\'ve got to have it. You continue reading the article and you see that there will be a free limited edition for the first hundred users who request the key. Oops, this is a big problem. You don\'t have a high-speed internet connection so there\'s no way you can be one of the first hundred users.

You\'re sad and you decide it\'s time to have dinner. You\'ll never be able to play \'Cat Fight\'. You turn on the TV and...

What? Does Steam-Origin have security problems? This is your chance. You\'re sure you can find a bug and get a key ahead of time. It\'s time to investigate. First of all, check the domain of the steam-origin API:

```
steam-origin.contest.tuenti.net:9876
```

The next step is to get the key for a free to play game and then try to get the key for \'Cat Fight\'. On the browser console debugger you can see the rest API is:

```
[GET] /games/<video_game_id>/get_key
```

The videogame_id is always the video game name with underscores instead of white space. We\'ll create a proof of concept using a video game where we know we can get the key - \'Free Shoot\' - and then we\'ll try with \'Cat Fight\': ```

```
$ curl steam-origin.contest.tuenti.net:9876/games/free_shoot/get_key
{
  game: Free Shoot,
  key: 9999-9999-9999
}
$ curl steam-origin.contest.tuenti.net:9876/games/cat_fight/get_key
{
  error: Not available yet
}
```

Wow... You\'re almost there. You keep looking around steam-origin engineering systems and you found gold.

{{< prezi "https://prezi.com/embed/vyi9c9pbl_42/?bgcolor=ffffff&amp;lock_to_path=1&amp;autoplay=0&amp;autohide_ctrls=0&amp;landing_data=bHVZZmNaNDBIWnNjdEVENDRhZDFNZGNIUE43MHdLNWpsdFJLb2ZHanI0Mjc5OE5vdEVyallRNWt4b1U1bDdxa0FnPT0&amp;landing_sign=4Ys7hewGoXq3Vie_LJZ3THH5v4-cD0BVD-tssFVai3A" >}}

### Server response:

The server response will be 200 HTTP response with a valid JSON. Example:

```
{
   game: Cat fight,
   key: XXXX-XXXX-XXXX
}
```

### Result:

- Upload only the video game key.
- Don\'t upload the JSON response.
- The key is like _XXXX-XXXX-XXXX_ where _X_ is a digit

That\'s all folks.

## Explicación.

Esta vez tengo poca información que comentar con respecto al reto. Comentaré, eso sí, algunas cosillas que respondieron por [Twitter en la cuenta de @TuentiEng](https://twitter.com/TuentiEng) o que yo creo que son necesarias para no morir de asco resolviéndolo. Las primeras dos consultas que se mencionan no las realices, ya que además de no aportar nada, te crearan confusión por que a ti no te aparecerán así. Pasa directamente a las consultas de Curl. En la presentación de Prezi, la API: pre.steam-origin.contest.tuenti.net:9876

no puede ser consultada con peticiones. Si lo haces solo recibirás respuestas de error.

**Una vez creáis tener la solución de este reto 4 no olvidéis visitar el enlace al Challenge correspondiente en Tuenti que pongo al comienzo de cada entrada, ya que allí podréis descargaros los inputs y subir vuestros outputs para comprobar si vuestro programa pasa la prueba.**

## Resolución.

Mi primera idea tras analizar el esquema de cómo iba la app era cargar el Load Balancer a base de peticiones, de forma que alguna de ellas respondiese desde pre.steam-origin.contest.tuenti.net:9876. Tras ver que esto no funcionaba y meditar en cómo podía funcionar, terminé en Twitter preguntando si era esto lo que había que hacer, a lo que me respondieron que no.

Descartada está idea me decanté entonces a probar por hacer peticiones de distintos tipos al servidor a ver si alguna me daba más información, y esto tampoco resultó funcionar.

Entonces me dio por pensar en que quizá había que editar las cabeceras, para poner la fecha un mes mas tarde, igual así el servidor se pensaría que ya había pasado la fecha de publicación y me mandaba la key. Esto tampoco tuvo éxito. Estuve mirando qué más cabeceras podría cambiar, pero no me daba cuenta de que la solución la tenía antes mis ojos:

Tan solo debía cambiar la cabecera host de la petición y al hacerlo producía que la petición Get te respondiese con el resultado correcto.

Espero que no te hayas quedado tan trabado como hice yo intentando resolver este reto tan sencillo. No vemos la semana que viene con el reto 5 ;)
