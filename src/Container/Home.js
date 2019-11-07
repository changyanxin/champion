import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import All from './All'
import Jinghua from './Jinghua'
import Share from './Share'
import Tab from './Tab'
import Job from './Job'
import Dev from './Dev'
import Sider from './Sider'

import Content from '../Router/Content'
import Hooks from '../Router/Hooks'
export default class Home extends Component {
    render() {
        let {url} = this.props.match;
        console.log(this.props.match.url);
        return (
            <div>

                <div className="home">
                    <Link to={`${url}/all/:id`}>全部</Link>
                    <Link to={`${url}/jinghua`}>精华</Link>
                    <Link to={`${url}/share`}>分享</Link>
                    <Link to={`${url}/tab`}>问答</Link>
                    <Link to={`${url}/job`}>招聘</Link>
                    <Link to={`${url}/dev`}>客户端测试</Link>
                    
                </div>
                <div>
                    <Route path={url+'/all/:id'} component={All}/>
                    <Route path={url+'/jinghua'} component={Jinghua}/>
                    <Route path={url+'/share'} component={Share}/>
                    <Route path={url+'/tab'} component={Tab}/>
                    <Route path={url+'/job'} component={Job}/>
                    <Route path={url+'/dev'} component={Dev}/>
                    
                </div>
                <Sider/>
            </div>
        )
    }
}
