import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';

class HomePage extends Component {

    render() {

        return (
            <Fragment>
                <HomeHeader />
                <Specialty />
                <div style={{ height: "300px" }}></div>
            </Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
