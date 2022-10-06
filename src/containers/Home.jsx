import { Link } from "react-router-dom";


const Home = () => {



  return (
    <>
      <div className="home-page">
        <h1> BEN CUTLER-AMES</h1>
        <h3>Software Developer</h3>
        <Link to='/about'><button>View Portfolio</button></Link>
      </div>
    </>
  )
};

export default Home;
