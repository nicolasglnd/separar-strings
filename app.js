const procesar = document.querySelector("#procesar-separacion");
const limpiarInput = document.querySelector("#limpiar-input");
const limpiarOutput = document.querySelector("#limpiar-output");
const inputArea = document.querySelector("#inputArea");
const outputArea = document.querySelector("#outputArea");
const copiarBtn = document.querySelector("#copiar-output");


//procesar btn
procesar.addEventListener('click', procesarString);

//limpiar btns
limpiarInput.addEventListener('click', () => inputArea.value = "");
limpiarOutput.addEventListener('click', () => outputArea.value = "");

// copiar btn
copiarBtn.addEventListener('click', copiar);

function separarLetrasNums(input) {
    // regex
    const letras = input.replace(/[^a-zA-Z]/g, '');
    const nums = input.replace(/[\D]/g, '');

    // Split numbers into groups
    const primeros4 = nums.slice(0, 4);
    const segundos4 = nums.slice(4, 8);
    const resto = nums.slice(8);

    // Store results in an array
    const result = [letras, primeros4, segundos4, resto];

    return result;
}

function procesarString() {
    const input = inputArea.value;
    const lineas = input.split('\n');
    const resultados = [];
 
    lineas.forEach(linea => {
        const separacion = separarLetrasNums(linea);
        resultados.push(separacion);
    });

    outputArea.value = resultados.map(resultado => resultado.join('\t')).join('\n');
}

async function copiar() {
	try {
		await navigator.clipboard.writeText(outputArea.value);
	}
	catch(e) {
		console.error("ha ocurrido un error al copiar, Error:", e.message);
	}
}

