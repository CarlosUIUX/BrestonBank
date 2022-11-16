let ventana = document.getElementById("window-navbar");
let btnAbrir = document.getElementById("menu-icon");

btnAbrir.addEventListener("click", abrirMenu);

function abrirMenu(){

    if(ventana.style.display === 'block'){
        cerrarMenu();
    }else{
        ventana.style.display = 'block';
    }
}

function cerrarMenu(){
    ventana.style.display = 'none';
}

