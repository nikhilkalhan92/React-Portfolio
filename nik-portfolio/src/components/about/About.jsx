import './About.css'

const About = () => {
    return (
        <div className="a">
                <div className='a-left'>
                    <div className='a-card bg'></div>
                    <div className='a-card'>
                    <img
             src="https://www.shutterstock.com/shutterstock/photos/1777292972/display_1500/stock-vector-kids-learning-to-coding-programming-in-online-it-school-engineering-courses-in-internet-for-1777292972.jpg"
             alt=""
             className="a-img"
          />
                    </div>
                </div>
                <div className='a-right'>
                  <h1 className='a-title'>About Me</h1>
                  

                  <a href='https://www.credential.net/99be0a18-78b1-4251-b9ae-fded475a7159#gs.84w7f4'> - Diploma in Full Stack Software Development (E-commerce Applications)</a>
       
                  <p className='a-desc'>
                  - Modules: HTML/CSS , Javascript, Python, Full Stack, PostgreSQL, Software Testing,SEO, Web Marketing, E-Commerce

                  <p className='a-desc'> - Programming Experience: Bootstrap, Flask, Django, jQuery, Heroku, GitHub, React, Mongo.
                    </p>

                   <p> <a href='https://github.com/nikhilkalhan92'> - Click here for Github Portfolio</a> </p>

                    
                  </p>
                </div>
                
        </div>
    )
}

export default About