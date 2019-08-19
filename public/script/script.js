// onclick
$(document).ready(function () {
    document.getElementById("pass").onkeypress = function (e) {
        var chr = String.fromCharCode(e.which);
        if ("1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM-".indexOf(chr) < 0)
            return false;
    };
    $('#form1').on('submit', function (event) {
        event.preventDefault();
        if (alphanumeric()) {
            ajax();
            return true;
        } else {
            alert("FORMATO INVÁLIDO");
        }
    });
});

// alpha
function alphanumeric() {
    var input = $("#pass").val();
    var letters = /^[a-zA-Z0-9.\-_]+$/;
    if (input.length == 12 && input.match(letters)) {
        return true;
    }
}


// ajax
function ajax() {
    var formulario = $('#form1').serialize()
    console.log('formulario', formulario);
    $.ajax({
        type: 'GET',
        url: 'http://www.pennawd.com.br/webservice.php',
        data: formulario,
        dataType: 'JSON',
        success: function (data) {
            console.log(data);
            swal("COMPLETE!","Authorization:" + data.authorization + "\nMessage:" + data.message,"success");
        },
        error: function () {
            alert("SENHA INVALIDA");
        }
    });
}