export const validation = (userData, errors, activities) => {
    let error = { ...errors };
    if (!userData.Nombre.trim()) {
        error.Nombre = 'Debes completar este campo';
    }
    else if (userData.Nombre.length > 25) {
        error.Nombre = 'Nombre de la actividad demasiado largo'
    }
    else if(activities.find((act) => act.Nombre.toLowerCase().trim() === userData.Nombre.toLowerCase().trim())) {
        error.Nombre = 'Ese nombre no esta disponible';
    }
        else error.Nombre = '';
    
    if (!userData.Dificultad)
        error.Dificultad = 'Agrega una dificultad';
    else error.Dificultad = '';
    
    if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(userData.Duracion)) error.Duracion = 'Debes indicar la duracion en formato HH:mm';
    else error.Duracion = '';
    
    if (!userData.Temporada || userData.Temporada === 'Temporada') error.Temporada = 'Debes elegir una temporada';
    else error.Temporada = '';
    
    if (!arrayvalidate(userData.countryid)) error.countryid = '';
    else error.countryid = 'Debes elegir un pais';
    
    return error;
}

export const validationSubmit = (error) => {
    for (var prop in error) {
        if (error[prop] !== '') 
            return false
    }
    return true
}

export const arrayvalidate = (array) => {
    return array.length <= 0
}

export const validationArray = (valor, arr) => {
    let index = arr.indexOf(valor)
    if (index === -1) return valor;
}