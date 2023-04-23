import {palabras_verificadas as palabras} from "./data.js"; //141 palabras filtradas

let palabra_ingresada = document.getElementById("input");
let boton = document.getElementById ("btn")
let boton_rl = document.getElementById("reload")
let intentos = document.getElementById("intentos")
let celdas = document.getElementsByTagName("td")
let marcador = document.getElementById("puntos")


let contador = 0;
let int = 5;
let lista = [];
let regex = /^([a-zA-Z]{5})$/
let aleatorio = Math.ceil(Math.random()*(palabras.length))
let palabra_clave = palabras[aleatorio]
let puntos = 0;


console.log("Respuesta: " + palabra_clave)

function reload(){
    confirm("¿Estas seguro de reiniciar la partida? Se perderán todos los datos")
    location.reload()
   
}

function perdiste (){
    alert ("Perdiste capo, intentalo de nuevo")
    intentos.textContent = `La palabra correcta es "${palabra_clave}"`;
    intentos.style.color = "white";
    marcador.textContent = "0";
    palabra_ingresada.disabled = true;
}
function ganaste (){
    alert ("Ganaste, sos un crack")
        intentos.textContent = "";
        contador = 0;
        int = 5;
        
        for ( let i = 0; i < celdas.length; i++){
            celdas[i].textContent = "";
            celdas[i].style.backgroundColor = "#494a49";
        }
        
        return
}

function procesador(){

    let entrada = palabra_ingresada.value.toLowerCase()

    if (regex.test(entrada)){
        
    
        for (let i = 0; i <palabra_clave.length; i++){
            
           let letras_i = entrada[i];
           let index_i = i;
           let letras_c = palabra_clave[i];
           let  index_x = i;


            if ( letras_i == letras_c && index_i === index_x){
                celdas[contador].textContent = letras_i.toUpperCase()
                celdas[contador].style.backgroundColor = "#02907d" ;
            }
            else if (palabra_clave.includes(letras_i)){
                celdas[contador].textContent = letras_i.toUpperCase()
                celdas[contador].style.backgroundColor = "#f0ce4e" 
            }
            else{
                celdas[contador].textContent = letras_i.toUpperCase()
            }

            if ( lista.includes)

            palabra_ingresada.value = "";
            intentos.style.color = "red";
            intentos.textContent = `Tienes ${int-1} intentos`;
            contador = contador +1
            
        }
        
        

        if (palabra_clave == entrada){
            
            if (int === 5){
                marcador.textContent = "";
                marcador.textContent = puntos += 50
            }else if (int === 4){
                marcador.textContent = "";
                marcador.textContent = puntos += 40
            }else if (int === 3){
                marcador.textContent = "";
                marcador.textContent = puntos += 30
            }else if (int === 2){
                marcador.textContent = "";
                marcador.textContent = puntos += 20
            }else if (int === 1){
                marcador.textContent = "";
                marcador.textContent = puntos += 10
            }

            setTimeout(ganaste, 500);
            aleatorio = Math.ceil(Math.random()*20)
            palabra_clave = palabras[aleatorio]
            console.log (`Segunda palabra clave : ${palabra_clave}`)
            
        } 

        int = int-1

        if(int <= 0){
            setTimeout(perdiste, 500);
            return
        }
    
    }else{
        intentos.textContent = `Debes introducir una palabra de 5 letras`;
        intentos.style.color = "red";
    }
}


palabra_ingresada.addEventListener("keyup",function (){
    if (event.keyCode == 13){
        procesador()
    }
});

boton_rl.addEventListener("click", reload)
boton.addEventListener("click", procesador)