import React from 'react'
import '../css/Widget.css';
import WidgetOptions from './WidgetOptions';



function Widget() {
    return (
        <div className='widget'>
        <div className='widget__header'>
            <h3>Explore</h3>
        </div>
            <WidgetOptions />
        </div>
    )
}

export default Widget
