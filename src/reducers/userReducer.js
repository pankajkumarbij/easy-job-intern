export const initialState = null;

export const reducer = (state, action) => {
    if(action.type === "USER"){
        console.log(action.payload);
        return action.payload;
    }
    return state;
}