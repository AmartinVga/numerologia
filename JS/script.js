document.getElementById("miFormu").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Asignar datos del formulario a variables
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let year = document.getElementById('year').value;
    const descripciones =[" ","Misión de vida 1: número de acción e independenciaVienes a ser pionero, creativo, independiente, ejercer liderazgo, autoridad. Es probable que a las personas con esta misión de vida la vida las coloque en situaciones en las que deban tomar decisiones rápidas o actuar por su cuenta desde temprana edad. El número 1 es independiente, pionero y con un liderazgo innato. Las personas con el número 1 suelen estar en puestos de autoridad o donde puedan desarrollar sus propias ideas y proyectos. En cuanto a los aspectos negativos de esta frecuencia hay que evitar la tendencia al egoísmo, la impulsividad y el autoritarismo.", "Misión de vida 2: número de cooperación y sensibilidad Bajo esta cifra vienen a contener, acompañar, asistir con su diplomacia. La misión de vida del 2 se caracteriza por una gran sensibilidad, empatía e intuición frente a su entorno. El número 2 se concentra en las relaciones vinculares. Los vínculos afectivos serán muy importantes a lo largo de su vida y pueden desarrollar su misión de vida en equipos de trabajo o en áreas artísticas o humanísticas. En el aspecto negativo, el 2 puede ser hipersensible o dependiente de sus vínculos, lo que podría verse en una tendencia a la baja autoestima.", "Misión de vida 3: número de creatividad y expresión Las personas con esta misión de vida vienen a plasmar su talento creativo, optimismo, humor y comunicación. Si para la frecuencia 2 las relaciones de pareja están en el centro de su vida, en el caso de la frecuencia 3 se amplía a relaciones sociales y amistades. Quienes se rigen por esta cifra pueden desarrollar su misión de vida desde cualquier área del arte, el entretenimiento, la moda, el diseño, la actuación, la alegría, el contacto con los niños y el aprendizaje y dominio de los idiomas. En contraposición con la alegría que les caracteriza, la numeróloga precisó que desde su aspecto negativo estas personas pueden ser dispersas, muy críticas, superficiales e incluso pesimistas.","Misión de vida 4: número de trabajo y organización El 4 es un número material y físico, por lo que su misión de vida se basa especialmente en desarrollar su capacidad de trabajo, estableciendo rutinas, prestando atención a los detalles, delicado y ordenado. Las personas bajo esta frecuencia pueden desempeñarse con mucha facilidad en tareas contables, en el deporte, trabajos manuales y cualquier área que requiera orden, organización, precisión y detalle. Generalmente las personas con esta misión de vida comienzan a trabajar y asumir responsabilidades desde temprana edad. Además, así como el 4 simboliza la estabilidad, en su aspecto negativo esta frecuencia puede mostrar terquedad, rigidez, avaricia y excesivamente rutinaria.", "Misión de vida 5: número de cambios y libertad: vienes a transitar una vida de cambios, viajes y mudanzas, quien agregó que estas personas podrán desarrollar su misión de vida desde muchas áreas: las ventas, las relaciones públicas, el comercio, el turismo, transita una vida llena de aventuras y viajes. Este amplio abanico que caracteriza las cualidades de la frecuencia del número 5: es pura adrenalina y experimentación, lo que implica que este número tiene la capacidad de conocer y adaptarse a cualquier ambiente y a una diversidad de personas.En su aspecto negativo, las personas con misión 5 poseen una mente muy rápida, pero se aburren con facilidad, pueden ser inconstantes y dispersar su energía o caer en excesos de cualquier tipo.", "Misión de vida 6: número de responsabilidad y amor. Estas personas vienen a esta encarnación a plasmar el amor y la belleza, asumir responsabilidades, aconsejar, contener, sanar y cuidar. El 6 se conoce el número de la armonía y la música. Para esta misión de vida, los vínculos de pareja y la familia son muy importantes. Además, se caracterizan por su sensibilidad y talento artístico, dos cualidades que generan una tendencia a que se rodeen de confort y suelan enfocarse en las áreas de moda, decoración, estética, medicina y el cuidado personal. En su aspecto negativo, estas personas tienen una tendencia a volverse sobreprotectoras o a asumir y cargarse con las responsabilidades de otros. Mantener la empatía sin agotarse será uno de sus desafíos.", "Misión de vida 7: número de reflexión e introspección. Estas personas vienen a desplegar toda su capacidad de análisis, reflexión e introspección. Con ese mismo espíritu, el número 7 buscará equilibrar ciencia y espiritualidad.Es una misión de vida de avance, perfeccionamiento, estudio, investigación y enseñanza. Pueden ser místicos, filósofos, intelectuales o psicoanalistas. Suelen ser solitarios o muy selectivos con sus vínculos. El 7 encierra una misión de vida que prioriza la búsqueda de sabiduría, la ciencia y la espiritualidad. En su aspecto negativo, la tendencia de esta persona puede volverlas ermitañas, demasiado frías, obsesivas. Desarrollan una gran devoción por su actividad, pero esto suele agotar su mente.Por eso, las personas con misión de vida 7 busquen momentos para relajarse, meditar o tomar contacto con la naturaleza.", "Misión de vida 8: el número de poder y magnetismo. Esta cifra, tan asociada con el símbolo del infinito, se manifiesta como misión de vida mediante una búsqueda de equilibrio entre el dinero y la espiritualidad. Las personas regidas bajo esta frecuencia aprenderán a administrarse, a generar dinero, ejercer su magnetismo, autoridad y fuerza en puestos de liderazgo. Tendrán varias oportunidades de negocios a lo largo de su vida y pueden alcanzar riqueza desde distintas actividades, creando su propia empresa o emprendimiento. Sin embargo, en su aspecto negativo o menos armónico, la misión de vida 8 puede volverse excesivamente materialista, violenta y tirana.", "Misión de vida 9: el número humanitario y servicial Este sendero natal, el último de las cifras de un sólo dígito, se distingue por representar la popularidad, el idealismo o el desapego. En general, estas personas pueden pasar por alguna pérdida o un desarraigo a temprana edad, que los inclina a brindar su experiencia y resiliencia a los demás. El número 9 concentra su compromiso en proyectos humanitarios e idealistas. Su vida hogareña y sentimental no estará entre sus prioridades, prefieren sacrificar su vida afectiva para auxiliar, cuidar, proteger o salvar a otros. Su compromiso se concentra en causas humanitarias o ecológicas más que en vínculos personales.El gran idealismo que los motiva a menudo puede fortalecer su costado más oscuro: plagado de fanatismo e impulsividad.", "Misión de vida 11: número de inspiración y genialidad. Las personas regidas por esta frecuencia porque se destacan por su perspectiva anticonvencional. Poseen, además, un halo de liderazgo y brillo natural y la capacidad de influenciar a muchas personas y destacarse del resto fácilmente. El número 11 tiene una misión marcada por la genialidad.  Es probable que el número 11 tenga que pasar por pruebas fuertes a lo largo de su vida porque su potencial es mayor. Quizá se inclinen hacia la invención, la enseñanza, la informática, la tecnología o la canalización. En su aspecto negativo, estas personas deben procurar no perder sentido de la realidad (por sus visiones y percepciones) ni dejarse llevar por nervios excesivos.","Misión de vida 22: número de construcción y expansión Vienen a influenciar a muchas personas con su gran visión y su capacidad de crear proyectos ambiciosos que favorecen a muchos. El talento de este número maestro puede llevarle a desarrollar cualquier actividad y le otorga grandes posibilidades de trascender fronteras y generar beneficios, crecimiento y progreso para los demás también. El 22 posee la intuición del 11 más un sentido práctico que le permite plasmar y concretar sus grandes ideas.  Como todo número maestro, a lo largo de su vida se encontrará con pruebas más exigentes porque su potencial es mayor. En su aspecto negativo, esta misión de vida puede manifestarse en comportamientos destructivos, rebeldes o demasiado volcados en arrebatos." ]
    let fecha = dia + mes +year;
    function reducirNumeros(fecha){
        let suma = fecha.split("")
        let reducir = suma.reduce((acumulator, currentValue) =>       {return acumulator + parseInt(currentValue)}, 0);
        return reducir
    }
    reduccion = reducirNumeros(fecha);

    resultadoFinal = 0

    if (reduccion < 8 || reduccion == 11 || reduccion ==22) {
        resultadoFinal = reduccion;
    }
        
    else if (reduccion > 9){
        fecha2 = (reduccion).toString();
        resultadoFinal = reducirNumeros(fecha2);
    }
    const resultado3 =document.getElementById("resultado").innerHTML = "El numero de Mision de Vida es el " + resultadoFinal;
   


    function mostrarDescripcion(){
        if (resultadoFinal === 22){
            for (let i =0; i < descripciones.length; i++){
                return descripciones[11];
            }
        }
        else if  (resultadoFinal === 11){
            for (let i =0; i < descripciones.length; i++){
                return descripciones[10];
            }
        }
        else{
            for (let i =0; i < descripciones.length; i++){
                return descripciones[resultadoFinal];
            };
        };
    };
    const etapaTitulo = document.getElementById("etapas_vida_h2").innerHTML = "Etapas en que se divide la Vida"
    const etapa1 = document.getElementById("etapa1").innerHTML = "La primera etapa de la Vida es hasta los " + (base = 36 - resultadoFinal) + " y se rige por el numero " + (etapares1 = reducirAUnDigito(reducirNumeros(dia)+reducirNumeros(mes)));
    const etapa2 = document.getElementById("etapa2").innerHTML = "La segunda etapa de la Vida comienza a los " + (stage2= base + 1) + " hasta los "+ (stage2 + 9)  +" y se rige por el numero " + (etapares2=reducirAUnDigito(reducirNumeros(dia)+reducirAUnDigito(reducirNumeros(year))));
    const etapa3 = document.getElementById("etapa3").innerHTML = "La Tercera etapa de la Vida comienza a los " + (stage2 + 10) + " hasta los "+ (stage2 + 19)  + " y se rige por el numero " + (etapares3 = reducirAUnDigito(etapares2 + etapares1));
    const etapa4 = document.getElementById("etapa4").innerHTML = "La Cuarta etapa de la Vida comienza a los " + (stage2 + 20) + " y se rige por el numero " + (reducirAUnDigito(etapares3 + etapares1));

    const fechaActual = new Date;
    const yearTitulo = document.getElementById("personal_yearH2").innerHTML = "El año personal esta regido por el numero " + (reducirAUnDigito(reducirAUnDigito(mes)+ reducirAUnDigito(dia) + fechaActual.getFullYear()))
    const nacimiento = [parseInt(dia),parseInt(mes),parseInt(year)];
    console.log(calcularEdad(nacimiento))
    const digitoEdad = document.getElementById("digito_edad").innerHTML = 'Segun los Digitos de la edad es un año ' + (reducirAUnDigito(reducirAUnDigito(calcularEdad(nacimiento)+ calcularEdad(nacimiento)+1)))
});
const botonRefrescar = document.getElementById('boton');
botonRefrescar.innerText = "Recargar";
botonRefrescar.addEventListener('click', function () {window.location.reload()})
function reducirAUnDigito(valor){
    resultado = 0
    if (valor < 9 || valor ==11 || valor ==22){
    resultado = valor;
    }else{
    resultado = valor.toString().split('').reduce((acum, val) => acum + parseInt(val), 0);
    if (resultado < 9 || resultado ==11 || resultado ==22){
    resultado = resultado;}
      else{resultado = resultado.toString().split('').reduce((acum, val) => acum + parseInt(val), 0);}
   
    }
    
    return resultado};

function calcularEdad(fechaNacimiento) {
    let [dia, mes, anio] = fechaNacimiento;
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - anio;
    
    // Ajustar la edad si no ha pasado el cumpleaños de este año
    if (
        fechaActual.getMonth() + 1 < mes || 
        (fechaActual.getMonth() + 1 === mes && fechaActual.getDate() < dia)
    ) {
        edad--;
    }
    
    return edad;
    }
    
    // let fechaNacimiento = [28, 10, 1990];
    // console.log(`Tienes ${calcularEdad(fechaNacimiento)} años.`);
    