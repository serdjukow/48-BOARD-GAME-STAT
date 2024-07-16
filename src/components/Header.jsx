import { useEffect, useState } from 'react';
import { AnimatedCounter } from 'react-animated-counter';


const Header = ({ jackpot }) => {
    const [counterValue, setCounterValue] = useState(1000000);
    const [animate, setAnimate] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [updateKey, setUpdateKey] = useState(0);

    useEffect(() => {
        if (counterValue !== jackpot) {
            setCounterValue(jackpot > 1000000 ? jackpot : 1000000)
            setAnimate(true)
        }
    }, [jackpot])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setUpdateKey(prevKey => prevKey + 1);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (animate) {
            const timeout = setTimeout(() => setAnimate(false), 3000);

            return () => clearTimeout(timeout);
        }
    }, [animate]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setUpdateKey(prevKey => prevKey + 1);
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="app__header header">
            <div className={`header__jackpot-value ${animate ? 'animate' : ''}`}>
                <AnimatedCounter
                    key={`${windowWidth}-${updateKey}`}
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