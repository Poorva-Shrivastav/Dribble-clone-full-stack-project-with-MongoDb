const initialSigninState = {
    username:"",
    // email:"",
    password:"",
};

export default function signinReducer(state="initialSigninState", {type, value}){  //takes state and action
    switch (type) {
        case "SET_USERNAME": return{...state, username:value}
        // case "SET_EMAIL": return{...state, email:value}
        case "SET_PASSWORD": return{...state, password:value}
        default: return state;

    }
};