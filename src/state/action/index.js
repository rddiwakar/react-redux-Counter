import { DECREMENT, INCREMENT, MAX, RESET, STEP } from '../../type';

export function DoIncrement(){
    return { type : INCREMENT }
}
export function DoDecrement(){
    return { type : DECREMENT }
}
export function DoReset(){
    return { type : RESET }
}
export function DoStep(item){
    return{ 
        type: STEP,
        payload: item
    }
}
export function DoMax(item){
    return{ 
        type: MAX,
        payload: item
    }
}