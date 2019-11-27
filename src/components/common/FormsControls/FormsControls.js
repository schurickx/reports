import React from 'react';
import styles from './FormsControls.module.css'

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} className={styles.input} />
    </FormControl>
};

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
};
export const Select = (props) => {
    const { input, meta, data, label, ...restProps } = props;
    return <FormControl {...props}>
        <select className={styles.select} {...input} {...restProps}>
            <option value="">{label}</option>
            {data.map(({ id, value }) => <option key={id} value={id}>{value}</option>)}
        </select>
    </FormControl>
};



const FormControl = ({ input, meta: { touched, error }, children, ...props }) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
};

