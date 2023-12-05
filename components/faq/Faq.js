import classes from '../faq/Faq.module.css';

const Faq = () => {
    return (   
    <div className= {classes.container}>
    <h1>Frequently Asked Questions?</h1>
    <div className={classes.tab}>
      <input type="radio" name="acc" id="acc1"/>
      <label for="acc1">
        <h2>01</h2>
        <h3>How do we select destination??</h3>
      </label>
      <div className= {classes.content}>
        <p>To customise the generated content to their needs, users can indicate the location or type of destination they
           are interested in, such as a country, city, beach, or mountain.
          </p>
      </div>
            </div>
            <div className={classes.tab}>
      <input type="radio" name="acc" id="acc2"/>
      <label for="acc2">
        <h2>02</h2>
        <h3>What do you think are the key challenges faced by tourism managers??</h3>
      </label>
      <div className={classes.content}>
        <p>There are several key challenges faced by tourism managers. One of the most significant challenges is ensuring
           that tourists have a positive experience while visiting the destination. This can be a challenge due to a
            number of factors, such as language barriers, cultural differences, and safety concerns.
          </p>
      </div>
            </div>
            <div className={classes.tab}>
      <input type="radio" name="acc" id="acc3"/>
      <label for="acc3">
        <h2>03</h2>
        <h3>What do you think is the best way to encourage repeat visits by tourists to an area?</h3>
      </label>
       <div className={classes.content}>
        <p>There are a number of ways to encourage repeat visits by tourists to an area. One way is to offer discounts
           or other incentives for return visits. Another way is to make sure that the area is kept clean and attractive
            and that there are plenty of activities and attractions available.
        </p>
        </div>
            </div>
            <div class={classes.tab}>
      <input type="radio" name="acc" id="acc5"/>
      <label for="acc5">
        <h2>05</h2>
        <h3>What do you think is the most important thing that can be done to attract more tourists to an area?</h3>
      </label>
            <div class={classes.content}>
        <p>There are a number of things that can be done to attract more tourists to an area, but I believe that the most
           important thing is to make sure that the area is safe and welcoming. This means ensuring that there are
            adequate security measures in place, as well as making sure that the local population is friendly and 
            hospitable.
          </p>
        </div>
    </div>
            
        </div>
        
    )
}

export default Faq