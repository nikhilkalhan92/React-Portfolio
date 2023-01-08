import "./contact.css"
import Phone from "../../img/phone.png" 
import Email from "../../img/email.png" 
import Address from "../../img/address.png" 
import { useRef, setDone } from "react"
import emailjs from '@emailjs/browser';


   const Contact = () => {
    const formRef = useRef()
    

   const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1u9vif2', 'template_u5ju5kk', formRef.current, '6tfFCqm20YIBogXNW')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            }, 
            (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="c">
               <div className="c-bg"></div>
               <div className="c-wrapper">
                <div className="c-left">
                <h1 className="c-title">Details</h1>
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
                        <b>feel free to get into contact with me</b> 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
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


