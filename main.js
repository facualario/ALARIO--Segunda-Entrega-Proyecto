
let name = prompt("Para ingresar a la tienda por favor ingrese su nombre");

userName()

while ( name === "") {

    name= prompt ( "No ha ingresado nada, por favor ingrese su nombre para poder continuar")
}


//Genero funcion para activar boton para remover categorias de productos del carrito

function eliminar1(){

    let vaciarPlayo = document.getElementById("playo")

    vaciarPlayo.innerHTML=""
}

function eliminar2(){

    let vaciarCuenco = document.getElementById("cuenco")

    vaciarCuenco.innerHTML=""
}

function eliminar3(){

    let vaciarHondo = document.getElementById("hondo")

    vaciarHondo.innerHTML=""
}

//Genero funciones para agregar productos al carrito

function agregarPlayo (){

    let playo = document.createElement("p")
    
    playo.innerHTML= "Playo x 1 unidad" +  "<button onclick=eliminar1()> Remover </button>"
  
    document.getElementById("playo").appendChild(playo)
    
}

function agregarCuenco (){

    let cuenco = document.createElement("p")
    cuenco.innerHTML= "Cuenco x 1 unidad" +  "<button onclick=eliminar2()> Remover </button>"
    document.getElementById("cuenco").appendChild(cuenco)
   
}


function agregarHondo (){

    let hondo = document.createElement("p")
    hondo.innerHTML= "Hondox 1 unidad" +  "<button onclick=eliminar3()> Remover </button>"
    document.getElementById("hondo").appendChild(hondo)
   
}

//Genero la funcion para borrar todos los productos del carrito

function vaciarCarrito(){
    
    let vaciar = document.getElementById("listaProductos")
    vaciar.innerHTML=`<div id="playo"></div>
    <div id="hondo"></div>
    <div id="cuenco"></div>`
}

//Genero la funcion para confirmar la compra mediante boton

function confirmarCompra (){

    let compra = document.getElementById("myDiv");

      ;

    compra.innerHTML= "Muchas gracias por su compra";
    
    compra.classList.add("myStyle");
   

}
