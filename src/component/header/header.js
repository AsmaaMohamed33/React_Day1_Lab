import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
export default function Headers() {

    return (
        <>
                <div className="row" id='header'>

                    <img src={require('./pimg.jpg')} id="immg" className='col-12 h-75 w-100' />

                    <div className='col-5 box' >
                        <h1>Asmaa Mohamed ElMahdy</h1>
                        <p> Full Stack Developer
                        </p>
                        <div className="buttons">
                            <button className="btn-hover color-8">Contact Me</button>
                        </div>



                    </div>
                </div>

           
            <br/><br/> <br/><br/><br/>
        </>
    )


}
