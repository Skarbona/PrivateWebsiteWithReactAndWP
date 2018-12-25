export default (item,list) => {
    return item._embedded["wp:term"][list].map( tax => {
        return tax.name
    })
}