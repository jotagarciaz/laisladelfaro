---
title: "Resolviendo la edición Tuenti Challenge 10 con Python: Reto 1"
date: 2020-05-15T11:06:50+02:00
image: "xavier-von-erlach-unsplash.webp"
draft: false
author: "JotaGarciaz"
lastmod: 2025-07-25T09:06:50+02:00
priority: 0.9
tags: 
  - tuenti
  - challenge
  - hackathon
---

Hola. ¿Qué tal? Hoy vamos a hablar del Tuenti Challenge 10: Reto 1.

A principios de mayo he podido ser partícipe de este evento de retos informáticos que realiza Tuenti todos los años. Los retos están en inglés y habrá problemas de todo tipo de dificultad, pudiéndote saltar hasta 3 retos de un total de 20 que componen el challenge.

Si bien es cierto que los primeros años apenas conseguía resolver algún reto, ya llevo 2 ediciones en las que consigo avanzar un poco más.

Muchos de los retos que se proponen en este concurso son retos muy sencillos en los que tienes que:

1. Sacar una posible forma de resolver el problema.
2. Plantearte si esa es la mejor opción.
3. Intentar obtener una mejor opción que te hará pasar al siguiente reto cuanto antes.

Este año, además, he decidido ir publicando sus retos semanalmente con mis soluciones a ello, de forma que quien quiera practicar tenga un reto cada semana y si os quedáis atascado tengáis una solución, y que además podáis compaginarlos con el resto de tareas cotidianas.

Esto también será un reto para mí, puesto que solo llegué al reto 6 y me gustaría ver como era el resto. Comenzamos así a resolver el primer reto del Tuenti Challenge 10 en el que usaré python como lenguaje de programación. El reto 1 dice lo siguiente:

## **Reto 1** - Rock, Paper, Scissors

Rock, paper, scissors is an extremely fun game played all around the world. Tuenti employees even play it with their children after work. Have you ever played? Let\'s play now!

### Input

The first line will contain an integer **N**, which is the number of cases for the problem. Each case is a game between two people. It’s represented by two letters separated by a space. Each letter is the chosen shape by each player. The possible values are: **R** for rock, **P** for paper and **S** for scissors

### Output

For each case, there should be a line starting with Case #x: followed by the winning shape, or \'-\' when the result is a draw.

### Sample Input

```
8
R S
R P
P P
S P
R R
P R
P P
S R
```

### Sample Output

```
Case #1: R

Case #2: P

Case #3: -

Case #4: S

Case #5: -

Case #6: P

Case #7: -

Case #8: R
```

Vale. Como podemos observar, el primer reto es un problema clásico en programación. En él, tendremos que resolver quién gana en el clásico juego del piedra, papel o tijeras. Además vemos que nos darán un archivo de texto como input que contiene el número partidas que se disputarán y a continuación cada una de las partidas, con los materiales sacados por cada jugador. Nosotros como Output, deberemos sacar qué elemento gana la ronda y el número correspondiente a la ronda. En caso de que la ronda acabe en empate deberemos mostrar un \'-\' en la ronda.

Este problema tiene diversas formas de resolverse correctamente, pero hay ideas que te permitirán resolverlo más rápido y eficazmente, lo que le ahorrara a tu ordenador sufrir intentando resolver este reto.

\*\*Una vez creáis tener la solución no olvidéis visitar el enlace al Challenge correspondiente en Tuenti que pongo al comienzo de cada entrada, ya que allí podréis descargaros los inputs y subir vuestros outputs para comprobar si vuestro programa pasa la prueba.

## **Resolución.**

Te recomiendo que antes de mirar este apartado lo resuelvas por tu cuenta, ya que es la forma óptima de aprendizaje.

Por lo que he podido preguntar, la solución al reto 1 de la mayoría de la gente consiste en hacer una tabla de jugadas de 3x3 donde se apunta en cada jugada quién gana y quién pierde.

Cuando se ponen a describirla algunos se dan cuenta de que podrían optimizarla, ya que hay jugadas que dan el mismo resultado, siendo estas las jugadas inversas, por ejemplo si el jugador 1 saca piedra y el jugador 2 saca papel, el resultado será que papel gana la partida, que es el mismo resultado que si el que hubiera sacado el papel fuese el jugador 1 y el jugador 2 hubiese sacado la piedra.

Darte cuenta de eso ya hace que tu solución se reduzca drásticamente. Si antes teníamos que mirar en una tabla 3x3 (9 posibles situaciones) ahora tendremos una 3x2 (6 soluciones).

### Aún más eficiente:

Además en este juego sabemos que los empates siempre se producen cuando ambos jugadores sacan el mismo material. Por lo que tampoco sería necesario meter en la tabla estos resultados, reduciéndose la tabla hasta covertirse en un 3x1, es decir que solo vamos a almacenar quién gana. Luego por cada ronda miramos a ver si la jugada que ha sacado en el jugador 1 gana al jugador 2 correspondiéndose con alguna de la tabla. Si es así ya sabemos cuál es el resultado del material ganador. Si no es así procederemos a revisar si ambos jugadores han sacado lo mismo, y si tampoco tenemos suerte entonces sabremos que tendremos que coger el elemento del jugador 2 como resultado.

Para facilitarme aún más las cosas, en vez de usar una tabla de jugadas ganadoras, usé un dicionario, donde la clave era el material del jugador 1 y el valor el material que debería de haber sacado el jugador 2 para que el jugador 1 ganase.

{{< gist jotagarciaz 92982cd28fd6b37cbca439c294407767 >}}

Espero que os haya gustado este reto 1 y que os paséis a ver el reto 2 la semana que viene. Además recordad que podéis dejarme comentarios preguntando cualquier cosa al respecto o incluso dándome nuevos puntos de vista para afrontar este reto ;)
