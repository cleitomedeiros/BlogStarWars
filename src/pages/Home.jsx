import NavBar from '../components/NavBar';
import ahsoka from '../imagenes/ahsoka.jpeg'

const Home = () => {
   
  return (
    <>
     <NavBar/>
      <h1>
           <p>Caracteres</p>
        </h1>
      <div className="display: flex">
        <div className="col-3">
            <img src={ahsoka} alt={ahsoka} onClick={onsubmit}/>
            <button>Learn more! </button>
            <button>Favorite</button>
        </div>
        <div className="col-3">
        <img src={ahsoka}/>
        </div>
        <div className="col-3">
        <img src={ahsoka}/>
        </div>
        <div className="col-3">
        <img src={ahsoka}/>
        </div>
       
      </div>
    </>
  );
};

export default Home;
