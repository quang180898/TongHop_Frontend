import React, { useState } from 'react';

const CardHeader = ({ classHeading = "m_heading", title, strongName, children }) => {

    return (
        <div className={classHeading}>
            <button className="m_button no-event">
                <span>{title}{strongName ? <> - <strong class="uni_star_e94c4c">{strongName}</strong> </> : ""}</span>
            </button>
            {children}
        </div>
    );
}

export default CardHeader;
