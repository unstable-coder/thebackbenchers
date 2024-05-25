import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

const Testimonials = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 2,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    const backgroundColors = [
        "bg-color-1",
        "bg-color-2",
        "bg-color-3",
        "bg-color-4",
        "bg-color-5"
    ];
  return (
    <>
      <div className="container">
        <div className="wrapper my-4 py-4">
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((key, index) => (
                        <div key={index} className={`wrapper-cards rounded-3 ${backgroundColors[index % backgroundColors.length]}`}>
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4">
                                    <div className="wrapper-img p-2 d-flex justify-content-center">
                                        <img src={key.img} alt="user img" loading='lazy' className='img-fluid rounded-circle' />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <div className="wrapper-data p-2">
                                        <p className='mb-1 text-white'>{key.review}</p>
                                        <p className='fw-semibold text-white'>{key.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials;

const data = [
    {
        name: 'Demo Name1',
        img: 'src/assets/logo/demo.jpeg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quaerat natus ab qui earum libero impedit voluptatum! Qui, pariatur officia'
    },
    {
        name: 'Demo Name2',
        img: 'src/assets/logo/demo.jpeg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quaerat natus ab qui earum libero impedit voluptatum! Qui, pariatur officia'
    },
    {
        name: 'Demo Name3',
        img: 'src/assets/logo/demo.jpeg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quaerat natus ab qui earum libero impedit voluptatum! Qui, pariatur officia'
    },
    {
        name: 'Demo Name4',
        img: 'src/assets/logo/demo.jpeg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quaerat natus ab qui earum libero impedit voluptatum! Qui, pariatur officia'
    },
    {
        name: 'Demo Name5',
        img: 'src/assets/logo/demo.jpeg',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quaerat natus ab qui earum libero impedit voluptatum! Qui, pariatur officia'
    }
]
