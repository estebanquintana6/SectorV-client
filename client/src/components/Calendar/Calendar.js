import React, { useEffect, useState } from 'react';

import { monthsSpanish, weekDaysSpanish } from '../../utils/dates/dateNames';

import Asidebar from '../Layout/Asidebar';
import PrincipalContent from '../Layout/PrincipalContent';

import './Calendar.css';

const Calendar = () => {
    const today = new Date();

    const [month, setMonth] = useState(() => {
        return today.getMonth();
    });

    const [year, setYear] = useState(() => {
        return today.getFullYear();
    });


    const [prevInactiveDays, setPrevInactiveDays] = useState([]);
    const [activeDays, setActiveDays] = useState([]);

    const [selectedDay, setSelectedDay] = useState(new Date());

    const getPrevInactiveDays = () => {
        const firstDay = new Date(year, month, 1);
        const firstDayweek = firstDay.getDay();

        const previousDaysOfMonth = [];

        if (firstDayweek != 0) {

            for (let i = firstDayweek; i > 0; i--) {
                let auxDate = new Date(year, month, 1);
                const day = new Date(auxDate.setDate(auxDate.getDate() - i));

                previousDaysOfMonth.push(
                    <div className="calendar__day inactive" id={`${day.toYYMMdd()}`}>
                        <span
                            className="calendar__date"
                            onClick={() => selectedDayHandler(day)}
                        >{day.getDate()}</span>
                    </div>
                )

            }
        }

        setPrevInactiveDays(previousDaysOfMonth);
    }

    const getDays = () => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const lastDayWeekDay = lastDay.getDay();

        let missingAfterDays = 0;
        if (lastDayWeekDay != 6) missingAfterDays = 6 - lastDayWeekDay;
        const activeDays = [];

        for (let i = 0; i < lastDay.getDate() + missingAfterDays; i++) {
            const day = new Date(firstDay.getTime() + (i * 86400000));

            const weekOfMonth = day.getWeekOfMonth();

            if (day.getMonth() > firstDay.getMonth()) {
                activeDays[activeDays.length - 1].push(
                    <div
                        className="calendar__day inactive"
                        id={`${day.toYYMMdd()}`}>
                        <span
                            className="calendar__date"
                            onClick={() => selectedDayHandler(day)}>
                            {day.getDate()}
                        </span>
                    </div>
                )
            }
            else if (activeDays[weekOfMonth]) {
                activeDays[weekOfMonth].push(
                    <div
                        className="calendar__day"
                        id={`${day.toYYMMdd()}`}>
                        <span
                            className="calendar__date"
                            onClick={() => selectedDayHandler(day)}>
                            {day.getDate()}
                        </span>
                        {/* <span className="calendar__task">2</span> */}
                    </div>
                )
            } else {
                activeDays[weekOfMonth] = [
                    <div
                        className="calendar__day"
                        onClick={() => selectedDayHandler(day)}
                        id={`${day.toYYMMdd()}`}>
                        <span
                            className="calendar__date"
                            onClick={() => selectedDayHandler(day)}>
                            {day.getDate()}
                        </span>
                        {/* <span className="calendar__task">2</span> */}
                    </div>
                ]
            }
        }
        setActiveDays(activeDays);
    }

    const selectedDayHandler = (day) => {
        setSelectedDay(day);
    }

    const changeActiveState = () => {
        const toRemove = document.querySelectorAll(".active_day");
        for (let i = 0; i < toRemove.length; i++) {
            toRemove[i].classList.remove('active_day')
        }

        const activeElem = document.getElementById(selectedDay.toYYMMdd());
        if (activeElem) activeElem.classList.add('active_day');
    }


    useEffect(() => {
        getPrevInactiveDays();
        getDays();
    }, [month, year]);

    useEffect(() => {
        changeActiveState();
    }, [selectedDay]);


    return (
        <React.Fragment>
            <Asidebar>

                <div className="sidebar__nav">
                    <span className="sidebar__nav-item"><img className="icon icons8-Plus-Math" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWUlEQVRYR+2WMQoAIAgA9f+PrsWmEMQSEa7Z8rzEUmle2pxfABhvYFkPpQtJb7TEAGAAAxgoM3AO/v1YXoPPm4TtANHKy64AAAxgAANjDERB3bjXXzEA8w1s3k4WIU0YaEoAAAAASUVORK5CYII=" /></span>
                    <div className="date-pickers">
                        <span className="title-bar__year">{year}</span>
                        <span className="title-bar__month">{monthsSpanish[month]}</span>
                    </div>
                </div>

                <h2 className="sidebar__heading">
                    {weekDaysSpanish[selectedDay.getDay()]}<br />
                </h2>

                <h3 className="sidebar__subheading">
                    {selectedDay.getDate()} de {monthsSpanish[selectedDay.getMonth()]}
                </h3>


                <ul className="sidebar__list">
                    <li className="sidebar__list-item sidebar__list-item--complete"><span className="list-item__time">8.30</span> Team Meeting</li>
                    <li className="sidebar__list-item sidebar__list-item--complete"><span className="list-item__time">10.00</span> Lunch with Sasha</li>
                    <li className="sidebar__list-item"><span className="list-item__time">2.30</span> Design Review</li>
                    <li className="sidebar__list-item"><span className="list-item__time">4.00</span> Get Groceries</li>
                </ul>
            </Asidebar>


            <PrincipalContent>
                <section className="calendar__top-bar">
                    <span className="top-bar__days">Dom</span>
                    <span className="top-bar__days">Lun</span>
                    <span className="top-bar__days">Mar</span>
                    <span className="top-bar__days">Mier</span>
                    <span className="top-bar__days">Jue</span>
                    <span className="top-bar__days">Vie</span>
                    <span className="top-bar__days">Sab</span>
                </section>
                {activeDays.map((week, index) =>
                    <section className="calendar__week">
                        {index === 0 ? (prevInactiveDays) : <React.Fragment />}
                        {week}
                    </section>
                )
                }
            </PrincipalContent>


        </React.Fragment >
    );
};

export default Calendar;
