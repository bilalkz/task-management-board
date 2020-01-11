export const positions = [
        {id: '1', name: "Administratore"},
        {id: '2', name: "Advising Partner"},
        {id: '3', name: "Analyst"},
        {id: '4', name: "Analyst Private Equity Fund Of Funds"},
        {id: '5', name: "Analyste financier"},
        {id: '6', name: "analyste senior"},
        {id: '7', name: "Assistant"},
        {id: '8', name: "Associate"},
        {id: '9', name: "Associé"},
        {id: '10', name: "Associé Gérant"},
        {id: '11', name: "Associée"},
        {id: '12', name: "Attorney"},
        {id: '13', name: "Avocar à la Cour"},
        {id: '14', name: "Avocat à la cour"},
        {id: '15', name: "Avocat associé"}
]

 
export const getPositions = (val: string) => {
    const result = positions.filter(e => {
        if (e.name.includes(val)) {
            return e
        }       
    })
    return result
}
