function calculador() {
  
    const quantia = document.querySelector("#quantia").value;
  
    const juros = document.querySelector("#juros").value;
  
    const meses = document.querySelector("#meses").value;
  
    const interesse = (quantia * (juros * 0.01)) / meses;
      
    const total = ((quantia / meses) + interesse).toFixed(2);
  
    document.querySelector("#total").innerHTML = "A pagar : R$" + total;
}