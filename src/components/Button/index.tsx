import {
    Button,
    ButtonProps
} from 'antd'

import style from './style.module.scss'

type Props = ButtonProps & {
    text: string,
    width: string,
}

export function GeneralButton({text, width, ...rest}: Props) {
    return (
        <Button 
            className={style.buttonContainer}
            style={{width}}
            {...rest}
        >
            {text}
        </Button>
    );
}