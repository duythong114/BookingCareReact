import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import Slider from "react-slick";

// import MedicalFacilityImg from "../../../assets/medicalFacility/benh-vien.jpg"

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='header-title'>Cơ sở y tế nổi bật</span>
                        <button className='header-btn'><span>Xem thêm</span></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background medical-facility-img'></div>
                                    <div className='img-content'>Bệnh viện 1</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background medical-facility-img'></div>
                                    <div className='img-content'>Bệnh viện 2</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background medical-facility-img'></div>
                                    <div className='img-content'>Bệnh viện 3</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background medical-facility-img'></div>
                                    <div className='img-content'>Bệnh viện 4</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background medical-facility-img'></div>
                                    <div className='img-content'>Bệnh viện 5</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background medical-facility-img'></div>
                                    <div className='img-content'>Bệnh viện 6</div>
                                </div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
