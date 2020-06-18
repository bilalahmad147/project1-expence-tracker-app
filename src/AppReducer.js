const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DEL_TRANS':
            return {
                ...state,
                transaction : state.transaction.filter(transaction =>transaction.id !==
                action.payload)
            }
        case 'ADD_TRANS':
            return{

            }
        default:
            return state;
    }
}