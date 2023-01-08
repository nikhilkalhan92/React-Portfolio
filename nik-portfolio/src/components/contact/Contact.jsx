import "./contact.css"
import Phone from "../../img/phone.png" 
import Email from "../../img/email.png" 
import Address from "../../img/address.png" 

   const Contact = () => {
    return (
        <div className="c">
               <div className="c-bg"></div>
               <div className="c-wrapper">
                <div className="c-left">
                <h1 className="c-title">Please get in touch</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone} alt="" className="c-icon" />
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
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>feel free to get into contact with me</b> happy to discuss further
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                    </div> 
               </div>
        </div>
    )
   } 

   export default Contact


