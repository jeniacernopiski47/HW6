function drawTriangle (symbol,lines){
    if (lines>3) {
     for (i=1;i<=lines;++i){
      console.log (symbol.repeat(i));
     } 
    } else {{}
     for (i=1;i<=3;++i){
      console.log (symbol.repeat(i));
     } 
    }
   }
   
   
   drawTriangle ('$',6);
   
   