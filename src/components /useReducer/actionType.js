export const INCREMENT="INCREMENT"
export const DECREMENT="DECREMENT"
export const INCREMENT_FIVE="INCREMENT_FIVE"
export const DECREMENT_FIVE="DECREMENT_FIVE"
export const CHANGE_GREETING="CHANGE_GREETING"


export const reducerFunction = (state, action) => {

    switch (action.type) {

        case INCREMENT:
            return { ...state, count: state.count + action.payload }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        case INCREMENT_FIVE:
            return { ...state, count: state.count + 5 }
        case DECREMENT_FIVE:
            return { ...state, count: state.count - 5 }
        case CHANGE_GREETING:
            return { ...state, greeting: "Good afternoon" }
        default:
            return state

    }




}

export const initialState = {

    count: 0,
    greeting: "Good morning",
    subject:[
        {
            name:"social",

        },
        {
            name:"science",

        },
        {
            name:"maths",

        },
        {
            name:"physics",

        },
    ]
}



// tasks :
// 1. repeat the class 
// 2. Dark mode apply to the app 
// 3. Sign in and signOut functuality
// 4. Complete the pending class 
