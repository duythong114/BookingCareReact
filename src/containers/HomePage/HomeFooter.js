import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss'


// import MedicalFacilityImg from "../../../assets/medicalFacility/benh-vien.jpg"

class HomeFooter extends Component {

    render() {

        return (
            <div className='section-home-footer'>
                <div className="map-footer">
                </div>

                <div className='home-footer'>
                    <div className="social-list">
                        <a href='/#'><i className="fab fa-facebook"></i></a>
                        <a href='/#'><i className="fab fa-instagram"></i></a>
                        <a href='/#'><i className="fab fa-youtube"></i></a>
                        <a href='/#'><i className="fab fa-twitter"></i></a>
                        <a href='/#'><i className="fab fa-linkedin"></i></a>
                        <a href='/#'><i className="fab fa-pinterest-p"></i></a>
                    </div>
                    <div className="copyright">
                        &copy; 2024
                        <a
                            href="https://bookingcare.vn/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Bookingcare.vn
                        </a>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
