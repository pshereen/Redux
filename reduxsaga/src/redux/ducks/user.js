
//This is a reducer file
export const GET_USER = 'GET_USER';
const SET_USER = "SET_USER" ;
export const getUser = () =>({
    type: GET_USER
});

export const setUser = (user) =>({
    type: SET_USER,
    user // same as user:user
});

const initialState = {
    user: undefined
}
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            const { user } = action ;
            return {...state, user // same as user: user 
                    };
        default:
            return state;
    }
} ;