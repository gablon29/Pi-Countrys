export const deleteofArray = (id, array) => {
    const filter_array = array.filter(value => value !== id)
    return filter_array;
}