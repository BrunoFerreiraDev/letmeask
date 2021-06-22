

import { useHistory } from 'react-router-dom'

import illustrationImg from '../Assets/images/illustration.svg'
import logoImg from '../Assets/images/logo.svg'
import googleIconImg from '../Assets/images/google-icon.svg'

import { Button } from '../components/Buttons'
import { useAuth } from "../hooks/useAuth"

import '../styles//auth.scss'


export function Home() {
    const history = useHistory()

    const { user, signInWithGoogle } = useAuth()


    async function handleCreateRomm() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')//redirecionamento de pagina acontece somente depois do loguin


    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Cria sala de Q&amp;A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRomm} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o códico da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )


}