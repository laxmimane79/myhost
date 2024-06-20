import React from "react";
import './index.css'



function Home(){
    return(
        <>
        <section>
            <div>
                <img src="/img/pic_back3.jpg" className="w-100" />
            </div>
        </section>

        <section className="Main2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h1 className="mb-3">About Me</h1>
                        <h6 className="mb-4">My self  <span style={{"color":"red"}}> SAMIKSHA DADASAHEB KHARADE</span>. I'm a college student, studying Bachelor Of Accounting & Finance. I'm a highly creative and innovative approach to idea and also concept development Fresher Graphic Designer. I believe that my design created can connect well with your audience</h6>
                    </div>
                </div>
            </div>
        </section>

        <section className="Main3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center" >
                        <h1 className="mb-3">Education Details</h1>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <img src="/img/pic9.png" className="w-100" />
                    </div>
                    <div className="col-md-12 col-lg-5 ">
                        <h6 className="m-5 mb-0">Name : SAMIKSHA DADASAHEB KHARADE</h6>
                        <h6 className="m-5 mb-0 mt-2">Highest Degree : Bachelor Of Accounting & Finance</h6>
                        <h6 className="m-5 mb-0 mt-2">Course : Graphic Design Course</h6>
                        <h6 className="m-5 mb-0 mt-2">Year of Course : 2022-2023</h6>
                        <h6 className="m-5 mb-0 mt-2">Institute : Institute for Design Of Electrical Measuring Instrument, Mumbai</h6>

                    </div>
                </div>
            </div>
        </section>

        <section className="Main4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 text-center">
                        <h1 className="mb-5">Work</h1>
                    </div>
                    <div className="col-md-12 col-lg-6 mb-5">
                        <div className="card">
                            <div className="card-header p-0 m-0 mybox">
                                <img src="/img/pic1.jpg" className="w-100" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 mb-5">
                        <div className="card">
                            <div className="card-header p-0 m-0">
                                <img src="/img/pic2.jpg" className="w-100" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 mb-5">
                        <div className="card">
                            <div className="card-header p-0 m-0">
                                <img src="/img/pic3.jpg" className="w-100" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 mb-5">
                        <div className="card">
                            <div className="card-header p-0 m-0">
                                <img src="/img/pic4.jpg" className="w-100" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 mb-5">
                        <div className="card">
                            <div className="card-header p-0 m-0">
                                <img src="/img/pic5.jpg" className="w-100" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6 mb-5">
                        <div className="card">
                            <div className="card-header p-0 m-0">
                                <img src="/img/pic6.jpg" className="w-100" />
                            </div>
                        </div>
                    </div>

                    

                    <div className="col-md-12 col-lg-6">
                        <div className="card">
                            <div className="card-header p-0 m-0">
                                <img src="/img/pic8.jpg" className="w-100" />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;