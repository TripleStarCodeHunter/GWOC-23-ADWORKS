import React from "react";
import "./contact-us.css";

const ContactIs = () => {
  return (
        <div className="container Background" >
            <h1>Connect With Us.</h1>
            <p>We would love to respond to your queries and help you 
                succeed. Feel free to het in touch with us.
            </p>
            <div className="contact-box">
                <div className="contact-left">
                    <h3>Send Your Request</h3>
                    <form>
                    <div className="input-row">
                            <div className="input-group">
                                <label>Name</label>
                                <input type="text" placeholder="Name"></input>
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" placeholder="Phone"></input>
                            </div>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Email</label>
                                <input type="Email" placeholder="Email"></input>
                            </div>
                            <div className="input-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Product"></input>
                            </div>
                        </div>
                    
                        <label>Message</label>
                        <textarea rows="5" placeholder="Your Message"></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
                <div className="contact-right">
                    <h3>Reach Us</h3>
                    <table>
                        <tr>
                            <td>Email</td><br></br>
                            <td>contactus@adworks.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td><br></br>
                            <td>+91 9898989890</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>Svnit Surat Gujarat</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
  );
};

export default ContactIs;