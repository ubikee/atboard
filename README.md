# atboard

Paquete de dashboards, widgtes y jobs desarrollados por atSistemas.

## Uso

Este paquete se debe usar desde un [nuevo proyecto atlasboard](https://bitbucket.org/atlassian/atlasboard/overview)

Una vez creado un proyecto atlasboard importar atBoard como un submodulo de git:

    git init
    git submodule add https://github.com/ubikee/atboard.git packages/atboard

Esto añadira el proyecto atBoard dentro de la carpeta packages del proyecto atlasboard, con lo que ya estaran disponible, basta arrancar el proyecto normalmente:

    :~/ atlasboard start

Durante el arranque se copiaran los siguientes ficheros al proyecto atlasboard:

    ~/packages/atboard/templates/*  --> ~/templates
    ~/packages/atboard/assets/*     --> ~/assets

Asi nos aseguramos de añadir a la carpeta assets todas las librerias JS externas necesarias tanto para los jobs com para los widgets.
La carpeta de templates copian una version de la plantilla original de atlasboard ligeramente modificada para añadir las dependencias de Polymer y del catalogo de componentes polymer requeridos por los widgets de atSistemas.

## dashboards
### catalog
Ejemplo de los widgets desarrollados por atsistemas.

## widgets
### Completion
Este widget muestra el tanto porciento de progreso de una tarea o proceso cualquiera.

Se representa el valor de progreso mediante una barra circular de progreso y permite indicar un umbral de progreso a partir del cual la barra de progreo se mostrara en modo alerta.

Mas información sobre el componente visual en [ubik.gauge](https://github.com/ubikee/ubik-gauge)

## jobs
### randomNumber
