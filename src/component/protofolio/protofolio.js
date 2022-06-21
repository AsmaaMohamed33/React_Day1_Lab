import 'bootstrap/dist/css/bootstrap.min.css';
import './protofolio.css'
export default function Protofolio() {

    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("column");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }
    
    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }
    
    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
      }
      element.className = arr1.join(" ");
    }
    
    
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }

    return (
        <>
<h2>PORTFOLIO</h2>
<hr/>
<div id="myBtnContainer">
    
    <button className="btn  m-5" onClick={(e)=>{filterSelection('nature')}}> PSD</button>
  <button className="btn  m-5" onClick={(e)=>{filterSelection('cars')}} > Landing page</button>
  <button className="btn  m-5" onClick={(e)=>{filterSelection('people')}}> Skills</button>
</div>

<div className="row">
  <div className="column nature" >
    <div className="content">
      <img src={require('./5.jfif')} className='col-12 h-75 w-100'/>
    

      <h4>PSD to HTML</h4>
      <p>Convert PSD to HTML  CSS  Javascript and Bootstrap ..</p>
    </div>
  </div>
  <div className="column nature">
    <div className="content">
    <img src={require('./2.jfif')} className='col-12 h-75 w-100'/>
      <h4>PSD to HTML</h4>
      <p>Convert PSD to HTML  CSS  Javascript and Bootstrap ..</p>
    </div>
  </div>
  <div className="column nature">
    <div className="content">
    <img src={require('./3.jfif')} className='col-12 h-75 w-100'/>
      <h4>PSD to HTML</h4>
      <p>Convert PSD to HTML  CSS  Javascript and Bootstrap ..</p>
    </div>
  </div>
  
  <div className="column cars">
    <div className="content">
      <img src={require('./11 .jfif')} className='col-12 h-75 w-100'/>
      <h4>Landing </h4>
      <p>landing page design..</p>
    </div>
  </div>
  <div className="column cars">
    <div className="content">
    <img src={require('./9.jfif')} className='col-12 h-75 w-100'/>
      <h4>Landing</h4>
      <p>landing page design..</p>
    </div>
  </div>
  <div className="column cars">
    <div className="content">
    <img src={require('./13.jfif')} className='col-12 h-75 w-100'/>
      <h4>Landing</h4>
      <p>landing page design..</p>
    </div>
  </div>

  <div className="column people">
    <div className="content">
      <img src={require('./a.png')} className='col-12 h-75 w-100'/>
      <h4>Anguler</h4>
      <p>Javascript Framework..</p>
    </div>
  </div>
  <div className="column people">
    <div className="content">
    <img src={require('./n.jfif')} className='col-12 h-75 w-100'/>
      <h4>ASP.NET</h4>
      <p>C# Framework..</p>
    </div>
  </div>
  <div className="column people">
    <div className="content">
    <img src={require('./s.jfif')} className='col-12 h-75 w-100'/>
      <h4>SQL Server</h4>
      <p>Database Management System..</p>
    </div>
  </div>

</div>




            <br /><br />
        </>
    )


}
