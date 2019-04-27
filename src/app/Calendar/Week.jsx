import React from 'react';
import styles from './index.scss';
import Day from "./Day";

export default class Week extends React.PureComponent {
    onClickDay(day) {
        const {current, date} = day;
        if (!current) {
            if (date.getMonth() < this.props.current.month) {
                this.props.onClickPrev();
            } else {
                this.props.onClickNext();
            }
        }
    }
    returnWeeks(week) {
        if (Array.isArray(week) && week.length) {
            return week.map((day, i) => {
                return (
                    <Day
                        key={i}
                        date={day.date}
                        current={day.current}
                        onClickDay={() => this.onClickDay(day)}
                    />
                );
            });
        }
    }

    render() {
        return (
            <div className={styles.weekRow}>
                {this.returnWeeks(this.props.week)}
            </div>
        )
    }
}