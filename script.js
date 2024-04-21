function calc(oper)
{
 var n1=document.getElementById("txtn1").value;
 var n2=document.getElementById("txtn2").value;
 var resu =0;

 if((isNaN(n1)) || (n1=="")) 
 {
  window.alert("1º Valor Inválido");
  document.getElementById("txtn1").value="";
  document.getElementById("txtresu").value="";
  document.getElementById("txtparimpar").value="";
  document.getElementById("txtn1").focus();
 }
 else if((isNaN(n2)) || (n2=="")) 
 {
  window.alert("2º Valor Inválido");
  document.getElementById("txtn2").value="";
  document.getElementById("txtresu").value="";
  document.getElementById("txtparimpar").value="";
  document.getElementById("txtn2").focus();
 }
  
 else{
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    if(oper=="+")
      resu=n1+n2;
    else if(oper=="-")
      resu=n1-n2;
    else if(oper=="*")
      resu=n1*n2;
    else if(n2!=0)
      resu=n1/n2;
    else
    {
      document.getElementById("txtresu").value= "Erro da divisão";
      document.getElementById("txtparimpar").value= "Erro";
      return;
     }

    document.getElementById("txtresu").value=resu.toFixed(1);
  
    if((resu%2)==0)
        document.getElementById("txtparimpar").value="Número par";
    else
        document.getElementById("txtparimpar").value="Número ímpar";
  }
 
}