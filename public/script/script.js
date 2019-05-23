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
