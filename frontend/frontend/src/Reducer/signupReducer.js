const initialFormState = {
    name:"",
    username:"",
    email:"",
    password:"",
};

export default function signupReducer(state=initialFormState, {type, value}){  //takes state and action
    switch (type) {
        case "SET_NAME": return{...state, name:value}
        case "SET_USERNAME": return{...state, username:value}
        case "SET_EMAIL": return{...state, email:value}
        case "SET_PASSWORD": return{...state, password:value}
        default: return state;

    }
};