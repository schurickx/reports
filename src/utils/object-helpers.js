export const addSummValueToObjectInArray = (arr, field1, field2, result) => {
    return arr.map(i => {
        return { ...i, result: parseFloat(i[field1]) * parseFloat(i[field2]) }
    })
}
        
