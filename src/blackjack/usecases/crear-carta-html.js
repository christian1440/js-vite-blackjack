
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} Imagen de retorno
 */

export const crearCartaHTML = (carta) =>{

    if( !carta) throw new Error('Carta es necesario');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}


