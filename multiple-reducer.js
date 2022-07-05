const { createStore, combineReducers } = require('redux');

const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// state
const initialProductState = {
    products: ['amm', 'kola'],
    count: 2,
}

const initialCartState = {
    items: ['amm'],
    count: 1,
}

// action
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
};
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
};

const getCartItems = () => {
    return {
        type: GET_CART_ITEMS,
    }
};
const addCartItem = (item) => {
    return {
        type: ADD_CART_ITEM,
        payload: item,
    }
};

// reducer
// productReducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                count: state.count + 1,
            }

        default:
            return state;
    }
}

// cartReducer
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            }
        case ADD_CART_ITEM:
            return {
                items: [...state.items, action.payload],
                count: state.count + 1,
            }

        default:
            return state;
    }
}

// create a rootReducer for handle multiple reducer 
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
})

// store
const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProduct('jam'))

store.dispatch(getCartItems())
store.dispatch(addCartItem('jam'))