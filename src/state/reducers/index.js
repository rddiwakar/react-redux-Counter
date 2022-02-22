import { DECREMENT, INCREMENT, MAX, RESET, STEP } from "../../type";
const initialState = {
    count: 0,
    step: 10,
    max: 40
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            if (state.count < state.max) {
                return { ...state, count: (state.count + state.step) }
            } else {
                alert(`Count cannot be more than maximum limit ${state.max}`)
                return state
            }
        case DECREMENT:
            if (state.count > 0) {
                
                return { ...state, count: (state.count - state.step) }
            } else {
                alert('Count cannot be less than 0')
                return state
            }
        case RESET:
            return { ...state, count: 0 }
        case STEP:
            return { ...state, step:Number(action.payload) }    
        case MAX:
            return {...state, max:action.payload}   
        default:
            return state
    }
}
export default counter