 
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Our team consists of some of the finest chefs. They ensure the taste of the food as well as the quality of the food.
          </p>
        </div>
        <div className="team_container">
          {/* {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>  
              </div>
            );
          })} */}
         {
          data[0].team.map((element)=>{
            return(
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>


              </div>
            )
          })
         }


        </div>
      </div>
    </section>
  );
};

export default Team;
