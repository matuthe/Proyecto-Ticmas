function mostrarPersonal(){
    document.getElementById('infoPersonal').style.display = 'block' ;    
}


function ocultarPersonal(){
    document.getElementById('infoPersonal').style.display = 'none' ;    
}


function mostrar_ocultarPersonal(){
    var infoPersonal = document.getElementById('infoPersonal')

    if (infoPersonal.style.display == ('none')) {
        mostrarPersonal()
        
    } else {
        ocultarPersonal()
        
    }
}


function mostrarContacto(){
    document.getElementById('infoContacto').style.display = 'block' ;    
}


function ocultarContacto(){
    document.getElementById('infoContacto').style.display = 'none' ;    
}


function mostrar_ocultarContacto(){
    var infoContacto = document.getElementById('infoContacto')

    if (infoContacto.style.display == ('none')) {
        mostrarContacto()
        
    } else {
        ocultarContacto()
        
    }
}