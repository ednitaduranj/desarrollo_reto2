const URL2='https://gff9b1b4fc9ed2f-reto2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message';
const MENSAJE_TABLA ='<tr><th>ID</th><th>MESSAGE</th>';

let registroMensajes = {
  id: 0,
  messagetext: '',
}

function registrarMensaje(){
  registroMensajes = {
    id: document.getElementById('id-message').value,
    messagetext: document.getElementById('messageText').value,
  }
}

function imprimirMensajes(items) {
  const tablaPreviaMensajes = document.getElementById('tablaMensaje');
  let tablaMensaje = MENSAJE_TABLA;
  items.forEach(item => {
    const fila = '<tr><td>' + item.id + '</td><td>' + item.messagetext + '</td></tr>';
    tablaMensaje = tablaMensaje + fila;
    });
    tablaPreviaMensajes.innerHTML = tablaMensaje;
}

function obtenerMensaje(){
  fetch(URL2)
    .then (response => response.json())
    .then (data => imprimirMensajes(data.items));
}
  
function insertarMensaje(){
  registrarMensaje();
  fetch(URL2, {
    method: 'POST',
    body: JSON.stringify(registroMensajes),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerMensaje();
      return response.json();
    }
    return Promise.reject(response);
   }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
  
}

function actualizarMensaje() {
  registrarMensaje();
  fetch(URL2, {
    method: 'PUT',
    body: JSON.stringify(registroMensajes),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerMensaje();
      return response.json();
    }
    return Promise.reject(response);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });  
}

function eliminarMensaje() {
  registrarMensaje();
  fetch(URL2, {
    method: 'DELETE',
    body: JSON.stringify({id: registroMensajes.id}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerMensaje();
      return response.json();
    }
    return Promise.reject(response);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}
  