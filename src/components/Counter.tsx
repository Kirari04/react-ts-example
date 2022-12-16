import { FC, useEffect, useState } from "react";

interface Props {
    button: string;
    message: string
}

export const Counter: FC<Props> = ({ button, message }) => {
    let storedCount = localStorage.getItem('storedCount');
    const [count, setCount] = useState(storedCount?parseInt(storedCount):0);

    function increaseCount() {
        storedCount = localStorage.getItem('storedCount');
        let newCount = (storedCount?parseInt(storedCount):count) + 1;
        setCount(newCount)
        localStorage.setItem('storedCount', newCount.toString())
    }

    let interval = setInterval(() => {
        storedCount = localStorage.getItem('storedCount');
        let newCount = (storedCount?parseInt(storedCount):count);
        setCount(newCount)
    }, 100)

    useEffect(() => {
        return () => {
            clearInterval(interval)
        };
    });

    return (
        <section>
            <p className="msg">{message}</p>
            <p className="counter">{count}</p>
            <button className="button" onClick={increaseCount} onContextMenu={e => e.preventDefault()}>{button}</button>
        </section>
    )
};
