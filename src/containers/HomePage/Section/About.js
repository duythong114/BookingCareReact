import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss'

// import MedicalFacilityImg from "../../../assets/medicalFacility/benh-vien.jpg"

class About extends Component {

    render() {

        return (
            <div className='section-about'>
                <div className='section-container'>
                    <div className='section-title-footer section-header'>
                        <div className='header-title'>Truyền thông nói về BookingCare</div>
                    </div>
                    <div className='section-content-footer'>
                        <div className='content-video'>
                            <iframe
                                width="588"
                                height="330"
                                src="https://www.youtube.com/embed/FyDQljKtWnI"
                                title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
