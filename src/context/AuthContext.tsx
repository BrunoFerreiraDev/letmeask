import { createContext, ReactNode, useState, useEffect } from "react"
import { auth, firebase } from '../services/firebase'
import { isPropertySignature } from "typescript"

type User = {
    id: string,
    name: string,
    avatar: string
}

type AuthContectType = {
    user: User | undefined,
    signInWithGoogle: () => Promise<void>,
}
type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContectType)

const [user, setUser] = useState<User>()//inicia o estado como undefined

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            const { displayName, photoURL, uid } = user//displayName: nome que o usuario quer ser chamado, photoURL:endereço do avatar do usuario, uid: indentificado unico daquele usuario

            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google  Account.');
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })


        }
    })

    return () => {
        unsubscribe()
    }

}, [])

async function signInWithGoogle() {
    //autenticação do usuario
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider)

    //abre um janela para autenticar o usuario no Google

    if (result.user) {
        const { displayName, photoURL, uid } = result.user//displayName: nome que o usuario quer ser chamado, photoURL:endereço do avatar do usuario, uid: indentificado unico daquele usuario

        if (!displayName || !photoURL) {
            throw new Error('Missing information from Google  Account.');
        }

        setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
        })

    }

}

export function AuthContextProvider(props: AuthContextProviderProps) {
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>

    )
}