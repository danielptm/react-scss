import React from 'react';
import style from './Dropdown.scss';


class Dropdown extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            openDrawer: false,
            filter: props.filter
        }
    }

    categories = [
        'Frontend',
        'Backend',
        'Tools',
        'Other'
    ];

    filter = (cat) => {
        let filter = '';
        switch(cat) {
            case this.categories[0]:
                filter = 'FE';
                break;
            case this.categories[1]:
                filter = 'BE';
                break;
            case this.categories[2]:
                filter = 'tools';
                break;
            case this.categories[3]:
                filter = 'other'
                break;
            default:
                filter = 'all';
                break;
        }

        this.state.filter('FE');
    }

    openDrawer = () => {
        this.setState({
            openDrawer: ! this.state.openDrawer
        })
    }

    render() {
        return (
            <div className={style.container}>
                <button
                    onClick={() => this.openDrawer() }
                    className={style.button}>Filter</button>
                <div className={style.dropDown}>
                    { this.state.openDrawer
                        ? this.categories.map((cat, index) => <div key={index} onClick={() => this.filter('FE')} className={style.item}>{cat}</div>)
                        : null
                    }
                </div>
            </div>
        )
    }
}

export default Dropdown;