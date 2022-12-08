function changelog(elemento){
    if (elemento.innerHTML=="Login"){
        elemento.innerHTML="Logout";}
    else{
        elemento.innerHTML="Login";
    }
}
function generaralerta(elemento){
    let idlike = elemento.id;  //el metodo id devuelve en string
    if (idlike=="likes1"){
        alert("Ninja 1 was liked");
    }else{
        alert("Ninja 2 was liked");
    }
}
function removebutton(elemento){
    elemento.remove();
}