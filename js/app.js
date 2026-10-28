const numeroFavorito = 20;

const entradaNumero = document.getElementById("numero");
const salidaResultado = document.getElementById("resultado");

entradaNumero.addEventListener("input", function(){
    let numero = Number(entradaNumero.value);
    if (entradaNumero.value == "") {
        salidaResultado.textContent = "";
    } else if (numero == numeroFavorito) {
        salidaResultado.textContent = "Felicitaciones, adivinaste";
    } else if (numero < numeroFavorito) {
        salidaResultado.textContent = "Tu número es menor que mi número favorito";
    } else {
        salidaResultado.textContent = "Tu número es mayor que mi número favorito";
    }
});

const seleccionGustos = document.getElementById("gustos");
const imagenGusto = document.getElementById("imagen-gusto");

const imagenInicial = imagenGusto.src;

const textoGusto = document.createElement("p");
textoGusto.id="texto-gusto";
imagenGusto.after(textoGusto);

seleccionGustos.addEventListener("change", function(){
    let gusto = seleccionGustos.value;
    if (gusto == "musica") {
        imagenGusto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYlsd-GDFBeUJ68tjYajWkOkWvADLo8JDKw_mE4neTH8SHjclfnzVUTg_&s=10";
        textoGusto.textContent = "Me encanta escuchar música para absolutamente todo.";
    } else if (gusto == "maquillaje") {
        imagenGusto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWLRCsf2sKsqMp5j_mtTbBTeaU4r1GGuFBZh5wUTFRVt7z1MwiLtg8sq4&s=10";
        textoGusto.textContent = "Me gusta maquillarme y aprender cada día más sobre técnicas de este mundo";
    } else if (gusto == "comida") {
        imagenGusto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGVFsw57-NRmQrMPdOwq2tLRS0_Cr3-YDl05BlupuJW4r9sKUFbZ9OkKj&s=10";
        textoGusto.textContent = "me encanta comer, más que todo comida rápida.";
    } else {
        imagenGusto.src = imagenInicial;
        textoGusto.textContent = "";
    }
});


const botonAlerta = document.getElementById("alerta");

botonAlerta.addEventListener("click", function(){
    alert("Muchas gracias por su paciencia al enseñarnos. ");
});