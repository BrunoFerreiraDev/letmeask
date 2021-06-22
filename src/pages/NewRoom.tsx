
import { Link } from 'react-router-dom'

import illustrationImg from '../Assets/images/illustration.svg'
import logoImg from '../Assets/images/logo.svg'
import googleIconImg from '../Assets/images/google-icon.svg'

import { Button } from '../components/Buttons'
import { useAuth } from "../hooks/useAuth"

import '../styles//auth.scss'



export function NewRoom() {

    const { user } = useAuth()

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
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>{/*link é uma ancora para prender um caminho, nesse caso a pagina incial que tem o caminho somente com "/"   */}
                    </p>
                </div>
            </main>
        </div>
    )


}