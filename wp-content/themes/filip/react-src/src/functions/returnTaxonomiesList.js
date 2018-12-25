export default (portfolio,list) => {
    let helperArray = [];
    portfolio.map((item) => {
        item._embedded["wp:term"][list].map(single => {
            helperArray.push({
                'name': single.name,
                'classes': single.acf.class_names || '',
                'menu_order': single.acf.menu_order
            });
        });
    });
    return helperArray.reduce((obj, x) => {
        return obj.concat(obj.find(y => y.name === x.name) ? [] : [x])
    }, []);
};