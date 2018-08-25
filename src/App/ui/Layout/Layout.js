import React from 'react';
import style from './Layout.scss'

const Layout = (props) => {
    return(
        <div className={style.container}>
            <div className={style.experienceContainer}>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;