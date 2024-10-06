import React from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Ciscologo from '../component/images/ciscologo.png'
import Fasset from '../component/images/fasset.png'
import ICB from '../component/images/ICB.png'
import MicSeta from '../component/images/MICT-seta_logo.png'
import Dapartment from '../component/images/department of education.png'
import ServicesSeta from '../component/images/servicesseta.jfif'
import QCTO from '../component/images/QCTO.JPG'

const Accreditions = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-headline py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-text mb-8">
  Our Accreditations
</h2>
            <Slider {...settings} className="max-w-4xl mx-auto">
                {[Ciscologo, Fasset, QCTO, ICB, MicSeta, Dapartment, ServicesSeta].map((logo, index) => (
                    <div key={index} className="px-4">
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-40">
                            <img src={logo} alt={`Accreditation ${index + 1}`} className="max-h-full max-w-full object-contain" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Accreditions;