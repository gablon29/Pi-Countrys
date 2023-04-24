export const validation = (userData, errors) => {
    let error = {...errors};
    if (!userData.Nombre.trim()) {
        error.Nombre = 'Debes completar este campo';
    }
    else if (userData.Nombre.length > 25)  {
    error.Nombre = 'Nombre de la actividad demasiado largo'
        } 
        else error.Nombre = '';
    if (!userData.Dificultad)
        error.Dificultad = 'Agrega una dificultad';
    else error.Dificultad = '';
    if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(userData.Duracion)) error.Duracion = 'Debes indicar la duracion en formato HH:mm';
    else error.Duracion = '';
    if (!userData.Temporada) error.Temporada = 'Debes elegir una temporada';
    else error.Temporada = '';
    if (!userData.countryid === []) error.countryid = 'Debes elegir un País';
    else error.countryid = '';
    return error;
}