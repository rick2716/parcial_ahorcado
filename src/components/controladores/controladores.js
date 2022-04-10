export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  }
  
  export function ganador (correcto, errada, palabra) {
    let status = 'ganaste';
  
    // Verificar el ganador
    palabra.split('').forEach(letra => {
      if(!correcto.includes(letra)){
        status = '';
      }
    });
    
    // Check for lose
    if(errada.length === 6) status = 'perdiste';
  
    return status
  }