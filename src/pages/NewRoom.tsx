import { database } from '../services/firebase'
import { FormEvent, useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import illustrationImg from '../Assets/images/illustration.svg'
import logoImg from '../Assets/images/logo.svg'

import { Button } from '../components/Buttons'
import { useAuth } from "../hooks/useAuth"

import '../styles//auth.scss'



export function NewRoom() {

    const { user } = useAuth()
    const history = useHistory()

    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRomm(event: FormEvent) {
        event.preventDefault()
        console.log(newRoom);

        if (newRoom.trim() === '') {//trim retira os espaço a direita e a esquerda
            return; //retorna caso o valor seja vasio, para não criar uma sala sem nome
        }

        const roomRef = database.ref('rooms')

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })
        history.push(`/rooms/${firebaseRoom.key}`)

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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRomm}>{/*a função de salvar ou editar fica sempre no submit do form*/}
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
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