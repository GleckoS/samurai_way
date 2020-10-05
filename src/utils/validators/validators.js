export const required = (value) => {
    if (!value) return "Required Field"
    else return undefined
}

export const maxLengthCreator = (maxLength) => (values) => {
    if(values.length > maxLength) return "Too much symbols"
}