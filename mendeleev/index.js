const elements = {
    'H': {
        name: 'Hydrogen',
        number: 1,
        weight: 1.008,
    },
    'He': {
        name: 'Helium',
        number: 2,
        weight: 4.003,
    },
    'Li': {
        name: 'Lithium',
        number: 3,
        weight: 6.491
    }
};

module.exports = (element) => {
    if (element) {
        return elements[element];
    }
    else {
        throw new Error('element is undefined');
    }
};