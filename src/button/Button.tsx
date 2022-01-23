import React, { CSSProperties } from 'react';
import { colorMapping } from '../foundation/colors';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    types?: 'primary' | 'secondary' | 'tertiary' | 'destructive'
}

export const Button = (props: IButtonProps) => {
    const style: CSSProperties  = {
        background: colorMapping.red060Color
    };

    return (
        <button {...props} style={style}></button>
    )
}
