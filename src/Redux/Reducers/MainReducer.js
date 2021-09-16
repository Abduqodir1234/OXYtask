const initialState = {
    token:undefined
}

export let MainReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_TOKEN":
            return{
                ...state,
                token:action.payload
            }
        default: return state
    }
}