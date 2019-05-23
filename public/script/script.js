function alphanumeric(inputOnlysix)
{
 var letters = /\b[a-zA-Z0-9]{6}\b/;
 if(inputOnlysix.value.match(letters))
 {  
    return true;     
}
else
{
   alert("message");
   return false;
}
}

$('#submit').on('click', function(event) {
  event.preventDefault();
  var form = $(this).closest('form');
  var formulario = form.serialize();
  console.log('formulario',formulario);
  $.ajax({
    type:'GET',
    url:'https://r2d2-secret-pass.herokuapp.com/validate'
    data:formulario,
    dataType:'json',
    cache:false,
    success: function(data){
        console.log(data);
    }
});

});
