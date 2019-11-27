const headerStyle = (size) => {
    return {
        width: size ? `${size}%` : undefined,
        textAlign: 'center',
        wordWrap: 'break-word'
    }
}

const cellStyle = (textAlign = 'center') => {
    return { textAlign: `${textAlign}`, wordWrap: 'break-word' }
}

const configTable = (confObj) => {

    return Object.entries(confObj).map(
        ([key, value]) => ({
            dataField: key,
            text: value,
            headerStyle: headerStyle(),
            style: cellStyle()
        })
    );
}
const configTableWithFooter = (confObj) => {

    return configTable(confObj).map(i => ({
        ...i,
        footer: '',
        headerStyle: headerStyle(),
        style: cellStyle()
    }))
}

export {
    headerStyle,
    cellStyle,
    configTable,
    configTableWithFooter
}
