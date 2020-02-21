const cipher = {
  encode:(offset, string) => {
    if (offset===null || offset===0){
      throw new TypeError();
    }
    let string2 = '';
    //Recorrer el string
    for(let i=0; i<string.length; i++){ 
      const letterCode = string.charCodeAt(i); 
      //Para mayúsculas
      if(letterCode>=65 && letterCode<=90){ 
        //De ASCII a string de letra cifrada y concatenando cada letra cifrada
        string2 += String.fromCharCode((letterCode - 65 + offset)%26 + 65); 
      //Para minúsculas
      }else if(letterCode>=97 && letterCode<=122){ 
        string2 += String.fromCharCode((letterCode - 97 + offset)%26 + 97); 
      }else if(letterCode>=48 && letterCode<=57){
        string2 += String.fromCharCode((letterCode - 48 + offset)%10 + 48);
      }else{
        string2 += string[i];
      }
    }
    return string2;
  },

  decode:(offset, string) => {
    // if (offset===null || offset===0){
    //   throw new TypeError();
    // }
    let string2 = '';
    //Recorrer el string
    for(let i=0; i<string.length; i++){ 
      const letterCode = string.charCodeAt(i); 
      //Para mayúsculas
      if(letterCode>=65 && letterCode<=90){
        //De ASCII a string de letra cifrada y concatenando cada letra cifrada
        string2 += String.fromCharCode((letterCode - 90 - offset)%26 + 90); 
      //Para minúsculas
      }else if(letterCode>=97 && letterCode<=122){
        string2 += String.fromCharCode((letterCode - 122 - offset)%26 + 122); 
      }else if(letterCode>=48 && letterCode<=57){
        string2 += String.fromCharCode((letterCode - 57 - offset)%10 + 57); 
      }else{
        string2 += string[i];
      }
    }
    return string2;
  }
};

export default cipher;
