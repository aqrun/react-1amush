import React from 'react'
import { Link } from 'react-router-dom'
import {Map} from 'immutable'
import PropTypes from 'prop-types'
import { generateIcon } from '../../icons'
//import boatUrl, { ReactComponent as BoatSvg } from '../../icons/boat.svg'
//import BoatSvg from '../../icons/boat.svg'
import './style.scss'


export default function Navigation(props)
{
    function generateItem(item){
        const Icon = generateIcon(item.icon)
        return(
        <li key={'m_' + item.id}>
            <Link to={item.url} key={item.id}>
                <span className="faw"><Icon /></span>
                <span className="tx">{item.name}</span>
            </Link>
        </li>
        )
    }

    return(
        <div className="navigation">
            <ul>
                {props.routes.map(item => generateItem(item))}
            </ul>
        </div>
    )
}

Navigation.propTypes = {
    routes: PropTypes.object
}