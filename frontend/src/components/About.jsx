 

const About = () => {
    return (
      <>
        <section className="about" id="about">
          <div className="container">
            <div className="banner">
              <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p className="mu">The only thing we're serious about is food.</p>
              </div>
              <p className="mid">
             We like to cook and serve a variety of Bangladeshi foods!! We're passionate about sharing the rich flavors and diverse culinary traditions of Bangladesh. From the aromatic spices to the fresh ingredients, we strive to bring the authentic taste of Bangladesh to your table.
             We take pride in serving traditional Bangladeshi dishes, prepared with care and attention to detail.
              </p>
              {/* <Link to={"/Menu"}>
                Explore Menu{" "}
                <span>
                  <HiOutlineArrowRight />
                </span>
              </Link> */}
            </div>
            <div className="banner">
              <img src="three.jpeg" alt="about" />
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default About;
  