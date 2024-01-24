/*let titulo=document.querySelector('h1');
titulo.innerHTML='Juego del Calamar Secreto';

 let parrafo = document.querySelector('p');
 parrafo.innerHTML='Indica un número para empezar';
*/
let Tabla=[];

let numeroMax=10;
let numeroSecreto=0;
let intentos=0;

// Función que permite declarar y asignar varios elementos según necesitemos
function asignarTextoElemento(elemento, texto){
    let titulo=document.querySelector(elemento);
    titulo.innerHTML=texto;
    return;
}

function CondicionesIniciales(){
    asignarTextoElemento('h1','Juego de JavaScript');
    asignarTextoElemento('h2','Fosfo Fosfo');
    asignarTextoElemento('p',`Indica un número entre 1 y ${numeroMax} para empezar`);
    //Generar el número secreto (aleatorio)
    numeroSecreto=generarNumeroSecreto();
    //iniciar el número de intentos permitidos
    intentos=1; 
    return;
}

// Función que permite reiniciar el juego una vez que se ha ganado "acertado" 
function reiniciarJuego(){
    // Limpiar caja
    Limpiar();
    // Mensajes iniciales
    CondicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    return;
}

CondicionesIniciales();

function generarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMax)+1;
    console.log(Tabla);
    // Si ya sorteamos todos los números
    if (Tabla.length==numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.');

    }   else {
        // Si el numero está generado, se va a la lista
        if (Tabla.includes(numeroGenerado)){
            return generarNumeroSecreto();      //Se puede realizar recursividad con "return" y llamar a la función en cuestion
        }   else{
            Tabla.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
}

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('ValorUsuario').value);
    console.log(numeroSecreto);

    if (numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos===1)?'intento':'intentos'}`);    
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','Muy arriba, el número secreto es menor');
        }   else{
            asignarTextoElemento('p','Muy abajo, el número secreto es mayor');    
        }
        intentos++;
        Limpiar();
    }
    return;
}

// Función que permite limpiar la barra en la que se ha puesto el valor
function Limpiar(){
    document.querySelector('#ValorUsuario').value='';
    return;
}

// Funcion que permite mostrar una alerta
function intentoDeUsuario(){
    alert('Funciona el bóton');
    return;
}

// Función que muestra en la consola un mensaje
function Prueba(){
    console.log('Prueba con exito');
    return;
}

// Funcion que pregunta por una ciudad y luego muestra dicha ciudad con una 'alerta'
function CiudadPregunta(){
    let Pregunta=prompt('Dime una ciudad:');
    alert('Cuando fui a esa ciudad, '+Pregunta+'. Me acorde de ti');
    return;
}

// Funcion que muestra una 'alerta' de "amo JS cuando se preciona el bóton de Alerta"
function Alerta(){
    alert('Me encanta JS');
    return;
}

// Funcion de suma al presionar un boton
function Suma(){
    let Valor1=Number(prompt('Dame un primer número: '));
    let Valor2=Number(prompt('Dame otro número: '));

    let Valor3=Valor1+Valor2;
    alert('La suma es: '+Valor3);
    return;
}

// Función para promedio de 4 datos
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;
function calcularPromedio(nota1, nota2, nota3, nota4){
    let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4;
    return promedio;
}

// Función para promedio dar el mayor de 2 números
function MayorValor(){  
    let Valor1=prompt('Dame el primer valor:');
    let Valor2=prompt('Dame el segundo valor:');

    if(Valor1>Valor2){
       ValorAlto=Valor1;
    }   else if (Valor2>Valor1){
        ValorAlto=Valor2;
    }
    alert(ValorAlto);
    return;
}

// Función para múltiplicar el valor por si mismo
function ValorCuadrado(){  
    let Valor1=prompt('Dame el primer valor:');
    Valor2=Valor1*Valor1;

    alert(Valor2);
    return;
}
/*Llamamos a la misma función, para validar que esten funcionando las configuraciones para calcular el Indice de Masa Corporal (IMC).
CalcularIMC();
*/
function CalcularIMC(){
    let Peso=Number(prompt('Dame tu peso en Kilogramos: '));
    let Altura=Number(prompt('Dame tu altura en metros: '));
    IMC=(Peso/(Altura**2)).toFixed(2);                            //.toFixed() permite redondear y acortar los decimales según los que queramos: valor.toFixed(2)-Devuelve el valor con 2 decimales

    console.log(IMC);
    if(IMC<18.5){
        alert(`Tu IMC está en: ${IMC}, es muy bajo, debes comer más.`);
    }   else{   if(IMC>=18.5    &&  IMC<25){
        alert(`Tu IMC está en: ${IMC}, está en los niveles normales.`);
    }   else{
        alert(`Tu IMC está en: ${IMC}, está alto, debes revisar tu alimentación`);
    }
    }
    return IMC;
}

//Función para el factorial de un número.
function Factorial(){
    let n=Number(prompt('Dame un valor para su factorial: '));
    let j=1;

    for(let i=n; i>1;i-- ){
        j=j*i;        
        console.log(`${j} Prueba`);
    }
    return;
}
//Función que pida X cantidad en dolares y las vuelva en pesos (MX)
function ConvertirDolares(){
    let Dolar=Number(prompt('Dame una cifra de dolares: '));
    let pesos=(Dolar*16.7).toFixed(2);
    alert(`La cantidad de dolares ($${Dolar}), representa ($${pesos}) pesos`);
}

//Función que pida la altura y anchura de una sala rectangular y muestre el área y perimetro
function RectanguloCalc(){
    let Altura=Number(prompt('Dame la altura del rectangulo: '));
    let Base=Number(prompt('Dame base del rectangulo: '));;
    RectArea=Altura*Base;
    RectPeri=(2*Altura)+(2*Base);

    alert(`El área del circulo es: ${RectArea}. Y su perimetro: ${RectPeri}`);
}

//Área y perimetro de un circulo con un radio dado por usuario y considerando Pi=3.14
function CirculoCalc(){
    let Radio=Number(prompt('Dame el radio del circuo que quieras generar: '));
    let Pi=3.14;
    CircArea=Pi*(Radio**2);
    CircPeri=Radio*(2*Pi);

    alert(`El área del circulo es: ${CircArea}. Y su perimetro: ${CircPeri}`);
}

//Función que muestre la tabla de múltiplicar de un número dado por usuario
function TablaMulti(){
    let x=1;
    let j=Number(prompt('Dame un número para generar su tabla de múltiplicar: '));

    for(let i=0; i<10+1;i++ ){
        x=i*j;        
        console.log(`${j} X ${i} = ${x}`);
    }
    return;
}

// Lista con 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'. Agregar con "push" 'Ruby' y 'GoLang'.
let TablaLenguajes=['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//agregarLenguaje();
function agregarLenguaje(){
    console.log(TablaLenguajes);    //Validación de datos en tabla
    TablaLenguajes.push('Ruby');    
    TablaLenguajes.push('GoLang');
    console.log(TablaLenguajes);    //Validación de que se agreguen a la tabla

    //Función que muestre la lista de la tabla en orden y luego del orden inverso
    for(let i=0; i<TablaLenguajes.length;i++){  //
        
        console.log(TablaLenguajes[i]);
    }

    for(let i=TablaLenguajes.length; i>=0;i--){  //
        
        console.log(TablaLenguajes[i]);
    }

    return;
}

// Suma y promedio de los valores de un arreglo
let numeros=[1, 2, 7, 6, 4];
function promedioNumeros(){
    let j=0;
    let z=numeros[0];
    let promedio=0;
    for (let i=1;i<=numeros.length-1;i++){
        j=numeros[i];
        z=z+j;
        console.log(z)
    }
    promedio=z/(numeros.length);
    console.log(promedio);
    return;
}

//  muestre el mayor y el menor de una lista
function MaxMin(){
    console.log(Math.max(...numeros));//Math.Max permite obtener el máximo en una cadena, a su vez el "..." antes del arreglo permite dirigir al arreglo
    console.log(Math.min(...numeros));//Math.Min permite obtener el máximo en una cadena, a su vez el "..." antes del arreglo permite dirigir al arreglo
}

//Funicón para decir la posición de un elemento que esté en el arreglo
PosicionNumero();
function PosicionNumero(){
    let ValorBuscado=Number(prompt('Dame el valor que deseas buscar en el arreglo: '));
    let i=0;
    //Bucle para mantener una función hasta cumplir restricción
    while(i!=1){
        if (numeros.includes(ValorBuscado)){
            //Al encontrar el valor en el arreglo, dice la posición "normal" 1,2,3... El sistema arroja 0, 1, 2 ... por eso se agrega +1
            console.log(`Se encuentra el valor ${ValorBuscado} en el arreglo. Posición ${numeros.indexOf(ValorBuscado)+1}`);
            i++;
        }   else{
            ValorBuscado=Number(prompt('Valor erroneo. Dame otro valor: '));
        }
    } return;
}

//Función que sume 2 arreglos y los arroje en un tercero sumando uno por uno
//Función con lista de números que regrese otra lista con el cuadrado de cada uno 
let Arreglo1=[0,1,2,3];
let Arreglo2=[1,2,3,4];
let Arreglo3=[];
let ArregloCuadrado=[];

sumaArreglos();
function sumaArreglos(){
    
    for(let i=0; i<Arreglo1.length; i++){
        Arreglo3.push(Arreglo1[i]+Arreglo2[i]);        
    }
    for(let i=0; i<Arreglo1.length; i++){
        ArregloCuadrado.push(Arreglo1[i]**2);        
    }
    console.log(Arreglo3);
    console.log(ArregloCuadrado);
}

