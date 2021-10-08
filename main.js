function registro(){
  var registro={
    id:$("#miId"). val(),
    name:$("#name"). val(),
    email:$("#email"). val(),
    age:$("#age"). val(),
  }


var dataToSend=JSON.stringify(registro);

  $.ajax({
      dataType:'json',
      data:registro,
      url: "https://gff9b1b4fc9ed2f-reto2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
      type:'POST',

      success:function(response) {
        console.log(response);
      },

      error:function(jqXHR, textStatus, errorThrown){

      }            
});

}

function obtenerItems(){
  $.ajax({
    dataType:'json',
    data:registro,
    url: "https://gff9b1b4fc9ed2f-reto2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
    type:'GET',

    success:function(response) {
      console.log(response);
    },

    error:function(jqXHR, textStatus, errorThrown)

}


