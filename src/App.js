import Component from "./Component";
import './Addstyle.css'
import Footer from "./Component/Bootsrap/footer";
import Jumbotron from "./Component/Bootsrap/jumbotron";
import Content from "./Component/Bootsrap/body";
import FormEmail from "./Component/Bootsrap/form";

function App() {
  return (
    <div className="App">
      <Component />
      <Jumbotron />
      <Content />
      <FormEmail />
      <Footer />
    </div>
  );
}

export default App;
