import React from 'react';
import img1 from '../../../Clients/+.png';
import img2 from '../../../Clients/1-1-200x100-1.png';
import img3 from '../../../Clients/2-200x100-1.png';
import img4 from '../../../Clients/3-200x100-1.png';
import img5 from '../../../Clients/Chilis.png';
import img6 from '../../../Clients/Dekchi.png';
import img7 from '../../../Clients/Dentist.png';
import img8 from '../../../Clients/Doors-200x100-1.png';
import img9 from '../../../Clients/Eden.png';
import img10 from '../../../Clients/Fehi.png';
import img11 from '../../../Clients/Galitos_Logo_Stacked_FullCol.png';
import img12 from '../../../Clients/Gelatisimo logo.png';
import img13 from '../../../Clients/Guardian Chambers.png';
import img14 from '../../../Clients/LOGO-DEkchi.png';
import img15 from '../../../Clients/Lakeshore_logo.png';
import img16 from '../../../Clients/Logo Gold.png';
import img17 from '../../../Clients/Logo-Output_Bowling.png';
import img18 from '../../../Clients/Peugeot-Brand-Logo-CMJN-WBG.png';
import img19 from '../../../Clients/Rabbithole.png';
import img20 from '../../../Clients/SC Progress.png';
import img21 from '../../../Clients/SLi.png';
import img22 from '../../../Clients/Santoor.png';
import img23 from '../../../Clients/Shawarma House.png';
import img24 from '../../../Clients/SwissContact.png';
import img25 from '../../../Clients/Volvo-Iron-Mark-White.png';
import img26 from '../../../Clients/gazi.png';
import img27 from '../../../Clients/securitas.png';
import img28 from '../../../Clients/stand.png';
import img29 from '../../../Clients/total care.png';
import './Client.css';

const Client = () => {
    // var myIndex = 0;
    // carousel();

    // function carousel() {
    //     var i;
    //     var x = document.getElementsByClassName("mySlides");
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     myIndex++;
    //     if (myIndex > x.length) { myIndex = 1 }
    //     x[myIndex - 1].style.display = "block";
    //     setTimeout(carousel, 2000); // Change image every 2 seconds
    // }
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    return (
        <section className='my-5'>
            <h1 className="text-center text-4xl font-medium">OUR CLIENT</h1>
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nihil facilis reiciendis officiis <br />
                consectetur reprehenderit eveniet, blanditiis illo exercitationem possimus?</p>


            {/* <div className="try">
                <img className="mySlides" src={img1} alt='' />
                <img className="mySlides" src={img2} alt='' />
                <img className="mySlides" src={img3} alt='' />
                <img className="mySlides" src={img4} alt='' />
            </div> */}

            <div className='mt-8 ml-24'>
                <div className="carousel w-full h-40 try">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} alt='' className="w-24 h-16 mySlides" />
                        <img src={img2} alt='' className="w-24 h-16 ml-5 mySlides" />
                        <img src={img3} alt='' className="w-24 h-16 mySlides" />
                        <img src={img4} alt='' className="w-24 h-16 mySlides" />
                        <img src={img5} alt='' className="w-24 h-16 mySlides" />
                    </div>
                    <div className="w-full">
                        <img src={img6} alt='' className="w-60 h-32 mySlides" />
                        <img src={img7} alt='' className="w-60 h-32 mySlides" />
                        <img src={img8} alt='' className="w-60 h-32 mySlides" />
                        <img src={img9} alt='' className="w-60 h-32 mySlides" />
                        <img src={img10} alt='' className="w-60 h-32 mySlides" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={img11} alt='' className="w-60 h-32 mySlides" />
                        <img src={img12} alt='' className="w-60 h-32 mySlides" />
                        <img src={img13} alt='' className="w-60 h-32 mySlides" />
                        <img src={img14} alt='' className="w-60 h-32 mySlides" />
                        <img src={img15} alt='' className="w-60 h-32 mySlides" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={img16} alt='' className="w-60 h-32 mySlides" />
                        <img src={img17} alt='' className="w-60 h-32 mySlides" />
                        <img src={img18} alt='' className="w-60 h-32 mySlides" />
                        <img src={img19} alt='' className="w-60 h-32 mySlides" />
                        <img src={img20} alt='' className="w-60 h-32 mySlides" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={img21} alt='' className="w-60 h-32 mySlides" />
                        <img src={img22} alt='' className="w-60 h-32 mySlides" />
                        <img src={img23} alt='' className="w-60 h-32 mySlides" />
                        <img src={img24} alt='' className="w-60 h-32 mySlides" />
                        <img src={img25} alt='' className="w-60 h-32 mySlides" />
                    </div>
                    <div id="item6" className="carousel-item w-full">
                        <img src={img26} alt='' className="w-60 h-32 mySlides" />
                        <img src={img27} alt='' className="w-60 h-32 mySlides" />
                        <img src={img28} alt='' className="w-60 h-32 mySlides" />
                        <img src={img29} alt='' className="w-60 h-32 mySlides" />
                        <img src={img20} alt='' className="w-60 h-32 mySlides" />
                    </div>
                </div>
                {/* <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                    <a href="#item6" className="btn btn-xs">6</a>
                </div> */}
            </div>
            {/* style={{ width: "100%", display: "none" }} */}

        </section >
    );
};

export default Client;