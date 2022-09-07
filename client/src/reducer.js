export const initialState = {
    bitCoins: false,
    stocks: false,
    divHeight: null,
};

const reducer = (state, action) => {
    
    switch(action.type){
        case "SET_BITCOINS":
            return{
                ...state,
                bitCoins: action.bitCoins,
            }

        case "SET_STOCKS":
            return{
                ...state,
                stocks: action.stocks,
            }

            default:
                return state;
    }
}

export default reducer;
