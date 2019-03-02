const mendeleev = require('mendeleev');

module.exports = (element) => {
    const mendElem = mendeleev(element);
    if (mendElem) {
        return mendElem.number + '.' +
            mendElem.name + '/' +
            mendElem.weight;
    }
    else throw new Error('Element does not exist');
};