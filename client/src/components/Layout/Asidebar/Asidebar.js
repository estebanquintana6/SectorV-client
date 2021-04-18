import React from 'react';

import './Asidebar.css';

const Asidebar = ({ children }) => {
    return (
        <aside className="principal_sidebar">
            {children}
        </aside>
    )
}

export default Asidebar;