import React from 'react';

import './PrincipalContent.css';

const PrincipalContent = ({ children }) => {
    return (
        <div className="principal_content">
            {children}
        </div>
    )
}

export default PrincipalContent;