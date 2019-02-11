# FREE, FUN, ENCODING.


## Definición del producto

-Este producto está hecho para todas aquellas personas que deseen implementar en sus conversaciones diarias textos cifrados para mantener una privacidad en otro nivel. 

-El objetivo principal es lograr obtener el placer y diversión de sorprender a sus amigos y/o compañeros con letras ordenadas sin un sentido aparente ocultando gran significado. En pocas palabras, pasar un rato agradable.

-Es una aplicación de ocio. Una aplicación sencilla con pasos simples que en cualquier momento y lugar puedes ingresar y hacer uso de ella.
 
### Bases del proyecto

#### Cifrado César

El cifrado César es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## Sobre el diseño 

El diseño está basado en un punto fundamental: El Usuario.

### ¿Quién es mi usuario?

Está aplicación está dirigida al público en general. Niños, jóvenes y adultos que deseen hacer uso de herramientas para implementar en sus mensajes cotidianos un aire fresco y divertido. 

### Proceso de Creación

Primero que nada hice un sketch inicial para determinar el flujo de la aplicación. Decidí utilizar cinco 'vistas' sin embargo durante el proceso fui sintetizando las necesidades junto con el flujo y me di cuenta de que podía prescindir de un par. Así que el resultado final consta de tres vistas. 

#### 1. Inicio: 
Da la bienvenida y brinda una explicación breve de lo que consiste la aplicación. Hay un botón para entrar y comenzar a escribir tus mensajes.

#### 2. Nuevo Mensaje:
Incluye un espacio para ingresar tu offset y otro para el texto. Junto con un par de notas a considerar.  También incluye dos botones para dar la instrucción de cifrar o descifrar el mensaje recién ingresado. 

#### 3. Resultado:
En esta última vista se muestra el resultado del texto cifrado o descifrado, según sea el caso. Incluye un botón para copiar al portapapeles y poder pegar en el lugar deseado. Cuenta, también, con un par de botones. Uno para volver al Inicio (vista 1) y otro más para ingresar un nuevo mensaje (vista 2). Ambos botones cuentan con la función de limpiar los valores ingresados con anterioridad.

