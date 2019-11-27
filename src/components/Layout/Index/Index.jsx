import React from 'react';
import cn from 'classnames';
import styles from './Index.module.css'
import Clock from './Clock';


const Index = () => {
    return (
        <div className={cn ('main', styles.head)} >
            <Clock/>
        </div>
    );
};

export default Index;