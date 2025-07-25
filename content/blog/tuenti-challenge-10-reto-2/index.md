---
title: "Resolviendo la edición Tuenti Challenge 10 con Python: Reto 2"
date: 2020-05-22T11:07:02+02:00
image: "leslie-cross-unsplash.webp"
draft: false
author: "JotaGarciaz"
lastmod: 2025-07-25T09:06:50+02:00
priority: 0.9
tags:
  - tuenti
  - challenge
  - hackathon
---

Para los que no sabéis de que va el tema, aquí tenéis un enlace al [primer reto](../tuenti-challenge-10-reto-1/), donde explico un poco de qué va esto. Para los que ya habéis leído el anterior o directamente sabéis de que va el tema, en esta segunda entrada del Tuenti Challenge 10 vamos a proceder a resolver el 2º reto de este challenge. El reto 2 dice así:

## **Reto 2** - The Lucky One

We really enjoy ping-pong in our office. We enjoy tournaments too. Everyone thinks she\'s the best, but that\'s far from the truth. Everyone has an inner skill si. If players i and j play a game of ping-pong, player i wins if si is greater than sj, but otherwise they lose. No two players have the same skill level. We have a ping-pong tournament coming up. Help me predict the winner! I have a list of matches and their outcome. Can you tell me who the strongest player in our office is? A unique solution is guaranteed to exist.

### Input

The first line has an integer **C**, which is the number of cases for the problem. Each case starts with a line with one integer, **N**, which is the number of matches. The following **N** lines contain three integers: **A**, the number of the first player, **B**, the number of the second player, and **R**, which is 1 if A won, and 0 otherwise. Players are numbered from 1 to P, with P being the total number of players.

### Output

For each case, output a line starting with Case #x: followed by the number of the strongest player. Every line should end with a new line character.

### Limits

- 1 ≤ **C** ≤ 10
- 1 ≤ **N** ≤ 1000000

### Sample Input

```
1
3
3 2 1
1 3 0
3 2 1
```

### Sample Output

```
Case #1: 3
```

Como podemos leer, en este caso nos está comentando que se está organizando un torneo de ping-pong en la oficina y queremos predecir quien lo ganará en base a partidas anteriores. Nos aseguran que solo hay un resultado y que no hay empates: o gana un jugador o gana el otro.

Además, nos describen el input diciendo que recibiremos un entero **C** con el número de casos del problema. Luego para cada caso habrá un entero **N** con el número de partidos que tiene el caso. Incluso nos dice que cada partido está representado por una línea con un número para el jugador A, otro para el jugador B y el resultado que será 1 si gana A y 0 si gana B.

Ojo, porque puede que te resulte confuso que 1 sea para el jugador A y 0 para el jugador B, y que al implementar el código les des la vuelta fácilmente.

Por último, nos dicen que el output tendrá la forma:

```
Case #número del jugador ganador.

```

**Una vez creáis tener la solución no olvidéis visitar el enlace al Challenge correspondiente en Tuenti que pongo al comienzo de cada entrada, ya que allí podréis descargaros los inputs y subir vuestros outputs para comprobar si vuestro programa pasa la prueba.**

Sabiendo esto podemos pasar a la resolución del challenge.

## **Resolución.**

Al igual que para el reto anterior, te recomiendo recurrir a este apartado después de haberlo intentado.

Al igual que en el reto 1, este reto 2 tiene muchas formas de resolverse, algunas más eficientes que otras. Por ejemplo, viendo que los jugadores son identificados por número, podríamos crear un array o una lista con los números de todos los posibles jugadores, de forma que cuando un jugador gana aumentamos en el indice de este un contador. Algo de este estilo:

```
jugador[id] += 1

```

Y, por último, buscamos entre todos ellos el que tenga el indice más grande. Esta sería una buena opción ya que es fácil de implementar.

Pero tenemos un problema. No sabemos cuántos jugadores hay y viendo que hay muchos partidos, podríamos fácilmente pensar que hay muchísimos jugadores. Además no sabemos si los números son consecutivos, o si vamos a malgastar mucho espacio en nuestro array en ids que no serán usados.

Por lo tanto en este caso la mejor opción sería utilizar un diccionario o un set donde podamos guardar los ids que vamos leyendo y actualizar el contador. Además idealmente sería preferible que fuese ordenado por el contador, para no tener que ordenar luego este, buscando el que mayor número de partidas ha ganado.

En mi caso implementé un diccionario y lo ordené a posteriori, buscando un término intermedio entre rapidez de resolución y eficiencia.

Este reto 2 me resultó casi más fácil que el anterior, y mi solución final fue la siguiente:

Espero que os haya gustado y que os paséis a ver el reto 3, la semana que viene. Además recordad que podéis dejarme comentarios preguntando cualquier cosa al respecto o incluso dándome nuevos puntos de vista para afrontar este reto ;)

{{< gist jotagarciaz 5ea02d6db6ccb0951cf39616c8803514 >}}
