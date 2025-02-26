import React, {Component} from 'react';
import './Footer.css';
const footerCol = [
    {
        features: "Features",
        coolStaf: "Cool staff",
        randomFeature: "Random feature",
        teamFeature: "Team feature",
        stuffForDevelopers: "Stuff for developers",
        anotherOne: "Another one",
        lastTime: "Last time"
    },

    {
        resources: "Resources",
        resource: "Resource",
        resourceName: "Resource name",
        anotherResource: "Another resource",
        finalResource: "Final resource",
    },

    {
        about: "About",
        team: "Team",
        locations: "Locations",
        privacy: "Privacy",
        terms: "Terms",
    }
]

class Footer extends Component {
   render (){
        return (

            <div id='footer-con' className="container mt-5">
                <div  className="row row-cols-md-3 row-cols-lg-4 border-top py-5 g-lg-5">

                    {/* Logo and license  */}
                    <div className="col">
                        <img src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.' alt="logo" />
                        <p className='d-block small text-muted'>© 2017-2018</p>
                    </div>

                    {
                                footerCol.map((v, index) => {
                                    console.log(v);
                            
                                    return (
                                        <div className="col text-center" key={index}>
                                            <p className='fw-bold fs-5'>Features</p>
                                            <ul className='list-group list-unstyled'>
                                                {
                                                    Object.entries(v).map(([key, val]) => {
                                                        console.log(key, val);
                            
                                                        return (
                                                            <li key={key}>
                                                                <a href="#">{val}</a>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    );
                                })
                            
                        
                        }
                </div>
            </div>
        )
   }
}

export default Footer;

