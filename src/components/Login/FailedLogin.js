import React from 'react';
import styles from './FailedLogin.module.css'

const FailedLogin = ({message}) => {
    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorModal}>
                <div className={styles.text}>
                    {message}
              </div>              
            </div>
        </div>
    );
};

export default FailedLogin;