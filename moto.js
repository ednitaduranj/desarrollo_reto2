const URL3 ='https://gff9b1b4fc9ed2f-reto2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/moto/moto';
const MOTO_TABLA = '<tr><th>ID</th><th>BRAND</th><th>MODEL</th><th>CATEGORY_ID</th><th>NAME</th></tr>';

let registroMoto = {
  id: 0,
  brand: '',
  model: 0,
  category_id: 0,
  name: '',
}

function registrarMoto(){
  registroMoto = {
    id: document.getElementById('id-moto').value,
    brand: document.getElementById('brand').value,
    model: document.getElementById('model').value,
    category_id: document.getElementById('category-id').value,
    name: document.getElementById('nameMoto').value, 
  }
  console.log(registroMoto);
}

function imprimirMoto(items) {
  const tablaPreviaMoto = document.getElementById('tablaMoto');
  let tablaMoto = MOTO_TABLA;
  items.forEach(item => {
    const fila = '<tr><td>' + item.id + '</td><td>' + item.brand + '</td><td>' + item.model+ '</td><td>' + item.category_id + item.name + '</td></tr>';
    tablaMoto = tablaMoto + fila;
    });
    tablaPreviaMoto.innerHTML = tablaMoto;
}

function obtenerMoto(){
  fetch(URL3)
    .then(response => response.json())
    .then(data => imprimirMoto(data.items) );
}

function insertarMoto(){-
  registrarMoto();
  fetch(URL3, {
    method: 'POST',
    body: JSON.stringify(registroMoto),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerMoto();
      return response.json();
    }
    return Promise.reject(response);
   }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
  
}

function actualizarMoto() {
  registrarMoto();
  fetch(URL3, {
    method: 'PUT',
    body: JSON.stringify(registroMoto),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerMoto();
      return response.json();
    }
    return Promise.reject(response);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });  
}

function eliminarMoto() {
  registrarMoto();
  fetch(URL3, {
    method: 'DELETE',
    body: JSON.stringify({id: registroMoto.id}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      obtenerMoto();
      return response.json();
    }
    return Promise.reject(response);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}