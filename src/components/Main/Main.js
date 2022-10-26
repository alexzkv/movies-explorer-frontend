import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio';

export default function Main() {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}