import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                    <section id="about" className="about"
                    style={{marginTop:'4%',
                            marginBottom:'10%'}}>
            <img src="../images/icons/about_color.png" className="img-responsive section-icon hidden-sm hidden-xs"/>
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row dis-table">
                        <div className="hidden-xs col-sm-6 section-bg about-bg dis-table-cell">

                        </div>
                        <div className="col-xs-12 col-sm-6 dis-table-cell">
                            <div className="section-content">
                                <h2 className="section-content-title">About us</h2>
                                <p className="section-content-para">
                                    Astronomy compels the soul to look upward, and leads us from this world to another.  Curious that we spend more time congratulating people who have succeeded than encouraging people who have not. As we got further and further away, it [the Earth] diminished in size.
                                </p>
                                <p className="section-content-para">
                                    beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.  Where ignorance lurks, so too do the frontiers of discovery and imagination.
                                </p>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div> 
        </section>
            </div>
        );
    }
}

export default About;