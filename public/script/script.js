function alphanumeric(inputOnlysix)
  {
   var letters = /\b[a-zA-Z0-9]{6}\b/;
   if(inputOnlysix.value.match(letters))
     {
        $.get( "https://r2d2-secret-pass.herokuapp.com/validate", function( data ) {
          console.log(data);
          alert( "Load was performed." );
        });     
      }
   else
     {
     alert("message");
     return false;
     }
  }
