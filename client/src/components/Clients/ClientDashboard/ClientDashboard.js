import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import Aside from '../../Layout/Asidebar';
import PrincipalContent from '../../Layout/PrincipalContent';

import ClientView from '../ClientView';
import ClientForm from '../ClientForm';

import swal from '@sweetalert/with-react';

import dummyNames from '../../../utils/dummy/names.json';

import './ClientDashboard.css';

const ClientDashboard = () => {

    const dispatch = useDispatch();

    const [clients, setClients] = useState(dummyNames);
    const [filtered, setFiltered] = useState(dummyNames);

    const [selected, setSelected] = useState(undefined);

    const handleSearch = (e) => {
        const searchText = e.target.value;

        if (searchText != "") {
            setFiltered(
                clients.filter(({ name }) => name.includes(searchText))
            )
        } else { setFiltered(clients) }
    }

    const handleSelection = (selected) => {
        setSelected(selected);
    }

    const openRegisterModal = () => {
        swal({
            title: 'Registro de alumno',
            content: <ClientForm dispatch={dispatch} />,
            className: 'swal-wide',
            buttons: false
        });
    }

    return (
        <React.Fragment>
            <Aside>

                <div className="sidebar__nav">
                    <span className="sidebar__nav-item" onClick={openRegisterModal}>
                        <img className="icon icons8-Plus-Math" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWUlEQVRYR+2WMQoAIAgA9f+PrsWmEMQSEa7Z8rzEUmle2pxfABhvYFkPpQtJb7TEAGAAAxgoM3AO/v1YXoPPm4TtANHKy64AAAxgAANjDERB3bjXXzEA8w1s3k4WIU0YaEoAAAAASUVORK5CYII=" />
                    </span>
                </div>

                <h2 className="sidebar__heading">Alumnos</h2>
                <h3 className="sidebar__subheading">Registro de alumnos</h3>

                <div className="search-wrapper">
                    <input
                        type="text"
                        id="searchfield"
                        placeholder="Buscar..."
                        onChange={handleSearch} />
                </div>

                <div className="client-list-container">
                    <ul className="client__list">
                        {filtered.map((client) =>
                            <li
                                className="client__list-item"
                                onClick={() => handleSelection(client)}>
                                {client.name}
                            </li>
                        )}
                    </ul>
                </div>
            </Aside>

            <PrincipalContent>
                {selected != undefined &&
                    <ClientView client={selected} />
                }
            </PrincipalContent>

        </React.Fragment>
    )
}

export default ClientDashboard;