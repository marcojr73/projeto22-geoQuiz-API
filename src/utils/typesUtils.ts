type TcreateUser = {
    name: string;
    email: string;
    password: string;
    picture: string;
}

type dataSignUp = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    picture: string;
}

export {
    dataSignUp,
    TcreateUser
}