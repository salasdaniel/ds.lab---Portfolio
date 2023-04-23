'use strict'

let teclas = document.querySelectorAll('.tecla span'),
    pantalla = document.getElementById ('pantalla'),
    historial = document.getElementById ('historial'),
    resultado = 0,
    ultOperacion = "",
    valorAnterior = "",
    valorActual = "",
    operador = false;
    let x ;
    let y ;
    let z ;


    teclas.forEach (function (element){
        element.addEventListener("click", function(){
            pantalla.style.fontSize = '30px';
            var entrada = this.textContent;

            x = false;
            y = false;

           

            if ( !isNaN(entrada) || entrada !== "<" && historial.textContent !==""){

                
                if( entrada == "." && valorActual.indexOf(".") > -1 ) return;

                historial.textContent += entrada;
             }
            
            if (isNaN (entrada) &&  valorActual == "" && !operador){
                return;


            } else if (!isNaN(entrada) || entrada =="."){

                if( entrada == "." && valorActual.indexOf(".") > -1 ) return;
                valorActual += entrada;
                pantalla.textContent = valorActual;
                operador = true;
                z = false;
                
                
                if ( ultOperacion == "="){
                    historial.textContent = valorActual;
                }
            

            } else if (isNaN(entrada)){

                
              if (entrada == "<"){
                if( valorActual >1){
                    
                    valorActual = valorActual.substring(0, valorActual.length -1)
                    historial.textContent = historial.textContent.substring(0, historial.textContent.length -1)
                    pantalla.textContent = valorActual;
                    
                }
              } else if (entrada == "c"){
                
                    resultado = 0
                    ultOperacion = ""
                    valorAnterior = 0
                    valorActual = ""
                    operador = false;
                    historial.textContent = "";
                    pantalla.textContent = 0;
                    

              } else if ( entrada !== "c" || entrada !== "<") {
                
                if (valorActual == ""){
                    
                    valorActual = 0;

                } else if (valorAnterior == 0 ){
                    
                    valorAnterior = resultado;
                }
                
                if ( !z ){

                    switch (ultOperacion){

                        case "+":
                            sumar(valorAnterior, valorActual)
                            break;
                        
                        case "-":
                             restar(valorAnterior, valorActual)
                            break;
                        
                        case "x":
                             multiplicar(valorAnterior, valorActual)
                            break;
                        
                        case "/":
                             dividir (valorAnterior, valorActual)
                            break;
                            
                        
                    }
                }
                   
                    if ( resultado == "Infinity"){
                        pantalla.textContent = "No se puede dividir entre cero";
                        pantalla.style.fontSize = '20px';
                        resultado = 0;
                        historial.textContent = "";
                        }
                    
                    if ( entrada == "=" ){
                        historial.textContent = resultado;    
                    }
  
                    valorAnterior = valorActual;
                    valorActual = "";
                    ultOperacion = entrada;
                 
                }
            } 

            let historia = historial.textContent
            let historiaL = historia.length;
            let PenCar = historia.substring(historiaL-2, historiaL-1)
            let ulCar = historia.substring(historiaL-1, historiaL)

            
             
            
            if (ulCar == "+" || ulCar == "x" ||ulCar == "-" ||ulCar == "/"){
                z = true;
            }

            if (PenCar == "+" || PenCar == "x" ||PenCar == "-" ||PenCar == "/"){
                x = true;
            }

            if (entrada == "+" || entrada == "x" ||entrada == "-" ||entrada == "/" ){
                y = true;
            }
            
            if (y && x ){
            
                historial.textContent = historia.substring(0, historiaL -1);
                historial.textContent = historial.textContent.replace(PenCar,ultOperacion);
                valorAnterior = resultado;


            }

            let historiaL2 = historial.textContent.length;
            let numero = 1;
            console.log (historial.textContent[numero]);
         
            

             
           
    
        })
    })

 
   
   function sumar(num1, num2){
    resultado = parseFloat (num1) + parseFloat (num2)
    pantalla.textContent = resultado;
    valorActual = resultado;
    
   
   }
   function restar(num1, num2){
    resultado = parseFloat (num1) - parseFloat (num2)
    pantalla.textContent = resultado;
    valorActual = resultado;
   
   }
   function multiplicar (num1, num2){
    resultado = parseFloat (num1) * parseFloat (num2)
    pantalla.textContent = resultado;
    valorActual = resultado;
   
   }
   function dividir(num1, num2){
    resultado = parseFloat (num1) / parseFloat (num2)
    pantalla.textContent = resultado;
    valorActual = resultado;
   
   }


   