function letter(symbols){
var  text="";
 for(i=0; i<symbols.length; i++){
  if (symbols[i-1]==0){
   text += (symbols[i].toUpperCase());
  } 
  else {
  text += (symbols[i].toLowerCase());
  }
  if(i!=symbols.length-1){
   continue;
  }
  console.log(text[0].toUpperCase() + text.slice(1));
  }
 
 }
 
 letter("lorem ipsum stan");