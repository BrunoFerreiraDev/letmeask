import { ButtonHTMLAttributes } from 'react'

import "../styles/button.scss"

//usa as propriedade de um button
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
    return (
        <button className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props}
        />// espalhas os atributos ...prpps
        //sem pre que for inserir javascript dentro do html(jsx), sempre vai ser com {}
    )
}