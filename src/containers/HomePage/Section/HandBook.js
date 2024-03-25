import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HandBook.scss'
import Slider from "react-slick";

// import MedicalFacilityImg from "../../../assets/medicalFacility/benh-vien.jpg"

class HandBook extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 2,
            slidesToScroll: 1
        };

        return (
            <div className='section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='header-title'>Cẩm nang</span>
                        <button className='header-btn'><span>Xem thêm</span></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background handbook-img'></div>
                                    <div className='img-content'>Bài viết 1</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background handbook-img'></div>
                                    <div className='img-content'>Bài viết 2</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background handbook-img'></div>
                                    <div className='img-content'>Bài viết 3</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background handbook-img'></div>
                                    <div className='img-content'>Bài viết 4</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background handbook-img'></div>
                                    <div className='img-content'>Bài viết 5</div>
                                </div>
                            </div>
                            <div className='img-container px-3'>
                                <div className='img-customize'>
                                    <div className='img-background handbook-img'></div>
                                    <div className='img-content'>Bài viết 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
