Ciclo 3
Proyecto: Alquiler de motocicletas
Una importante compañía que alquila motocicletas ha decidido ofrecer sus servicios por medio de internet;
se han dado cuenta que a través de una aplicación web los clientes (nuevos y actuales) pueden realizar todos
los procesos que antes hacían y que implicaba una carga burocrática y papeleo innecesario. De esta manera,
la autogestión permitirá que el cliente elija que productos quiere alquilar, qué días lo quiere utilizar, dónde
lo recogerá y en qué lugar lo e ntregará. El cliente sabrá de esa manera cuánto cuesta el alquiler y además se
le podrá brindar información adicional que siempre es necesaria en estos procesos. El uso de la aplicación
reducirá considerablemente el tiempo de atención, pues cada vez que un asesor atiende a un usuario, deja de
atender a muchos más. Los asesores ahora estarán disponibles solamente para hacer la entrega de las
motocicletas en transacciones que ya están cerradas. Para esta primera implementación el director de la
compañía ha de cidido que los pagos se hagan de manera presencial en el momento de retirar las motocicletas
El cliente, que desea reservar una motocicleta, debe registrarse; este registro se realiza solamente una vez y
en adelante el usuario ingresa a la plataforma a tr avés de su usuario y contraseña. Una vez iniciada la sesión,
el usuario puede visualizar la oferta de motocicletas disponibles para la fecha en la cual desea hacer el
alquiler. Hecha la reserva, pueden suceder dos cosas: que el cliente rente la motocicleta el día reservado o
que el cliente desista, y para ello el cliente puede cancelar la reserva en cualquier momento sin costo alguno.
El administrador se encargará de cambiar el estado en el momento de entregar del producto o de cancelar la
reserva de manera unilateral en caso de no poder cumplir. También la debe cancelar si el día de la reserva el
cliente no se acerca al punto.
Durante el tiempo de uso, la reserva debe cambiar de estado y debe marcarse como finalizada en el momento
en que la motocicleta sea devuelta. Al devolver la motocicleta el cliente debe calificar su experiencia y
escribir algún comentario como realimentación al proceso; así la empresa sabrá en qué debe mejorar.
Una funcionalidad que la gerencia valoraría mucho tener es la posibilidad
de enviar mensajes por parte de
los clientes para obtener información, hacer sugerencias, felicitaciones o expresar su gratitud. Estos
mensajes serán leídos por el usuario administrador.
RETO 2
En el reto 2, el equipo desplegará nuevos servicios y ademá
s creará un front end el cual se ejecutará desde el
navegador web para probar el acceso y la funcionalidad. Este front end será la base de la funcionalidad de
futuros retos y de la aplicación que da solución al proyecto planteado.
Se deben implementar los
accesos a las tablas Motocicleta, Gama y a las nuevas tablas Cliente y Mensaje.
En estas tablas almacenaremos el cliente cuando se registra y los mensajes que los clientes dejen respecto a
las Motocicletas.
Al finalizar el reto, podremos registrar client
es, visualizar el perfil del cliente, visualizar la lista de
Motocicletas, visualizar el detalle de una Motocicleta, escribir mensajes y ver los mensajes escritos.
Creación de servicios:
1) Se debe crear un servicio que mediante una petición GET entregu
1) Se debe crear un servicio que mediante una petición GET entregue la información de una Motocicleta en e la información de una Motocicleta en particular, para esto, se agregará a la URL una barra "/" y seguido a esto, el identificador de la Motocicleta.particular, para esto, se agregará a la URL una barra "/" y seguido a esto, el identificador de la Motocicleta.
2) Se deben crear servicios GET, POST, PUT, DELETE al igual que en el reto 1, pero esta vez interactuar
2) Se deben crear servicios GET, POST, PUT, DELETE al igual que en el reto 1, pero esta vez interactuar con las tablas Cliente y Mensaje. También se deben crear.con las tablas Cliente y Mensaje. También se deben crear.
3) Sebe crear un servicio que mediante una petición GET entregue la información de un cliente en particular,
3) Sebe crear un servicio que mediante una petición GET entregue la información de un cliente en particular, de la misma manera que se hizo en el punto 1.de la misma manera que se hizo en el punto 1.
La tabla Cliente se debería ver así:
La tabla Cliente se debería ver así:
La tabla Mensaje se debería ver así:
La tabla Mensaje se debería ver así:
Creación de Frontend
Creación de Frontend
Haciendo uso de lo aprendido sobre javascript y html, se deben crear los formularios para:
Haciendo uso de lo aprendido sobre javascript y html, se deben crear los formularios para:
-
-Creación de MotocicletasCreación de Motocicletas
-
-Registro de ClientesRegistro de Clientes
-
-Registro de mensajesRegistro de mensajes
Así mismo, se
Así mismo, se debe poder visualizar una lista de los elementos registrados en las tablas de:debe poder visualizar una lista de los elementos registrados en las tablas de:
-
-MotocicletaMotocicleta
-
-ClientesClientes
-
-MensajesMensajes
Una vez hecha la lista, cada elemento debe tener en el título un enlace para poder visualizar en una sección
Una vez hecha la lista, cada elemento debe tener en el título un enlace para poder visualizar en una sección "detalle" los detalles de cada:"detalle" los detalles de cada:
-
-MotocicletaMotocicleta
-
-ClienteCliente
-
-MensajeMensaje
Al poder ver el detalle de cada uno, se podrá editar la información que contiene (excepto el id, este no se
Al poder ver el detalle de cada uno, se podrá editar la información que contiene (excepto el id, este no se deberá poder editar).deberá poder editar).
Es necesario también crear un botón para eliminar cada Motocicleta y mensaje.
Es necesario también crear un botón para eliminar cada Motocicleta y mensaje.
Instrucciones
Instrucciones para realizar Prueba AUTOMÁTICApara realizar Prueba AUTOMÁTICA
En este caso, no se ejecutará el código directamente sino que se evaluarán los resultados obtenidos al realizar
En este caso, no se ejecutará el código directamente sino que se evaluarán los resultados obtenidos al realizar peticiones HTTP al API construida y que actualmente debe estar desplegada en Oracle Cloud. Las peticiones peticiones HTTP al API construida y que actualmente debe estar desplegada en Oracle Cloud. Las peticiones que se realizarán serán de tipo GET, Pque se realizarán serán de tipo GET, POST, PUT y DELETE Para realizar las pruebas, las tablas de la base OST, PUT y DELETE Para realizar las pruebas, las tablas de la base datos deben estar vacías y el valor datos deben estar vacías y el valor
Entrada
Entrada
Cada grupo debe proveer URL proporcionada por APEX
Cada grupo debe proveer URL proporcionada por APEX
Salida
Salida
Corresponde a los mensajes JSON que retorna cada petición. MasterTech hará la
Corresponde a los mensajes JSON que retorna cada petición. MasterTech hará la comparación de forma automática.comparación de forma automática.
A continuación se presenta un ejemplo del proceso de evaluación. La prueba estará formada por 3 pasos y
A continuación se presenta un ejemplo del proceso de evaluación. La prueba estará formada por 3 pasos y tendrá los siguientes parámetros.tendrá los siguientes parámetros.
Tipo:
Tipo: describe el tipo de petición HTTPdescribe el tipo de petición HTTP
Endpoint:
Endpoint: Base URL/Base URL/enlace de acceso al seenlace de acceso al servicio a evaluarrvicio a evaluar
Body:
Body: JSON de entrada para la petición HTTPJSON de entrada para la petición HTTP
Salida:
Salida: JSON de salida de la petición HTTPJSON de salida de la petición HTTP
Recomendaciones generales
Recomendaciones generales
Antes de enviar la solución del reto, por favor tenga en cuenta los siguientes aspectos:
Antes de enviar la solución del reto, por favor tenga en cuenta los siguientes aspectos:
 Verifique que la aplicación esté Verifique que la aplicación esté desplegada correctamente y sea accesible a través de la URLdesplegada correctamente y sea accesible a través de la URL
 Verifique que todos los endpoint funcionen. Recuerde que puede probarlos a través de PostManVerifique que todos los endpoint funcionen. Recuerde que puede probarlos a través de PostMan
 Las tablas de la base de datos deben estar vacías y recién creadas para que el identificador generado Las tablas de la base de datos deben estar vacías y recién creadas para que el identificador generado aautomáticamente en cada tabla esté en 0.utomáticamente en cada tabla esté en 0.
 Lo único que debe proveer a MasterTech para las pruebas es la URL de su APILo único que debe proveer a MasterTech para las pruebas es la URL de su API
