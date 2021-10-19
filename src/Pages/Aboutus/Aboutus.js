import React from 'react';
const img=`https://i.ibb.co/WnbG6pZ/Portrait-of-successful-mid-adult-doctor-with-crossed-arms-Caucasian-general-practitioner-wearing-lab.jpg`;

const Aboutus = () => {
    return (
        
        
        <div>
            <h1><b>ABOUT US</b></h1>
            <h3>Integrated Hospital Service with Mordern Facility</h3>
            <div className=" text-center d-flex mt-5 pt-5 text-dark">
                <div className="container  my-5 w-50">
                    <h2> MESSAGE FROM MANAGING DIRECTOR <hr /></h2>
                    <p>It is indeed a great pleasure for me to introduce our brand new state – of – the -art technology hospital in the region of Chittagong. Nowadays, if anyone needs good treatment, they need to look forward to Dhaka or Abroad. Because good and well facilitated hospitals are not available in the port city of Chittagong.

                    So, we needed to decentralize and step forward to establish well facilitate and modern hospital in Chittagong city. Moreover, we felt that our integrated Township of Chittagong city, the second capital and largest sea-port of Bangladesh, would be incomplete without a good health care facility like Attentive Hospital that is going to be a well-equipped modern multi specialty hospital. In view of that, Parkview Hospital was incorporated in Chittagong, Bangladesh in the year 2013 under the company act 1994.
                    
                    
                    </p>
                    <br />
                    <ul>
                    <li>State-of-the-Art Technology</li>
                    <li>Caring people</li>
                    <li>Medical expertise</li>
                    <li>Clinical excellence</li>
                    </ul>
                </div>
                <div className="container my-5 w-50">
                <img className="img-fluid" src={img} alt=""/>
                </div>
           </div>
        </div>

        

);
};


export default Aboutus;