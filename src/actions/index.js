export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEM_PLUS = "MEM_PLUS"
export const MEM_R = "MEM_R"
export const MEM_CLEAR = "MEM_CLEAR"


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const applyOp = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clear = (clearing) => {
    return ({type:CLEAR_DISPLAY, payload:clearing})
}

export const mPlus = (plus) => {
    return ({type:MEM_PLUS, payload:plus})
}

export const mR = (r) => {
    return ({type:MEM_R, payload:r})
}

export const mClear = (clear) => {
    return ({type:MEM_CLEAR, payload:clear})
}

