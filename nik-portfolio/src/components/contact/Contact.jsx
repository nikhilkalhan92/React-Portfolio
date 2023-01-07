import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import Linkedin from "../../img/linkedin.png"



const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-left"></div>
            <h1 className="c-title">Contact Details</h1>
            .<div className="c-info">
                <div className="c-info-item">
                <img 
                src={Phone}
                alt=""
                className="c-icon"
                />
                07817309155
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={Email} alt="" />
                    nkalhan@hotmail.co.uk
                </div>
                <div className="c-info-item">
                    <img className="c-icon" src={Address} alt="" />
                    London England 
                </div>
                <div className="c-social-media">
                    <img className="c-social" src={Linkedin} alt="" />
                    <a href="https://www.linkedin.com/in/nikhilkalhan/" target="_blank">Linkedin</a>
                  
                    <div> 

                       

                    </div>

                    
                </div>
            </div>
            

            
        </div>
    )
    
}

export default Contact
  
    
    

    
    


