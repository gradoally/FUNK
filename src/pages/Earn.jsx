import React, {  useState } from 'react';
import DownAnimation from '../components/DownAnimation';
import Logo from '../components/Logo';

function Earn({ setPage }) {
    const [animations, setAnimations] = useState([]);

    const handleClick = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        setAnimations((prevAnimations) => [...prevAnimations, { x, y }]);
    };
    return (
        <div className="earn_screen">
            <div className="up">
                <Logo />
            </div>
            <div className="down" onClick={handleClick}>
                {animations.map((value, idx) => (
                    <DownAnimation x={value.x} y={value.y} key={idx} />
                ))}
            </div>
        </div>
    );
}

export default Earn;