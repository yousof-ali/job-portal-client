import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CateCard from '../../Components/CateCard'



const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(result => {
                setCategories(result)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className=' bg-blue-50 py-12'>
            <div className='pb-4'>
                <h2 className='text-3xl text-center pb-2 font-bold'>Browse by category</h2>
                <p className='text-center'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
            <div className="slider-container mx-8 py-2">
                <Slider {...settings}>  
                    {
                        categories.map((item,indx) => <CateCard key={indx} data={item}></CateCard> )
                    }                
              
                </Slider>
            </div>
        </div>
    );
};

export default Categories;