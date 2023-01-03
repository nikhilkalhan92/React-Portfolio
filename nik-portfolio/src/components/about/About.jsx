import './About.css'

const About = () => {
    return (
        <div className="a">
                <div className='a-left'>
                    <div className='a-card bg'></div>
                    <div className='a-card'>
                    <img
             src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
             alt=""
             className="a-img"
          />
                    </div>
                </div>
                <div className='a-right'>
                  <h1 className='a-title'>About Me</h1>
                  <p className='a-sub'>
                  Diploma: Full Stack Software Development (SCQF Level 8/EQF Level 5)
                  </p>
                  <p className='a-desc'>
                  - Modules: HTML5/CSS3, JavaScript, Python, Full Stack, Ecommerce

                  <p className='a-desc'> - Programming Experience: Bootstrap, Flask, Django, jQuery, Heroku, GitHub, React, Mongo.
                    </p>

                    <a href='https://github.com/nikhilkalhan92'> - Click here for Github Portfolio</a>
                  </p>
                </div>
        </div>
    )
}

export default About