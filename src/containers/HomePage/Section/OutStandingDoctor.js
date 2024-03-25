import React, { Component } from 'react';
import { connect } from 'react-redux';
import './OutStandingDoctor.scss'
import Slider from "react-slick";

// import OutStandingDoctorImg from "../../../assets/outStandingDoctor/doctor.jpg"
// import OutStandingDoctorImg from "../../../assets/outStandingDoctor/doctor.png"

class OutStandingDoctor extends Component {

    render() {

        return (
            <div className='section-outstanding-doctor'>
                <div className='section-container section-container-outstanding-doctor'>
                    <div className='section-header'>
                        <span className='header-title'>Bác sĩ nổi bật tuần qua</span>
                        <button className='header-btn'><span>Xem thêm</span></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background outstanding-doctor-img'></div>
                                    <div className='img-content'>
                                        <div className='doctor-info'>Tiến sĩ: Duy Thống</div>
                                        <div className='doctor-role'> khoa hô hấp 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background outstanding-doctor-img'></div>
                                    <div className='img-content'>
                                        <div className='doctor-info'>Tiến sĩ: Duy Thống</div>
                                        <div className='doctor-role'> khoa hô hấp 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background outstanding-doctor-img'></div>
                                    <div className='img-content'>
                                        <div className='doctor-info'>Tiến sĩ: Duy Thống</div>
                                        <div className='doctor-role'> khoa hô hấp 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background outstanding-doctor-img'></div>
                                    <div className='img-content'>
                                        <div className='doctor-info'>Tiến sĩ: Duy Thống</div>
                                        <div className='doctor-role'> khoa hô hấp 4</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background outstanding-doctor-img'></div>
                                    <div className='img-content'>
                                        <div className='doctor-info'>Tiến sĩ: Duy Thống</div>
                                        <div className='doctor-role'> khoa hô hấp 5</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background outstanding-doctor-img'></div>
                                    <div className='img-content'>
                                        <div className='doctor-info'>Tiến sĩ: Duy Thống</div>
                                        <div className='doctor-role'> khoa hô hấp 6</div>
                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
