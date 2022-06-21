import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css'
export default function Skills() {

    return (
        <>
            <div className="container-fluid" >
                <div className="row">
                    <h1>Skills</h1>
                </div>
                <div className="row">
                    <p>I am Web Developer(.NET) through working in a creative and productive
                        development team that aims to meet the organization’s and customer’s
                        requirements and satisfaction.
                    </p>

                </div>
                <div className="row">
                    <div className='col-lg-4'>
                        <h2>My Focus</h2>
                        <hr />
                        <p>Back End</p>
                        <p>Front End</p>
                        


                    </div>
                    <div className='col-lg-8'>
                        <label htmlFor="disk_c">HTML5:</label>
                        <meter id="disk_c" value="95" min="50" max="100">97%</meter>
                        <br />

                        <label htmlFor="disk_d">CSS3:</label>
                        <meter id="disk_d" value="0.6">97%</meter>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    )


}
