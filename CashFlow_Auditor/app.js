
let campoVentasContado = document.getElementById ('ventasContado');
let campoCortesias = document.getElementById ('cortesiasEmitidas');

let conTab = document.getElementById('conTab');

conTab.style.display = 'none';


//Jquerys-------------------------------------------------------

$(document).ready(function(){
    $(".monto").on({"focus": function(event) {
            $(event.target).select();
        },
        "keyup": function(event) {
            $(event.target).val(function(index, value) {
                return value.replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
            });
        }
    });
});

$(document).ready(function(){
    $(".montoC").on({"focus": function(event) {
            $(event.target).select();
        },
        "keyup": function(event) {
            $(event.target).val(function(index, value) {
                return value.replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
            });
        }
    });
});

$(document).ready(function(){
    $(".montoR").on({"focus": function(event) {
            $(event.target).select();
        },
        "keyup": function(event) {
            $(event.target).val(function(index, value) {
                return value.replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
            });
        }
    });
});
//-------------------------------------------------------------------

let formateador = new Intl.NumberFormat(undefined,{

    style: 'currency',
    currency: 'PYG',

    maximumFractionDigits:2
})

//--------------------------------------------------------------------------
let totalVentasContado = 0;

function sumar(){
    
    subtotal = 0;
    [ ...document.getElementsByClassName( "monto" ) ].forEach( function ( element ) {

        let monto = element.value//recibimos una cadena con los separadores ."."
        const onlyNumbers = monto.replace(/[^0-9]+/g, "");//eliminamos los separados ".", sigue siendo cadena
        

        if(element.value !== '') {
           
        subtotal += Number(onlyNumbers); // convertimos la cadena en numero para que se pueda sumar
        }
    });
    
    totalVentasContado = Number(subtotal)
    campoVentasContado.value =formateador.format(subtotal);
    console.log(totalVentasContado)
    return subtotal;
}

let totalCortesias = 0;

function sumarC(){

    let subtotal = 0;
    [ ...document.getElementsByClassName( "montoC" ) ].forEach( function ( element ) {

        let monto = element.value;
        const onlyNumbers = monto.replace(/[^0-9]+/g, "");
        
        if(element.value !== '') {
        subtotal +=  Number(onlyNumbers);
        }
    });

    totalCortesias = Number(subtotal);
    campoCortesias.value = formateador.format(subtotal);
    console.log(totalCortesias)
    return subtotal;
}


function nexFocus (event){
    
    let valor = event.keyCode
    let element = event.target;
    let tabIndex = element.tabIndex +1;
    let tabIndex2 = element.tabIndex -1;
    var next = document.querySelector('[tabindex="'+tabIndex+'"]');
    var after = document.querySelector('[tabindex="'+tabIndex2+'"]');

    if (valor === 13 || valor === 40 ){
            next.focus();
            event.preventDefault();
    } else if (valor === 38 ){
            after.focus();
            event.preventDefault();
    }
}

document.getElementById('formCaja').addEventListener('keyup',nexFocus)



