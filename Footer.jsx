import React from "react";
import './index.css'



function Footer(){
    return(
        <>
        <section className="Main5" >
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-6 text-center">
                    <h4 className="text-center mt-3">
                        Software
                    </h4>
                    <img src="/img/pic_softw.png" className="w-25" />
                    
                </div>
                <div className="col-md-12 col-lg-6 text-center">
                    <h4  className="text-center mt-3">Contact Us:</h4>
                    <div className="col-md-12 col-lg-12 text-center">
                            
                            <h6 className="mt-2">Email : kharadesamiksha21@gmail.com </h6>
                                           
                                            
                            <h6 className="mt-2">Phone : +918425943717</h6>
                                            
                        </div>
                    </div>

                <div className="col-md-12 col-lg-12 text-center mt-4">
                    <p>Copyright @ 2024 Samiksha Kharade </p>
                </div>
            </div>
        </div>
        </section>

        
        </>
    )
}

export default Footer;