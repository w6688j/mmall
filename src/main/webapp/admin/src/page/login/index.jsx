import React from 'react';

import User from 'service/user-service.jsx';
import './index.scss';

const _user = new User();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    // 当输入框发生改变
    onInputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    // 提交
    onSubmit(e) {
        _user.login({
            username: this.state.username,
            password: this.state.password
        }).then((res) => {

        }, (err) => {

        });
    }

    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - Medicine管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                       name="username"
                                       className="form-control"
                                       placeholder="请输入用户名"
                                       onChange={e => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                       name="password"
                                       className="form-control"
                                       placeholder="请输入密码"
                                       onChange={e => this.onInputChange(e)}
                                />
                            </div>
                            <button type="button"
                                    className="btn btn-md btn-primary btn-block"
                                    onClick={e => {
                                        this.onSubmit(e)
                                    }}>
                                登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Login;