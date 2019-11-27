export const required = (value) => {
    if (value) return undefined;
    return 'Обязательное поле'
}

export const maxLength = (max) => (value) => 
    (value && value.length > max) ? `Must be ${max} characters or less` : undefined

export const maxLength20 = maxLength(20)
export const maxLength50 = maxLength(50)
