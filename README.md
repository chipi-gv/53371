# Analizador

Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y Node.js. Reconoce una gramatica dada, construye el árbol sintáctico, genera una tabla de tokens.

##  Requisitos

- Node.js (v18 o superior)
- Java instalado (para ejecutar ANTLR)
- ANTLR4 (`antlr-4.13.2-complete.jar`) descargado desde: https://www.antlr.org/download/antlr-4.13.2-complete.jar

##  Instalación

1. Clonar el repositorio: preferentemente antes crear una carpeta en el escritorio para encontrar mas facilmente los archivos.

```bash
git clone https://github.com/chipi-gv/53371.git
```

2. Instalar las dependencias:

```bash
npm install
```

3. Generar los archivos ANTLR:

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -o generated MiAnalizador.g4
```

##  Ejecución

Se puede probar el analizador con cualquiera de los archivos de ejemplo modificando `input.txt` o directamente reemplazando su contenido.

```bash
node index.js
```

El programa mostrará:

- Tabla de tokens
- Árbol sintáctico
- Resultado de la ejecución
  
+Aclaración: Asegurarse, a la hora de ejecutar el programa, de estar en la carpeta "analizador" ya que de no ser así no se ejecutará el programa.
