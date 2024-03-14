import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SpecialtyImg from "../../../assets/specialty/co-xuong-khop.png"


class Specialty extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div className='section-specialty'>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='header-title'>Chuyên khoa phổ biến</span>
                        <button className='header-btn'><span>Xem thêm</span></button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 2</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 3</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 4</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 5</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 6</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='header-title'>Chuyên khoa phổ biến</span>
                        <button className='header-btn'><span>Xem thêm</span></button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...settings}>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 1</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 2</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 3</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 4</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
                                    <div className='img-content'>Cơ xương khớp 5</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <img src={SpecialtyImg} alt={"SpecialtyImg"} />
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
