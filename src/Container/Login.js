import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <form>
                    用户名<input className="input1" type="text" name="username"/>
                    <br/>
                    密&nbsp;&nbsp;&nbsp;&nbsp;码<input className="input2" type="password" name="pwd"/>
                    <br/>
                    <Link to="/home">
                    <span><button  className="method1">登录</button></span>&nbsp;&nbsp;
                    <span><button  className="method2">通过GitHub登录</button></span>&nbsp;&nbsp;
                    </Link>
                    <span>忘记密码了</span>
                </form>
            </div>
        )
    }
}
