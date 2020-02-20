const cipher = {
  encode:(offset, string) => {
    let string2 = '';
    //Recorrer el string
    for(let i=0; i<string.length; i++){ 
      const letterCode = string.charCodeAt(i); 
      //32 es el código ASCII de espacio
      if(letterCode===32 || letterCode===33 || letterCode===64){  
        string2 += string[i] 
      //Para mayúsculas
      }else if(letterCode>=65 && letterCode<=90){ 
        //De ASCII a string de letra cifrada y concatenando cada letra cifrada
        string2 += String.fromCharCode((letterCode - 65 + offset)%26 + 65); 
      //Para minúsculas
      }else if(letterCode>=97 && letterCode<=122){ 
        string2 += String.fromCharCode((letterCode - 97 + offset)%26 + 97); 
      } 
    }
    return string2;
  },
  decode:(offset, string) => {
    let string2 = '';
    //Recorrer el string
    for(let i=0; i<string.length; i++){ 
      const letterCode = string.charCodeAt(i); 
      //32 es el código ASCII de espacio
      if(letterCode===32 || letterCode===33 || letterCode===64){  
        string2 += string[i]
      //Para mayúsculas
      }else if(letterCode>=65 && letterCode<=90){
        //De ASCII a string de letra cifrada y concatenando cada letra cifrada
        string2 += String.fromCharCode((letterCode - 90 - offset)%26 + 90); 
      //Para minúsculas
      }else if(letterCode>=97 && letterCode<=122){
        string2 += String.fromCharCode((letterCode - 122 - offset)%26 + 122); 
      } 
    }
    return string2;
  }
};

export default cipher;