function printResults(){

    conTab.style.display = 'inline-block';

    campoCajera = document.getElementById('cajera').value;
    campoFecha = document.getElementById('fecha').value;
    campoTurno = document.getElementById('turno').value;
    campObs = document.getElementById('obs').value;

    if(campObs === ""){
        campObs = "Sin novedades";
    } 

    let campoVentasCredito= document.getElementById('ventasCredito').value;
    let ventasCredito = campoVentasCredito.replace(/[^0-9]+/g, "");
    campoVentasCredito = Number(ventasCredito);

    let campoCupos = document.getElementById('cupos').value;
    let cupos = campoCupos.replace(/[^0-9]+/g, "");
    campoCupos = Number(cupos);

    let campoventaSis = document.getElementById('ventaSis').value;
    let ventaSis = campoventaSis.replace(/[^0-9]+/g, "");
    campoventaSis = Number(ventaSis);

    let campoCreditoSis = document.getElementById('creditoSis').value;
    let CreditoSis = campoCreditoSis.replace(/[^0-9]+/g, "");
    campoCreditoSis = Number(CreditoSis);
    
    let campoCortesiaSis = document.getElementById('cortesiaSis').value;
    let CortesiaSis = campoCortesiaSis.replace(/[^0-9]+/g, "");
    campoCortesiaSis = Number(CortesiaSis);

    let campoCupoSis = document.getElementById('cupoSis').value;
    let CupoSis = campoCupoSis.replace(/[^0-9]+/g, "");
    campoCupoSis = Number(CupoSis);        
    
    let difVentas = formateador.format(Number(totalVentasContado)-Number(campoventaSis));

   
    let difCreditos = formateador.format( Number(campoVentasCredito)-Number(campoCreditoSis));
    let difCortesias =formateador.format(Number(totalCortesias) - Number(campoCortesiaSis));
    let difCupo = formateador.format(Number (campoCupos) - Number(campoCupoSis));
    let tabla = document.getElementById('result');

    tabla.innerHTML +=  
    `<tr>
        <td class="fe">${campoFecha}</td>
        <td class="ca">${campoCajera}</td>
        <td class="tur">${campoTurno}</td>
        <td class="v">${difVentas}</td>
        <td class="cre">${difCreditos}</td>
        <td class="cor">${difCortesias}</td>
        <td class="cup">${difCupo}</td>
        <td class="obs">${campObs}</td>
        <td class="b"><button class ='remover'>X</button></td>  
    </tr>`;

    document.addEventListener('click', (event) =>{
        let target = event.target; 
        if ( target.classList.contains('remover')){
            target.parentElement.parentElement.remove()
        }
    })
    
    celdaFecha = document.getElementsByClassName('fe');

    celdaCajera = document.getElementsByClassName('ca');
    containsFe = campoCajera.includes('seleccionar');
    
    celdaTurno = document.getElementsByClassName('tur');
    containsTur = campoTurno.includes('seleccionar');

    celdaVentas = document.getElementsByClassName('v');
    containsV = difVentas.includes('-')

    celdaCre = document.getElementsByClassName('cre');
    containsCre = difCreditos.includes('-')

    celdaCor = document.getElementsByClassName('cor');
    containsCor = difCortesias.includes('-')

    celdaCup = document.getElementsByClassName('cup');
    containsCup = difCupo.includes('-')

    numCelda = celdaVentas.length-1;

    if (containsFe){
            celdaCajera[numCelda].textContent = "No definido";
    }

    if (containsTur){
            celdaTurno[numCelda].textContent = "No definido";
    }

    if ( campoFecha == ""){
            celdaFecha[numCelda].textContent = "No definido";
    }

    if (containsV ) {
        celdaVentas[numCelda].style.backgroundColor = "rgb(252, 35, 35, 0.7)";
    }
    
    if (containsCre) {
        celdaCre[numCelda].style.backgroundColor = "rgb(252, 35, 35, 0.7)";
    }

    if (containsCor) {
        celdaCor[numCelda].style.backgroundColor = "rgb(252, 35, 35, 0.7)";
    }

    if (containsCup) {
        celdaCup[numCelda].style.backgroundColor = "rgb(252, 35, 35, 0.6)";
    };
    
    document.getElementById('formCaja').reset();


    campoVentasCredito = 0;
    campoCupos = 0;
    campoventaSis = 0;
    campoCreditoSis = 0;
    campoCortesiaSis = 0;
    campoCupoSis = 0;
    totalVentasContado = 0;
    totalCortesias = 0;

    document.getElementById('cajera').focus()
    
}

document.getElementById('btnVer').addEventListener('keyup',function(e){

    valor = e.keyCode
    if ( valor ===13){
        printResults();
        
    }
    document.getElementById('cajera').focus()
})


function exportTableToExcel(table, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById('result');
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'CashFlow_Auditor.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }

    alert('¡Su descarga ha sido completada con exito!')
}

document.getElementById('end').addEventListener('click', function(){
    alert('Proceso Finalizado ¡Gracias por utilizar ClasFlow Auditor v.0.1');
            location.reload()
})
