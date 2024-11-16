import React from 'react';
import "./button.css";

interface ButtonProps {
    name: string;
}

const ButtonIITB: React.FC<ButtonProps> = ({ name }) => {
    return (
        <button className='button'>
            {name}
        </button>
    );
};

export default ButtonIITB;
