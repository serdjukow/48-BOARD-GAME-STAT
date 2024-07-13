import { useEffect, useState } from 'react';
import { AnimatedCounter } from 'react-animated-counter';


const Header = () => {
    const [counterValue, setCounterValue] = useState(1000000);
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            const randomAddition = Math.floor(Math.random() * 100) + 1;
            setCounterValue(prevCount => prevCount + randomAddition);
            setAnimate(true);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (animate) {
            const timeout = setTimeout(() => setAnimate(false), 3000);
            return () => clearTimeout(timeout);
        }
    }, [animate]);

    return (
        <div className="app__header header">
            <div className={`header__jackpot-value ${animate ? 'animate' : ''}`}>
                <AnimatedCounter
                    value={counterValue}
                    includeDecimals={false}
                    includeCommas={true}
                    fontSize={false}
                />
            </div>
        </div>
    )
}

export default Header;