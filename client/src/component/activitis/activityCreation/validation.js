export const validation = (userData, errors) => {
    const error = {...errors};
    if (!userData.Nombre.trim()) error.Nombre = 'Debes completar este campo';
    else error.Nombre = '';
    if (!userData.Duracion) error.Duracion = 'Debes completar este campo';
    else error.Duracion = '';
    if (!userData.Dificultad) error.Dificultad = 'Debes completar este campo';
    else error.Dificultad = '';
    if (!userData.Temporada) error.Temporada = 'Debes completar este campo';
    else error.Temporada = '';
    if (!userData.country_Index === []) error.countryId = 'Debes elegir un País';
    else error.countryId = '';
    return error;
}