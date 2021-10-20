import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css';
import Aboutus from './Pages/Aboutus/Aboutus';
import Contact from './Pages/Contact/Contact';
import Doctordetails from './Pages/Doctordetails/Doctordetails';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Ourdoctors from './Pages/Ourdoctors/Ourdoctors';
import Footer from './Pages/Shared/Footer/Footer';
import Resignation from './Pages/Login/Resignation/Resignation '
import Header from './Pages/Shared/Header';
import Authprovider from './Context/Authprovider';
import Privateroute from './Pages/Login/Privateroute/Privateroute';
import Contract from './Contract/Contract';
import Notfound from './Notfound/Notfound';

function App() {
  return (
    <div className="App">
       <Authprovider>
       <Router>
          <Header></Header>
           <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>

              <Route path="/home">
                  <Home></Home>
              </Route>

              <Privateroute path="/ourdoctors">
                  <Ourdoctors></Ourdoctors>
              </Privateroute>

              <Privateroute path="/aboutus">
                  <Aboutus></Aboutus>
              </Privateroute>

              <Route path="/contact">
                  <Contact></Contact>
              </Route>

              <Route path="/login">
                  <Login></Login>
              </Route>
                
              <Route path="/resignation">
                <Resignation></Resignation>
              </Route>

              <Privateroute path="/doctors/:id">
                  <Doctordetails></Doctordetails>
              </Privateroute>

              <Route path="/contract">
                <Contract></Contract>
              </Route>

              <Route path="*">
                  <Notfound></Notfound>
              </Route>

           </Switch>
             <Footer></Footer>
        </Router>
       </Authprovider>
    </div>
  );
}

export default App;