Creación y edición de Clientes
Creación y edición de Clientes
Paso 1.
Paso 1.
Tipo:
Tipo:
GET
GET
Endpoint
Endpoint
https://g533ded53dca5a3
https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client1.oraclecloudapps.com/ords/admin/client/client
Body
Body
Salida
Salida
{"items":[],"hasMore":false,"limit":25,"offset":0,"count":0,"links":[{"r
{"items":[],"hasMore":false,"limit":25,"offset":0,"count":0,"links":[{"rel":"self","href":"https://g533ded53dca5a3el":"self","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"describedby","h1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"describedby","href":"https://g533ded53dca5a3ref":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/metadata1.oraclecloudapps.com/ords/admin/metadata--catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3--db2db202107191810.adb.sa02107191810.adb.sa--saopaulosaopaulo--
1.oraclecloudapps.com/ords/admin/client/client"}]}
1.oraclecloudapps.com/ords/admin/client/client"}]}
Paso 2.a
Paso 2.a
Tipo:
Tipo:
POST
POST
Endpoint
Endpoint
https://g533ded53dca5a3
https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client1.oraclecloudapps.com/ords/admin/client/client
Body
{
{
"id":1,
"id":1,
"name":"Juan",
"name":"Juan",
"email":"
"email":"juan@correo.co",juan@correo.co",
"age":33
"age":33
}
}
Salida
Paso 2.b
Paso 2.b
TIPO
GET
Endpoint
https://g533ded53dca5a3-db202107191810.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client
Body
Salida
{"items":[{"id":1,"name":"Juan","email":"juan@correo.co","age":33}],
{"items":[{"id":1,"name":"Juan","email":"juan@correo.co","age":33}],"has"hasMore":false,"limit":25,"offset":0,"count":1,"links":[{"rel":"self","hrefMore":false,"limit":25,"offset":0,"count":1,"links":[{"rel":"self","href":"https://g533ded53dca5a3":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"edit","href":"h1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"edit","href":"https://g533ded53dca5a3ttps://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopasaopauloulo--1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"describedby","h1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"describedby","href":"https://g533ded53dca5a3ref":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/metadata1.oraclecloudapps.com/ords/admin/metadata--catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3--db202107db202107191810.adb.sa191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client"}]}1.oraclecloudapps.com/ords/admin/client/client"}]}
Paso 3.a
Paso 3.a
Tipo
PUT
Endpoint
https://g533ded53dca5a3-db202107191810.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client
Body
{
{
"id":1,
"id":1,
"name":"Alberto",
"name":"Alberto",
"email":"
"email":"alberto@correo.co",alberto@correo.co",
"age":62
"age":62
}
}
Salida
Paso 3.b
Paso 3.b
Tipo
GET
Endpoint
https://g533ded53dca5a3
https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client1.oraclecloudapps.com/ords/admin/client/client
Body
Salida
{"items":[{"id":1,"name":"Alberto","email":"alberto@correo.co","
{"items":[{"id":1,"name":"Alberto","email":"alberto@correo.co","age":62}age":62}],"hasMore":false,"limit":25,"offset":0,"count":1,"links":[{"rel":"self"],"hasMore":false,"limit":25,"offset":0,"count":1,"links":[{"rel":"self","href":"https://g533ded53dca5a3,"href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"edit","href":"h1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"edit","href":"https://g533ded53dca5a3ttps://g533ded53dca5a3--db202107191810.addb202107191810.adb.sab.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"describedby","h1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"describedby","href":"https://g533ded53dca5a3ref":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/metadata1.oraclecloudapps.com/ords/admin/metadata--catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5acatalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a33--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client"}]}1.oraclecloudapps.com/ords/admin/client/client"}]}
Eliminación de ClientesEliminación de Clientes
Paso 1.
Paso 1.
Tipo:
Tipo:
DELETE
DELETE
Endpoint
Endpoint
https://g533ded53dca5a3
https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client1.oraclecloudapps.com/ords/admin/client/client
Body
{
{
"id":1
"id":1
}
}
Salida
Paso 2.
Paso 2.
TIPO
GET
Endpoint
https://g533ded53dca5a3
https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client1.oraclecloudapps.com/ords/admin/client/client
Body
Salida
{"items":[],"hasMore":false,"limit":25,"offset":0,"count":0,"links":[{"rel":"self
{"items":[],"hasMore":false,"limit":25,"offset":0,"count":0,"links":[{"rel":"self","href":"https://g533ded53dca5a3","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"edit","href":"https://g533ded53dca5a31.oraclecloudapps.com/ords/admin/client/client"},{"rel":"edit","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"describe1.oraclecloudapps.com/ords/admin/client/client"},{"rel":"describedby","href":"https://g533ded53dca5a3dby","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/metadata1.oraclecloudapps.com/ords/admin/metadata--catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/client1.oraclecloudapps.com/ords/admin/client/client"}]}"}]}
Creación y edición de Mensajes
Creación y edición de Mensajes
Paso 2.a
Paso 2.a
Tipo:
Tipo:
POST
POST
Endpoint
Endpoint
https://g533ded53dca5a3
https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/message1.oraclecloudapps.com/ords/admin/client/message
Body
{
{
"id":1,
"id":1,
"messagetext":"Este es un mensaje"
"messagetext":"Este es un mensaje"
}
}
Salida
Paso 2.b
Paso 2.b
TIPO
GET
Endpoint
https://g533ded53dca5a3-db202107191810.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/message
Body
Salida
{"items":[{"id":1,"messagetext":"Este es un
{"items":[{"id":1,"messagetext":"Este es un mensaje"}],"hasMore":false,"limit":25,"offset":0,"count":1,"links":[{"remensaje"}],"hasMore":false,"limit":25,"offset":0,"count":1,"links":[{"rel":"l":"self","href":"https://g533ded53dca5a3self","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/message"},{"rel":"edit","href":"1.oraclecloudapps.com/ords/admin/client/message"},{"rel":"edit","href":"https://g533ded53dca5a3https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/message"},{"rel":"de1.oraclecloudapps.com/ords/admin/client/message"},{"rel":"describedby","scribedby","href":"https://g533ded53dca5a3href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--
1.oraclecloudapps.com/ords/admin/metadata
1.oraclecloudapps.com/ords/admin/metadata--catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/1.oraclecloudapps.com/ords/admin/client/message"}]}message"}]}
Eliminación de MensajesEliminación de Mensajes
Paso 1.
Paso 1.
Tipo:
Tipo:
DELETE
DELETE
Endpoint
Endpoint
https://g533ded53dca5a3-db202107191810.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/message
Body
{
{
"id":1
"id":1
}
}
Salida
Paso 2.
Paso 2.
TIPO
GET
Endpoint
https://g533ded53dca5a3-db202107191810.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/message
Body
Salida
{"items":[],"hasMore":false,"limit":25,"offset":0,"count":0,"links":[{"rel":"self","href":"
{"items":[],"hasMore":false,"limit":25,"offset":0,"count":0,"links":[{"rel":"self","href":"https://g533ded53dca5a3https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/message"},{"rel":"edit","href":"https://g533ded53dca5a31.oraclecloudapps.com/ords/admin/client/message"},{"rel":"edit","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/message"},{"rel":"describedby","hr1.oraclecloudapps.com/ords/admin/client/message"},{"rel":"describedby","href":"https://g533ded53dca5a3ef":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/metadata1.oraclecloudapps.com/ords/admin/metadata--catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3catalog/client/item"},{"rel":"first","href":"https://g533ded53dca5a3--db202107191810.adb.sadb202107191810.adb.sa--saopaulosaopaulo--1.oraclecloudapps.com/ords/admin/client/message"}]}1.oraclecloudapps.com/ords/admin/client/message"}]}