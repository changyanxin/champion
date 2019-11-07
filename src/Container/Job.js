import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Job extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json()) 
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        })
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id == this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json()) 
            .then((res)=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>{
                        if(item.tab == 'ask'){
                            return(
                            <div style={{height:'40px',overflow:'hidden',borderBottom:'1px solid gray'}} key={item.id}>
                                <span><img style={{width:'35px',height:'35px'}} src={item.author.avatar_url}/></span>&nbsp;&nbsp;
                                <span style={{color:'green'}}>{item.reply_count}</span>
                                <span style={{fontSize:'5px'}}>{item.visit_count}</span>&nbsp;&nbsp;
                                <span style={{color:'green',fontSize:'5px'}}>招聘</span>
                                <span><Link activeStyle={{fontSize:'10px'}} to='/content'>{item.title}</Link></span>
                                <div style={{float:'right'}}>
                                    <span><img style={{width:'35px',height:'35px'}} src={item.author.avatar_url}/></span>
                                    <span>1天前</span>
                                </div>
                                {/* <div dangerouslySetInnerHTML={{__html:item.content}}></div> */}
                            </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}
