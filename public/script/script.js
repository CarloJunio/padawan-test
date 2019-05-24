
// onclick
$(document).ready(function(){
    $('.submit').on('click', function(event) {
        event.preventDefault();
        if (alphanumeric()) {
            ajax();
        }else
        {
            alert('ACESSO INVÁLIDO');
            location.reload();
        }

    });
});

// alpha
function alphanumeric()
{   var input = $("#pass").val();
var letters = /\b[a-zA-Z0-9]{6}\b/;
if(input.match(letters))
{ 

    return true;     
}
}


// ajax
function ajax(){
    var form = $(this).closest('form');
    var formulario = form.serialize();
    console.log('formulario',formulario);
    $.ajax({
      type:'GET',
      url:'https://r2d2-secret-pass.herokuapp.com/validate',
      data:formulario,
      cache:false,
      success: function(data){
        window.location.replace(data);
    }
}); 
}
