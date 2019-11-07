import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import {NavLink} from 'react-router-dom'
import {All} from './All'

export default class Sider extends Component {
    render() {
        let style = {float:'left'}
        return (
            <div>
                <ul className="footer">
                    {   
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <li key={item}>
                                <Link 
                                to={'/home/all/'+item}>
                                    {item}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}
