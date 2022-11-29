import s from "./Button.module.css"


const Button = ({text,color,callback}) => {

    return (
        <button
            className={s.btn + " "  + s[color]}
            onClick={() => {
                callback()
            }}
        >{text}</button>
    )
}

export default Button