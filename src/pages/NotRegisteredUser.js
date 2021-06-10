import React, { useContext  } from 'react'
import {Context} from '../Context'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/RegisterMutation'
import { useLoginMutation } from '../hooks/LoginMutation'



export const NotRegisteredUser = () => {
    const { registerMutation, dataRegister } = useRegisterMutation()
    const errorRegister = dataRegister.error?.graphQLErrors[0].message

    const { loginMutation, dataLogin } = useLoginMutation()
    const errorLogin = dataLogin.error?.graphQLErrors[0].message

    const { activateAuth } = useContext(Context) 


    const onSubmit = ({email, password}) => {
        const input = { email, password }
        const variables = { input }
        registerMutation({ variables })
        .then(({data})=>{
            const { signup }=data
            activateAuth(signup)
        })
    }
    const loginAction = ({email, password}) => {
        const input = { email, password }
        const variables = { input }
        loginMutation({ variables })
        .then(({data})=>{
            const {login}=data
            activateAuth(login)
        })
    }
    
    return <>
        <UserForm disabled={dataRegister.loading} error={errorRegister} onSubmit={onSubmit} title='Registrarse'/>
        <UserForm disabled={dataLogin.loading} error={errorLogin} onSubmit={loginAction} title='Iniciar Sesion'/>
    </>

}
