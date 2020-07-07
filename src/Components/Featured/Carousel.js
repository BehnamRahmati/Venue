import React, { Component } from 'react'

import Slider from "react-slick"
import slideOne from "../../resources/images/slide_one.jpg"
import slideTwo from "../../resources/images/slide_two.jpg"
import slideThree from "../../resources/images/slide_three.jpg"

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
    }
    const carousel = {
      height: `${window.innerHeight}px`
    }
    return (
      <div style={carousel} className="carrousel_wrapper">
        <Slider {...settings}>
          <div>
            <div className="carrousel_image" style={{ background: `url(${slideOne})center/cover no-repeat`, height: `${window.innerHeight}px` }}></div>
          </div>
          <div>
            <div className="carrousel_image" style={{ background: `url(${slideTwo})center/cover no-repeat`, height: `${window.innerHeight}px` }}></div>
          </div>
          <div>
            <div className="carrousel_image" style={{ background: `url(${slideThree})center/cover no-repeat`, height: `${window.innerHeight}px` }}></div>
          </div>
        </Slider>
      </div>
    )
  }
}
