export const Inrement = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        default:
            return state;
    }
}

export const DoubleInc = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 2;
        case 'dec':
            return state - 2;
        default:
            return state;
    }
}

