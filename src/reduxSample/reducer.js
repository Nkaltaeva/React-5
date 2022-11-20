export const toggleReducer = (state = false,action) => {
    switch(action.type){
        case'SWITCH_TOGGLE': 
            console.log(action)
            return !state

        default:return state
    }
  
}

