import classes from '../about/About.module.css'
const AboutUs = () => {
    return (<>
        <section className= {classes.hero}>
    <div className={classes.heading} >
      <h1>About Us</h1>
    </div>
    <div className={classes.container}>
      <div className={classes.hero_content}>
        <h2>Welcome To Our Website</h2>
        <p>A little initiative called "Tourism Generator" aims to make it easier to create tourism-related content for
           project reports and presentations. 
           The Tourism Generator makes use of a sizable library of travel-related data and information, including 
           well-known tourist attractions, historical locations, cultural landmarks, natural marvels, and more.</p>
           
          <button className={classes.cta_button}><a href="learn.html" id="a">Learn More</a></button>
      </div>
      <div className={classes.hero_image}>
                    {/* <img src="image.jpg"> */}
        <div className={classes.imgAbout}>
                        <img src="\socialmedia\image.jpg" alt="About-Image"></img>
                        </div>
      </div>
    </div>

  </section>
    </>)
}
export default AboutUs