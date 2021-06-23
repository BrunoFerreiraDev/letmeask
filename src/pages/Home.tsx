import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { database } from '../services/firebase'

import illustrationImg from '../Assets/images/illustration.svg'
import logoImg from '../Assets/images/logo.svg'
import googleIconImg from '../Assets/images/google-icon.svg'

import { Button } from '../components/Buttons'
import { useAuth } from "../hooks/useAuth"

import '../styles//auth.scss'

export function Home() {
    const history = useHistory()

    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('')


    async function handleCreateRomm() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')//redirecionamento de pagina acontece somente depois do loguin


    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()
        if (roomCode.trim() === '') {
            return
        }
        const roomRef = await database.ref(`/rooms/${roomCode}`).get()

        if (!roomRef.exists()) {
            alert('Room does not exist.')
            return
        }
        history.push(`/rooms/${roomCode}`)
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
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o códico da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
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