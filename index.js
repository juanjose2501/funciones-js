
function inicio(){
    console.log("inicio de trabajo")
}

const porcentaje = function(numero,porcentaje){
    console.log("el porcentaje del numero ", numero, " es", numero-(numero*porcentaje/100))
}

porcentaje(400,50);

const datos = function(tipo,marca,memoria,valor){
    console.log(`el dispositivo es  ${tipo} de la marca ${marca} con una memori de ${memoria}g con un costo de ${valor}`)
}

datos("portatil","acer",512,3500000);

function empresa1(){
    this.empresa = "detounpo";
    this.ingresos = 15000000;
    this.inversion = 8000000;
    
}

const empresa = new empresa1();
console.log(empresa);

function empresa1(){
    this.empresa = "caserita";
    this.ingresos = "6000000";
    this.inversion = "2000000";
}

const empresa2 = new empresa1();
console.log(empresa1)

let nivel = 70;
const tanque = function(nivel){
    if(nivel >= 50){
        console.log("nivel del agua sobre el 50%")
    }else{
        console.log("nivel del agua bajo el 50%")
    }
}

tanque(nivel);

let estado = "inestable";

const dispositivo = function(estado){
    if(estado == "inestable"){
        console.log("apagar dispositivo")
    }else if(estado == "estable"){
        console.log("continuar funciones")
    }else{
        console.log("revisar dispositivo")
    }
}

dispositivo(estado);
