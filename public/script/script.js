// onlick
$(document).ready(function(){
    $('.submit').on('click', function(event) {
        event.preventDefault();

    });
});

// alpha
function alphanumeric(inputOnlysix)
{
    var letters = /\b[a-zA-Z0-9]{6}\b/;
    if(inputOnlysix.value.match(letters))
    { 

        return true;     
    }
    else
    {
        alert ('ERROR');
        return false;
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
        window.location.href(data);
    }
});
}
