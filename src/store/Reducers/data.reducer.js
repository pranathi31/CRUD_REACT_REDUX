const initialState = {
    tabledata:[],
    tabledatabyid:[]
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) { 
        case 'TABLEGET': 
            return ({ ...state, tabledata: action.payload }); 
        case 'TABLEGETBYID': 
            return ({ ...state, tabledatabyid: action.payload }); 
        case 'TABLEPUT': 
            return ({ ...state, tabledatabyid: {} });              
        default: return state;
    }
}

export default dataReducer;