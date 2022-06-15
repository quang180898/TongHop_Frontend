import React, { useState } from 'react';
import CardHeader from './CardHeader';

const CardWrap = ({ CardWrapClassName, isHeigth, title, childrenHeading, children, classNameBody = "", name_c = "" }) => {

    return (
        <div className={`card-wrap ${CardWrapClassName ? CardWrapClassName : ''}`} name-c={name_c}>
            <CardHeader title={title}>
                {childrenHeading}
            </CardHeader>
            <div className={"card square " + (isHeigth ? "h-100" : "")}>
                <div className={"card-body " + classNameBody}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CardWrap;