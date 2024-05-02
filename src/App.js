import Navbar from "./Components/navbar/Navbar"
import Body from "./Components/Body/body"
import './App.css';
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import Newcars from "./pages/Newcars";
import Audi from "./pages/Brands/audi/audi";
import Wv from "./pages/Brands/wv/wv";
import Nissan from "./pages/Brands/nissan/nissan";
import Jeep from "./pages/Brands/jeep/jeep";
import Ford from "./pages/Brands/ford/ford";
import Footer from "./Components/Carfooter/footer"
import Findcars from "./pages/findCars/findCars"
import AllModelPage from "./pages/AllModelPage/allModelPage"
import Bmw from "./pages/Brands/bmw/bmw"



function App() {

  
  return (
    
    <div className="App" >  
      <>
   
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
              
                <Route
                    path="/"
                    element={<Body />}

                />
              
                <Route
                    path="/newcars"
                    element={<Newcars />}
                    
                />
               <Route
                    path="/audi"
                    element={<Audi />}
                    
                />
                 <Route
                    path="/ford"
                    element={<Ford />}
                    
                />
                 <Route
                    path="/wv"
                    element={<Wv />}
                    

                />
                 <Route
                    path="/nissan"
                    element={<Nissan />}
                    
                />
                 <Route
                    path="/jeep"
                    element={<Jeep />}
                    
                />
              

              <Route
                    path="/findcars"
                    element={<Findcars />}
                    
                />
              
             
              <Route
                    path="/model"
                    element={<AllModelPage />}
                    
                />
                 <Route
                    path="/bmw"
                    element={<Bmw />}
                    
                />
              </Routes>

            </BrowserRouter>

</>
          


          
    </div>
  );
}

export default App;

