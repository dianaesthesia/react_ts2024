import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {AuthDataModel} from "../../models/AuthDataModel";
import {authService} from "../../services/api.service";

const FormComponent = () => {
    const {register, handleSubmit} = useForm<AuthDataModel>();

    const [isAuthState, setIsAuthState] = useState<boolean>(false);

    const authenticate = async (formData: AuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
    };

    return (
        <div>
            <h3>Login form</h3>
            {isAuthState ? <span>ok</span> : <span>not ok</span>}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} placeholder={"username"} {...register("username")}/>
                <input type={"text"} placeholder={"password"} {...register("password")}/>
                <button>Authenticate</button>
            </form>
        </div>
    );
};

export default FormComponent;