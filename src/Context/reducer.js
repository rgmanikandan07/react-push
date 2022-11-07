export const initalvalue={task:[]}

export const stateReducer = (state,action) => {
    console.log("action",action);
    if(action.type === "set_event"){
        return{
            ...state,
            task: action.payload,
        }
        // else{
        //     return state;
        // }
    // return state;
};
};