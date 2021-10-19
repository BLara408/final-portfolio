import React from 'react'


import './mailer.css'
import emailjs from 'emailjs-com'
function Mailer() {
    



    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm
        (
            'service_4cqhlkh'
            ,'template_g3apixz'
            ,e.target,'user_3qlqP3J69dVwUOj1VSzeJ'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        e.target.reset();
    }

    return (
    <div class="form-style-6">
        <h1>Contact Me</h1>
<       form onSubmit= {sendEmail}>
            <input type="text" name="field1" placeholder="Your Name" />
            <input type="email" name="field2" placeholder="Email Address" />
            <textarea name="field3" placeholder="Type your Message">

            </textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
    );
}

export default Mailer;
