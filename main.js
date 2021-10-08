let registro = {
  id: 0,
  name: '',
  email: '',
  age: 0
}

const URL = 'https://gff9b1b4fc9ed2f-reto2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client';
const INICIO_TABLA = '<tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>AGE</th></tr>';

function registrar(){
  registro = {
    id: document.getElementById('id').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value,
  }
  console.log(registro);
}

function obtenerItems(){
  fetch(URL)
    .then(response => response.json())
    .then(data => imprimirTabla(data.items) );
}

function insertarItem() {
  registrar();
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(registro),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerItems();
      return response.json();
    }
    return Promise.reject(response);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });

}

function actualizarItem() {
  registrar();
  fetch(URL, {
    method: 'PUT',
    body: JSON.stringify(registro),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerItems();
      return response.json();
    }
    return Promise.reject(response);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}

function eliminarItem() {
  registrar();
  fetch(URL, {
    method: 'DELETE',
    body: JSON.stringify({id: registro.id}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerItems();
      return response.json();
    }
    return Promise.reject(response);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}


function imprimirTabla(items) {
  const tablaPrevia = document.getElementById('tabla');
  let tabla = INICIO_TABLA;
  items.forEach(item => {
    const fila = '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.email  + '</td><td>' + item.age + '</td></tr>';
    tabla = tabla + fila;
  });
  tablaPrevia.innerHTML = tabla;
}

