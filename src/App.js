import './AddNewsHook.css'
import FooterPage from './News Api - Hook/News Element/footer';
import Search from './News Api - Hook/News Element/inputSearch';
import NavbarHeader from './News Api - Hook/News Element/navbar';
import NewsList from './News Api - Hook/newsPage';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <Search />
      <NewsList />
      <FooterPage />
    </div>
  );
}

export default App;