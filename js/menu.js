// MENU

const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");

hamburguer.addEventListener('click', () => {
    menu.classList.toggle("spread");
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer ){
            menu.classList.toggle("spread");
        }
})



 // GALERIA

const imgHen = document.getElementById("img-hen");
const imgLight = document.querySelector(".agregar-imagen");
const contLight = document.querySelector(".imagen-light");

imgHen.forEach(imagen => {
    imagen.addEventListener('click', () =>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

const aparecerImagen = (imagen) => {
    imgHen.src =imagen
    contLight.classList.toggle('show')
    imgLight.classList.toggle('showImage')
}

console.log(image);