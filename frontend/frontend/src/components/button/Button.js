import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary', //primary button color
    'btn--outline'
]

const SIZE = [
    'btn--medium',
    'btn--large'
]

const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0] //checks if there's a style present else returns the 1st style

    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]

    return(
        <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} onClick={onClick} type={type}>
            {children}
        </button>
    )

}

export default Button;