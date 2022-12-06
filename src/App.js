import './App.css';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import FilmSection from './components/FilmSection';

function App() {

  const movies = [
    {
      title: "Szeregowiec Ryan",
      imgPath: "https://fwcdn.pl/fpo/01/79/179/7710998.3.jpg",
      desc: "W poszukiwaniu zaginionego szeregowca wysłany zostaje doborowy oddział żołnierzy.",
      genre: "Wojenny",
      grade: "10/10"
    },
    {
      title: "Władca Pierścieni: Drużyna Pierścienia",
      imgPath: "https://fwcdn.pl/fpo/10/65/1065/7912491.3.jpg",
      desc: "Drużyna Pierścienia zostaje rozbita, lecz zdesperowany Frodo za wszelką cenę chce wypełnić powierzone mu zadanie.",
      genre: "Przygodowy",
      grade: "10/10"
    },
    {
      title: "Joker",
      imgPath: "https://fwcdn.pl/fpo/01/67/810167/7905225.3.jpg",
      desc: "Życie pogrążonego w rozpaczy po stracie żony i syna kowala Baliana odmienia wizyta jego ojca, słynnego rycerza Godfryda z Ibelinu.",
      genre: "Dramat",
      grade: "10/10"
    }
  ]

  return (
    <div className="App">
      <div className='top-side'>
        <Logo />
        <Navbar />
      </div>
      <div className='film-section-fill'>
        {movies.map((movie) => <FilmSection imgPath={movie.imgPath} title={movie.title} desc={movie.desc} genre={movie.genre} grade={movie.grade}/> )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
