import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addPost, changePostText, setCurrentProfile } from "../../redux/profile-reducer";
import { toggleIsFetching } from "../../redux/users-reducer";
import Preloader from "../Preloader/Preloader";
import Profile from "./Profile";
import { profileApi } from './../../api/profileApi';



class ProfileContainer extends React.Component {
    
    componentDidMount() {
        this.props.toggleIsFetching();

        let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;

        profileApi.getProfileData(userId)
            .then(data => {
                this.props.toggleIsFetching();
                this.props.setCurrentProfile(data);
            });
    }

    render() {
        return !this.props.currentProfile ? <Preloader /> : <Profile {...this.props} />
    }
};


let mapStateToProps = state => ({
    postsData: state.profile.postsData,
    profile: state.profile.profile,
    newText: state.profile.newText,
    currentProfile: state.profile.currentProfile,
    isFetching: state.users.isFetching,
});

let dispatchObject = {
    addPost,
    changePostText,
    setCurrentProfile,
    toggleIsFetching,
};

export default connect(mapStateToProps, dispatchObject)(withRouter(ProfileContainer));
