\# 📊 Sistema de Cálculo y Diagnóstico de IMC



Este proyecto es una aplicación de consola desarrollada en \*\*Node.js\*\* que calcula el Índice de Masa Corporal (IMC) a partir del peso y la altura. El proyecto demuestra la evolución de una función de software a través de \*\*tres versiones sucesivas\*\*, incrementando su robustez, seguridad y automatización en cada etapa.



\---



\## 🚀 Arquitectura del Proyecto



El proyecto se compone de dos archivos principales estructurados con el sistema de módulos \*\*CommonJS\*\*:



\*   \*\*`calculo.js`\*\*: Contiene la lógica matemática, las capas de validación de datos y el motor de diagnóstico de salud.

\*   \*\*`llamada.js`\*\*: Funciona como el punto de entrada (orquestador) que define los datos de prueba y ejecuta de forma ordenada cada una de las versiones.



\---



\## 🛠️ Evolución de las Versiones



\### 🔹 Versión 1.0: Cálculo Básico

\*   \*\*Enfoque:\*\* Operación matemática pura.

\*   \*\*Características:\*\* Recibe los parámetros y aplica la fórmula estándar \\(\\text{IMC} = \\frac{\\text{peso}}{\\text{altura}^2}\\). No maneja errores ni valida entradas.



\### 🔹 Versión 2.0: Cálculo Seguro

\*   \*\*Enfoque:\*\* Robustez y control de excepciones.

\*   \*\*Características:\*\* Añade validaciones estrictas antes de operar. Verifica la existencia de parámetros (`undefined`) y valida que los tipos de datos sean estrictamente numéricos (`typeof`). Previene fallos silenciosos o resultados erróneos (`NaN`).



\### 🔹 Versión 3.0: Sistema Automático Completo

\*   \*\*Enfoque:\*\* Automatización e integración de diagnóstico.

\*   \*\*Características:\*\* Reutiliza las validaciones de la V2, calcula el resultado, lo formatea automáticamente a dos decimales y lo deriva a una función clasificadora interna (`clasificadorIMC`) que evalúa y muestra en pantalla la categoría de salud del usuario.



\---



\## 📋 Categorías de Diagnóstico



La versión 3.0 clasifica el resultado según los siguientes rangos estandarizados:



\*   \*\*Bajo Peso:\*\* IMC < 18.5

\*   \*\*Peso Normal:\*\* IMC entre 18.5 y 24.9

\*   \*\*Sobrepeso:\*\* IMC entre 25 y 29.9

\*   \*\*Obesidad:\*\* IMC ≥ 30



\---



\## 💻 Requisitos e Instalación



1\.  Asegúrate de tener instalado \[Node.js](https://nodejs.org) (versión 18 o superior recomendada).

2\.  Clona o descarga este repositorio en tu máquina local.

3\.  Coloca ambos archivos (`calculo.js` y `llamada.js`) dentro de la misma carpeta.



\---



\## ⚡ Ejecución



Para poner en marcha el sistema y observar la comparativa de las tres versiones con los datos de prueba, abre tu terminal en la carpeta del proyecto y ejecuta el siguiente comando:



```bash

node llamada.js

```



\### Ejemplo de Salida en Terminal



```text

========================================

📊 SISTEMA DE CONTROL DE IMC

📋 Datos de prueba -> Peso: 80kg | Altura: 1.75m

========================================



🔹 \[Versión 1.0]: Cálculo Básico

&#x20;  ➔ Resultado del IMC: 26.12

\----------------------------------------



🔹 \[Versión 2.0]: Cálculo Seguro (Con Validaciones)

&#x20;  ➔ Resultado del IMC: 26.12

\----------------------------------------



🔹 \[Versión 3.0]: Sistema Automático Completo

&#x20;  ➔ Procesando diagnóstico...

El IMC V3 es : 26.12

Sobrepeso

========================================

```



