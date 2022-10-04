# Preguntas
1. ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?
  * Son 4 aunque recientemente se ha incorporado una quinta, estas son:
    1. Sprint Planning: Reunión inicial donde participa el equipo scrum completo. Se divide en dos partes, la primera es liderada por el _product owner_ y define _*qué*_ se hará en el siguiente sprint, la segunda define el *_Cómo_* se hará por parte del equipo.
    2. Daily Scrum: Es una reunión diaria en la que participa el equipo de desarrollo respondiendo a las siguientes preguntas:
      1. ¿Qué hice ayer para aportar al sprint goal?
      2. ¿Qué voy a hacer hoy para contribuir al sprint goal?
      3. ¿Hay algún impedimento que me impida entregar?   
    3. Sprint Review: Es la reunión que ocurre al final del sprint donde el development team presenta a los stakeholders el incremento del producto. Esta reunión organizada por el product owner, se estudia cuál es la situación y se actualiza el product backlog con las posibles nuevas condiciones .
    4. Sprint Retrospective: El objetivo de esta es hacer una reflexión sobre el último sprint e identificar posibles mejoras, en este escenario es normal rotar el rol de facilitador dentro de los miembros del equipo.  
    5. Sprint Grooming o Refinement: El refinamiento del Product Backlog es una práctica recomendada para asegurar que éste siempre esté preparado.
2. ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.
  * Es un diagrama que se utiliza para analizar y comunicar la estructura del producto que se está desarrollando
  * Existen diversas herramientas que sirven de apoyo al respecivo proyecto, entre ellas destacan: Figma, AdobeXd, Scketch, UXPin, MockFlow
3. Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.
  * var: manera antigua de definir variables. El scope de esta es global, permite definición sin asignación y no se recomienda su uso. 
  * let y const son la manera que recomienda ECMASCRIPT para definir variables. _let_ para asignaciones dinámicas y _const_ para asignaciones estáticas de direcciones de memoria.   
4. ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?
  1. git branch rama-1
  2. git checkout -b rama-1
5. Explicar la diferencia entre git merge y git rebase.
  * git merge mantiene a salvo la historia de la rama secundaria, crea un nuevo commit que une ambas ramas sin eliminarlas, en cambio git rebase no mantiene a salvo la historia de la rama secundaria, sino que re-escribe la historia de la rama principal integrando los commits de la rama secundaria en la rama principal, no crea un commit de unión adicional
6. ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?
  * PR es una solicitud para que los colaboradores del repositorio descargen los cambios hechos por el solicitante mediante el comando git pull.
7. ¿Qué es el Virtual DOM?
  * Es una copia espejo del DOM real el cual sirve al prpósito de ver reflejado el elemento que cambia con respecto al DOM original y así optimizar el proceso de actualización de mismo.
8. Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).
h2 {
  text-align: center;
  background-color: gray;
}
span {
  background-color: green;
}
li {
  list-style-type: none;
}
.c-services {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
  background-color: HoneyDew;
}
.c-services__item {
  flex-basis: 40%;
  text-align: center;
}
.c-services__item:hover {
  box-shadow: 0 5px 5px gray;
}