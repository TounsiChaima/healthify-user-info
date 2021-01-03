import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div>
                 <section id="contact" className="contact">
            <div className="container-fluid color-bg">
                <div className="row dis-table">
                    <div className="hidden-xs col-sm-6 dis-table-cell">
                        <h2 className="section-title">Contact With us</h2>
                    </div>
                    <div className="col-xs-6 col-sm-6 dis-table-cell">
                        <div className="section-content">
                            <p>16th Birn street Get Plaza (4th floar) USA</p>
                            <p>+44 12 213584</p>
                            <p>example@mail.com </p>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <ul className="center-block">
                                <li><a href="#" className="fb"></a></li>
                                <li><a href="#" className="twit"></a></li>
                                <li><a href="#" className="g-plus"></a></li>
                                <li><a href="#" className="link"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container-fluid">
            <div className="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12771.930361487692!2d10.196202!3d36.842893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4153c4733f285343!2sInstitut%20national%20des%20sciences%20appliqu%C3%A9es%20et%20de%20technologie!5e0!3m2!1sfr!2stn!4v1609163027208!5m2!1sfr!2stn" 
        style={{width:'100%', height:'60vh'}}>
            </iframe>
         
            </div>
        </div>



        <section className="contact-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
                        <div className="row">
                             <form className="contact-form" method="post" action="contact.php">
                                
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input  name="name" type="text" className="form-control" id="name" required="required" placeholder="  Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input name="email" type="email" className="form-control" id="email" required="required" placeholder="  Email" />
                                    </div>
                                    <div className="form-group">
                                        <input name="subject" type="text" className="form-control" id="subject" required="required" placeholder="  Subject" />
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <textarea name="message" type="text" className="form-control" id="message" rows="7" required="required" placeholder="  Message"></textarea>
                                </div>

                                <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                                    <div className="text-center">
                                        <button type="submit" id="submit" name="submit" className="btn btn-send">Send </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


            </div>
        );
    }
}

export default ContactUs;