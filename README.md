# Travel Agency - Navegación Interactiva con JavaScript

Este proyecto crea una interfaz de navegación interactiva para una agencia de viajes. Permite seleccionar diferentes destinos y visualizar información relevante de cada lugar al hacer clic en ellos. Los destinos disponibles incluyen **Barcelona**, **Roma**, **París** y **Ecuador**.

## Estructura del Proyecto

- **index.html**: Archivo principal de la estructura HTML.
- **style.css**: Archivo de estilos para el diseño de la página.
- **script.js**: Archivo JavaScript que maneja los eventos de clic y actualiza la información de la página en función del destino seleccionado.
- **country.js**: Archivo que exporta la información específica de cada país.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

## Instrucciones de Uso

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/Jdavidaa01/ja_TripPage.git
    ```

2. Asegúrate de que todos los archivos están en el mismo directorio:
   - `index.html`
   - `style.css`
   - `script.js`
   - `country.js`

3. En `country.js`, define los objetos `barcelona`, `roma`, `paris`, y `ecuador` para cada país:
    ```javascript
    export const barcelona = {
      titulo: "Explora Barcelona",
      subtitulo: "Descubre la cultura catalana",
      parrafo: "Barcelona es una ciudad vibrante con una historia rica y cultura única..."
    };
    // Define los otros objetos similares
    ```

4. Abre el archivo `index.html` en tu navegador para visualizar el sitio.

## Funcionalidades

- **Navegación interactiva**: Al hacer clic en uno de los destinos, se actualiza la información de la página, mostrando un título, subtítulo y descripción únicos para cada destino.
- **Destacado de la selección**: La pestaña activa del destino seleccionado se resalta visualmente.
- **Modularidad**: La información de cada país se importa desde el archivo `country.js`, lo que facilita agregar nuevos destinos.

## Ejemplo de Uso

Al hacer clic en "Barcelona", el título, subtítulo y párrafo en la sección principal se actualizarán con la información de Barcelona, importada desde `country.js`.

## Capturas

(Agregar aquí capturas de pantalla del sitio en funcionamiento, si es posible)

---

