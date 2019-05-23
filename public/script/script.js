// function alphanumeric(inputOnlysix)
// {
//  var letters = /\b[a-zA-Z0-9]{6}\b/;
//  if(inputOnlysix.value.match(letters))
//  {  
//     return true;     
// }
// else
// {
//    alert("message");
//    return false;
// }
// }
$(document).ready(function(){
    $('.submit').on('click', function(event) {
    event.preventDefault();
    var form = $(this).closest('form');
    var formulario = form.serialize();
    console.log('formulario',formulario);
    $.ajax({
        url: 'https://r2d2-secret-pass.herokuapp.com/validate',
        type: 'get',
        // This is the important part
        xhrFields: {
            withCredentials: true
        },
        // This is the important part
        data: formulario,
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            // handle errors
        }

    // $.ajax({
    //   type:'GET',
    //   url:'https://r2d2-secret-pass.herokuapp.com/validate',
    //   data:formulario,
    //   dataType:'json',
    //   cache:false,
    //   success: function(data){
    //       console.log(data);
    //   }
         });
    });
});
