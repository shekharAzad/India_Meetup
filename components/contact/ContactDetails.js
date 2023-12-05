import classes from '../contact/ContactDetails.module.css'
import form from 'react-bootstrap'
const ContactDetails = () => {
    return (
        <>
     <section className= {classes.contact}>
      <div className= {classes.container}>
        <h2>Contact Us</h2>
        <div className={classes.contact_wrapper}>
          <div className={classes.contact_form}>
            <h3>Send us a message</h3>
            <form>
              <div className={classes.form_group}>
                <input type="text" name="name" placeholder="Your name"/>
              </div>
              <div className={classes.form_group}>
                <input type="email" name="email" placeholder="Your email"/>
              </div>
              <div className="form-group">
                <textarea className= {classes.message} placeholder="Your Query"></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className={classes.contact_info}>
            <h3>Contact Information</h3>
            <p><i class="fa fa-phone"></i>+91 7455886320</p>
            <p><i class="fa fa-envelope"></i>muskangoyal@gmail.com</p>
            <p><i class="fa fa-map-marker-alt"></i>140412 Gharuan, Chandigarh, India</p>
          </div>
        </div>
      </div>

    </section>
        </>
    )
}

export default ContactDetails