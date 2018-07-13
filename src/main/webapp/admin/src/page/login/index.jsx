import React from 'react';

import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import './index.scss';

const _mm = new MUtil();
const _user = new User();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        };
    }

    componentWillMount() {
        document.title = '登录 - Medicine';
    }

    // 当输入框发生改变
    onInputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit();
        }
    }

    // 提交
    onSubmit() {
        let loginInfo = {
                username: this.state.username,
                password: this.state.password
            },
            checkResult = _user.checkLoginInfo(loginInfo);

        // 验证通过
        if (checkResult.status) {
            _user.login(loginInfo).then((res) => {
                _mm.setStorage('userInfo', res);
                this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            });
        }
        // 验证失败
        else {
            _mm.errorTips(checkResult.msg);
        }
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
                                       onKeyUp={e => this.onInputKeyUp(e)}
                                       onChange={e => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                       name="password"
                                       className="form-control"
                                       placeholder="请输入密码"
                                       onKeyUp={e => this.onInputKeyUp(e)}
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