import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ru from "date-fns/locale/ru";
import styles from "./Date.module.css"


export default ({ input}) => {

    const [startDate, setStartDate] = useState(new Date());

    const onChange = date => {
        setStartDate(date)
        input.onChange(date.toLocaleDateString())
    }    

    return (
        <DatePicker className={styles.date} {...input} onChange={onChange}
            selected={startDate}
            dateFormat={"dd.MM.yyyy"}
            todayButton="Сегодня"
            locale={ru}
            showMonthDropdown
            showYearDropdown
            withPortal
            dateFormatCalendar="MMMM"
        />
    );
};
