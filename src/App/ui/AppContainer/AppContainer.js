import React from 'react';
import style from './AppContainer.scss';

const AppContainer = (props) => {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}

export default AppContainer;