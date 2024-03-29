import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';

import Slider from "react-slick";

// import SpecialtyImg from "../../../assets/specialty/co-xuong-khop.png"


class Specialty extends Component {

    render() {

        return (
            <div className='section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='header-title'>Chuyên khoa phổ biến</span>
                        <button className='header-btn'><span>Xem thêm</span></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background specialty-img'></div>
                                    <div className='img-content'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background specialty-img'></div>
                                    <div className='img-content'>Cơ xương khớp 2</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background specialty-img'></div>
                                    <div className='img-content'>Cơ xương khớp 3</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background specialty-img'></div>
                                    <div className='img-content'>Cơ xương khớp 4</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background specialty-img'></div>
                                    <div className='img-content'>Cơ xương khớp 5</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background specialty-img'></div>
                                    <div className='img-content'>Cơ xương khớp 6</div>
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
