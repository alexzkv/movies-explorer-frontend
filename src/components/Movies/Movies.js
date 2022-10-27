import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Movies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}