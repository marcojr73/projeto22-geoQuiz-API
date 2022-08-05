type TcreateUser = {
    name: string;
    email: string;
    password: string;
    picture: string;
}

type TdataSignUp = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    picture: string;
}

type TdataSignIn = {
    email: string;
    password: string;
}

export {
    TdataSignUp,
    TcreateUser,
    TdataSignIn
}