import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthData, toggleIsLogined } from '../../redux/auth-reducer';
import axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    this.props.setAuthData(email, id, login)
                    this.props.toggleIsLogined();
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = state => ({
    isLogined: state.auth.isLogined,
    login: state.auth.login,
    email: state.auth.email

});

let dispatches = {
    setAuthData,
    toggleIsLogined,
}


export default connect(mapStateToProps, dispatches)(HeaderContainer);
