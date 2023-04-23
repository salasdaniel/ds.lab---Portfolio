const slider = document.querySelector('.img-slider');
const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');

const images = [
    "bg1.png",
    "bg2.png",
    "bg3.png",
    "bg4.png",
    "bg5.png",
]

let id = 0;

function slide(id){
    slider.style.backgroundImage = `url(assets/img/${images[id]})`;
    slider.classList.add('image-fade');
    setTimeout(() => {
        slider.classList.remove('image-fade');   
    }, 550);
}

left.addEventListener('click',()=>{
    
    id--;

    if(id<0){
        id = images.length-1
    }
    
    slide(id)
    });

    right.addEventListener('click', () =>{
        id++;
        if (id > images.length -1){
            id = 0
        }
        slide (id);
    })

function nextFocus (event){
    let valor = event.keyCode;
    let element = event.target;
    let tabIndex = element.tabIndex+1;
    let tabIndex2 = element.tabIndex-1;

    let next = document.querySelector('[tabindex="'+tabIndex+'"]');
    let after = document.querySelector('[tabindex="'+tabIndex2+'"]');

    

    console.log(element.value)
    if ( valor === 40){
        next.focus();
        event.preventDefault();
    } else if ( valor === 38 ){
        after.focus();
        event.preventDefault();
    }
    console.log(event.keyCode)
    }


document.getElementById('form').addEventListener('keyup',nextFocus)
