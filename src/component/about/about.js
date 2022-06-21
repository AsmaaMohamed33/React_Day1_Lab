import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css'
export default function About() {

    return (
        <>
        <br/>
                <div className="row ">

                    <div className='col-md-5 col-sm-12 '>
                    {/* <img src={require('./images (4).jfif')}  /> */}
                   
                    <img src={require('./22.gif')}  className='col-12 h-75 w-100' />

                    </div>

                    <div className='col-md-7 '>
                    <h1>About Me</h1>
                    <br/>
                        <p>
                        Loream  Loream  Loream  Loream  Loream
                        Loream  Loream  Loream  Loream  Loream  Loream 
                        Loream  Loream  Loream  Loream  Loream  Loream 
                        Loream  Loream  Loream  Loream  Loream  Loream 
                        Loream  Loream  Loream  Loream    Loream  Loream 
                        </p>
                        <div className="buttons">
                            <button className="btn-hover color-8">Contact Me</button>
                        </div>



                    </div>
                </div>

           
            
        </>
    )


}
