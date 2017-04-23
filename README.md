# Conversor

Este conversor es capaz de realizar cualquier unidad de kilogramos a libras y viceversa.

## Descripción

- Ingresa una o varias unidades en kilogramos y recibe su equivalente en libras.

- Ingresa una o varias unidades en libras y recibe su equivalente en kilogramos.

## Instalación

```
npm install conversor
```

## Uso

```
import {convertKg, convertLb} to 'conversor'

convertKg(1) // 2.20462
convertLb(1) // 0.45359

convertKg(1, 2.5, 5) // ["2.20462", "5.51156", "11.02311"]
convertLb(1, 2.5, 5) // ["0.45359", "1.13398", "2.26796"]
```

## Créditos

- [Alberto Fragoso](https://facebook.com/yeahbetoyeah)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
