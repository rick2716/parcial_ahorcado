export function mostrarNotificacion(setter) {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  }
  
  export function ganador (correcto, errada, palabra) {
    let status = 'ganaste';
  
    // Verificar si se gano
    palabra.split('').forEach(letra => {
      if(!correcto.includes(letra)){
        status = '';
      }
    });
    
    // Verificar si se perdio
    if(errada.length === 6) status = 'perdiste';
  
    return status;
  }