---
title: "Resolviendo la edición Tuenti Challenge 10 con Python: Reto 5"
date: 2020-06-12T12:08:02+02:00
image: "iso10-unsplash.webp"
draft: false
author: "JotaGarciaz"
lastmod: 2025-07-25T09:06:50+02:00
priority: 0.9
tags:
  - tuenti
  - challenge
  - hackathon
---

Si aún no has empezado con el Tuenti Challenge o te perdiste el de la semana anterior, entonces te recomiendo pasarte por los enlaces que dejaré a continuación antes de empezar con este reto 5:

- [Empezando el Tuenti Challenge 10 Reto 1.](../tuenti-challenge-10-reto-1/)
- [El reto anterior del Tuenti Challenge 10, el reto 4.](../tuenti-challenge-10-reto-4/)

Si aún sigues por aquí entiendo entiendo que ya has conseguido completar los anteriores 4 retos, incluso mi talón de Aquiles como mencionaba en el reto de la semana pasada. La verdad es que el reto anterior era refrescante, ya que era totalmente distinto a los anteriores. De hecho, no era necesario ni programar.

Hoy sí que volvemos a retomar la programación, y además con uno de esos retos fáciles que si los analizas un poco antes de empezar a programar harás que la solución sea muchísimo más sencilla.

Pasemos pues a ver que dice el challenge 5 del Tuenti Challenge 10 :

## **Reto 5** - Tuentistic Numbers

A Tuentistic number is any number that, when written in English, contains the word “twenty” (for example, 20, 21 or 120000). Since at Tuenti we love Tuentistic numbers, we like to represent any non-Tuentistic number as a sum of positive Tuentistic numbers in order to increase their Tuentisticness (this is called a Tuentistic sum). For example, the non-Tuentistic number 50 can be represented as the Tuentistic sum 25 + 25. The Tuentistic numbers thenselves count as Tuentistic sums too. Given a positive number, we want to know the maximum number of elements of its Tuentistic sums.

### Input

The first line contains the number of cases **C**. Then, C lines follow, each with a number **N**.

### Output

For each case, output 'Case #X: M', where X is the case number (the first case has number 1) and M is the maximum number of elements in a Tuentistic sum of N. If it is not possible to represent N as any Tuentistic sum, write 'Case #X: IMPOSSIBLE' instead.

### Limits

- 1 ≤ **C** ≤ 500
- 1 ≤ **N** ≤ 262

### Sample Input

```
3
20
80
35
```

### Sample Output

```
Case #1: 1

Case #2: 4

Case #3: IMPOSSIBLE
```

In the first case, the number 20 has only one Tuentistic sum which contains itself, so the answer is 1. In the second case, 80 can be represented as a sum of 4 Tuentistic numbers (20+20+20+20). In the third case, it's impossible to sum 35 with only Tuentistic numbers.

## Explicación.

En este caso el reto 5 creo que está bastante claro. En el input obtendremos el número de casos **C**, los datos que recibamos obviamente serán numéricos **N** y con estos datos deberemos de comprobar si un número es tuentistic (se pronuncia como twenty en inglés, si se puede obtener a base de sumas de tuentistics o si por el contrario es imposible que sea tuentistic).

Nuestra salida será el número máximo de suma de tuentistics que se pueden usar para formar ese número o deberemos de poner que el caso es IMPOSSIBLE en caso de no poder obtenerse a base de tuentistics.

**Una vez creáis tener la solución del reto 5 no olvidéis visitar el enlace al Challenge correspondiente en Tuenti que pongo al comienzo de cada entrada, ya que allí podréis descargaros los inputs y subir vuestros outputs para comprobar si vuestro programa pasa la prueba.**

## Resolución.

La primera idea que se me vino a la cabeza al leer el programa es que debía de analizar cuando un número se pronunciaba como twenty en inglés y me di cuenta que eran los números 20-29 y luego deberemos irlo multiplicando de mil en mil para sacar el resto, es decir 20, 20.000, 20.000.000... Y no solo esos, también 120.000 se pronunciaría como twenty, así que debía de hacer algo que comprobase las posiciones de los doses.

Además por otro lado tenía el tema de las sumas, que permitían hacer nuevos tuentistics. Para eso tenía la idea clara. Debía de dividir el número que me dieran entre 20 y ver cuántas veces se podía descomponer en este número, ya que era el más pequeño. Aunque me quedaba un detalle por perfeccionar, que era el control de los restos. Sabía que debía ser 20 porque andábamos buscando el máximo número de sumas, y necesitábamos los números tuentistics más pequeños posibles.

Y prácticamente fue entonces cuando me di cuenta de una cosa: la mayoría de números de los ejemplos que daban y en los ejemplos que me ponía mentalmente eran tuentistics, lo cual me hizo darle la vuelta al asunto, y pensar en qué números no lo eran. Y ahí esta la clave.

### Números no tuentistics.

El total de números no tuentistics es el siguiente:

- Los números del 0 al 19. Estos son menores que 20, luego nunca podrán estar compuestos por ellos.

- Los que se encuentran entre el 30 y el 39. Aquí el problema es que son mayores que 29, pero menores que 20 + 20 (40), que es el menor número que se puede conseguir con la combinación de dos tuentistics.

- El 59. Si sumas 29 + 29 tienes 58, y si sumas 20 + 20 + 20 (lo siguiente más cercano a dos 29s) da 60, luego este número es imposible de conseguir.

Aquí es donde empieza la magia.

20 + 20 + 20 = 60.
29 +29 + 29 = 87.

Pero 87 también puede estar formado de la siguiente forma:
87 = 20 + 20 + 20 + 27 (y el resto de combinaciones).

A partir de aquí se produce esta amalgama de combinaciones. Por ello, ya no va a haber números que no se puedan conseguir de al menos una forma.

### Solución final.

{{< gist jotagarciaz 07f878d6461db642cb93a6fd09436546 >}}

Por lo tanto, mi solución para este reto fue la siguiente: Y ahora para despedirme me gustaría saber: ¿A qué solución llegaste tú?
