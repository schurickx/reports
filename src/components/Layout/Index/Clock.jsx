import React, {useEffect, useState} from 'react';
import styles from './Clock.module.css'


const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        let clock = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(clock)
        };
    })

    const dateString = date.toLocaleDateString("ru", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });

    const timeString = date.toLocaleTimeString("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      });

    return (
        <div className={styles.clock}>
            <div>Сегодня {dateString}</div>
            <span>{timeString}</span>
        </div>
    );
};

export default Clock;