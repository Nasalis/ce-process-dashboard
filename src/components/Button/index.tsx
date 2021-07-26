import {
    Button,
    ButtonProps
} from 'antd'

import style from './style.module.scss'

type Props = ButtonProps & {
    text: string,
    width: string,
    action?: () => void;
}

export function GeneralButton({text, width, action, ...rest}: Props) {
    return (
        <Button 
            className={style.buttonContainer}
            style={{width}}
            onClick={action}
            {...rest}
        >
            {text}
        </Button>
    );
}