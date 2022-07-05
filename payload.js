const { createStore } = require("redux")


const ADD_USER = 'ADD_USER'

// State
const initialUserState = {
    users: ['rafique'],
    count: 1,
}

// Action
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
}

// Reducer
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1,
            }

        default:
            return state;
    }
}

// Store
const store = createStore(userReducer)

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser('barkat'));
store.dispatch(addUser('salim'));