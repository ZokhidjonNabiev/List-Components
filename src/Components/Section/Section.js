import './Section.css';
import React,{Component} from 'react';
const data = [
    {
        type: "Free",
        price: "$0",
        users: "10  Users included",
        traffic: "2",
        supportType: "Email support",
        buttonType: "Sign up for free"
    },

    {
        type: "Pro",
        price: "$15",
        users: "20 Users included",
        traffic: "10",
        supportType: "Priority email support",
        buttonType: "Get started"
    },

    {
        type: "Enterprise",
        price: "$29",
        users: "30 Users included",
        traffic: "15",
        supportType: "Phone and email support",
        buttonType: "Contact us"
    }
]
class Section extends Component {
    render(){
        return(
            <div className="container pb-5">
                {/* the row for the slogan */}
                <div className="row text-center py-5 justify-content-center slogan">
                    <h2>Pricing</h2>
                    <p className='col-lg-6 lead'>
                        Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
                    </p>
                </div>

                {/* the row of card-boxes */}
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-5 justify-content-center">
                    {data.map((value, index) => (
                        <div className="col text-center" key={index}>
                            <div class="card shadow">
                                <div class="card-header">
                                    <h3>{value.type}</h3>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title fs-1 fw-normal">{value.price} <span className='text-muted fs-2'>/mo</span></h5>
                                    <p class="card-text d-flex flex-column mt-3">
                                        <span>{value.users} </span>
                                        <span>{value.traffic} GB of storage </span>
                                        <span>{value.supportType}</span>
                                    </p>
                                    {/* <a href="#" class="btn btn-lg btn-primary w-100">{value.buttonType}</a> */}

                                   {
                                     (()=> {
                                       if (index == 0) {
                                        return <a href="#" class="btn btn-lg btn-outline-primary w-100">{value.buttonType}</a>
                                        } else {
                                            return  <a href="#" class="btn btn-lg btn-primary w-100">{value.buttonType}</a>
                                        }
                                        }) ()
                                   }
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
               
            </div>
            
        )
    }
}

export default Section