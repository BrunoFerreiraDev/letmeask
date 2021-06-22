import { ButtonHTMLAttributes } from 'react'

import "../styles/button.scss"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>//usa as propriedade de um button

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />// espalhas os atributos ...prpps
        //sem pre que for inserir javascript dentro do html(jsx), sempre vai ser com {}
    )
}