import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Main({ loggedIn }) {
  return (
    <>
      <Header place='main' loggedIn={loggedIn} />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}