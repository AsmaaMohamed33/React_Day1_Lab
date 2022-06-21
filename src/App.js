import Headers from './component/header/header';
import About from './component/about/about';
import Protofolio from './component/protofolio/protofolio'
import Footer from './component/footer/footer'
function App() {
  return (
    <>
    
    <div className="container-fluid" >
    <Headers/>
   <About/> 
   <Protofolio/>
   <Footer/>
   </div>
   </>
  
  );
}

export default App;
