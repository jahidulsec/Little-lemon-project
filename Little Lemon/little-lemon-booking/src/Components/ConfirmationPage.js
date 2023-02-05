import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function ConfirmationPage () {

    const [firstName, setFirstName] = useState({
        firstName: "",
        isTouched: false
    });
    
    const [lastName, setLastName] = useState({
        lastName: "",
        isTouched: false
    });

    const [email, setEmail] = useState({
        email: "",
        isTouched: false
    })
    const [phone, setPhone] = useState({
        phone: "",
        isTouched: false
    })

    const navigator = useNavigate();

    const [isInvalid, setIsInvalid] = useState('valid-field')

    const handleClick = () => {
        if (firstName.firstName.length === 0) {
            setIsInvalid('invalid-border')
        }
        else if (lastName.lastName.length === 0) {
            setIsInvalid('invalid-border')
        }
        else if (email.email.length === 0) {
            setIsInvalid('invalid-border')
        }else if (phone.phone.length === 0) {
            setIsInvalid('invalid-border')
        }
        else {
            setIsInvalid('valid-field')
        }
    }
    
    const data = useLocation();
    useEffect(()=>{
        console.log(data.state)
    },[data.state])

    let bookingData = data.state

    const handleSubmit =(e) => {
        e.preventDefault();
        alert('Thank you!')
        navigator('/booking')
    }
    
    return (
        <section className="confirm-page">
            <form className="confirm-form" onSubmit={handleSubmit}>
                <div className="con-field-section col-12">
                    <div className="field first-name">
                        <label htmlFor="first-name">First Name</label>
                        <input 
                            type="text"
                            id="first-name"
                            placeholder="First Name"
                            className={isInvalid}
                            onChange={(e)=>{setFirstName({...firstName, firstName: e.target.value})}}
                            onBlur={()=>{setFirstName({...firstName, isTouched: true})}}
                            required
                            />
                        {(firstName.firstName.length < 2 && firstName.isTouched) || (isInvalid === 'invalid-border') ? 
                            <p className='errorMsg'>
                                <span class="material-symbols-outlined">warning</span>
                                Enter a name more than 1 character</p> : null}
                    </div>
                    <div className="field last-name">
                        <label htmlFor="last-name">Last Name</label>
                        <input 
                            type="text"
                            id="last-name"
                            placeholder="Last Name"
                            className={isInvalid}
                            onChange={(e)=>{setLastName({...lastName, lastName: e.target.value})}}
                            onBlur={()=>{setLastName({...lastName, isTouched: true})}}
                            required
                            />
                        {(lastName.lastName.length < 2 && lastName.isTouched) || (isInvalid === 'invalid-border') ? 
                            <p className='errorMsg'>
                                <span class="material-symbols-outlined">warning</span>
                                Enter name more than 2 characters</p> : null}
                    </div>
                    <div className="field email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className={isInvalid}
                            onChange={(e)=>{setEmail({...email, email: e.target.value})}}
                            onBlur={()=>{setEmail({...email, isTouched: true})}}
                            required
                            />
                        {(email.email.length < 10 && email.isTouched) || (isInvalid === 'invalid-border') ? 
                            <p className='errorMsg'>
                                <span class="material-symbols-outlined">warning</span>
                                Enter your valid email</p> : null}
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            className={isInvalid}
                            onChange={(e)=>{setPhone({...phone, phone: e.target.value})}}
                            onBlur={()=>{setPhone({...phone, isTouched: true})}}
                            required
                        />
                        {(phone.phone.length < 11 && phone.isTouched) || isInvalid === 'invalid-border' ? 
                            <p className='errorMsg'>
                                <span class="material-symbols-outlined">warning</span>
                                Enter minimum 11 numbers</p> : null}
                    </div>
                    <div className="field prev-data-table">
                        {bookingData.date.length === 0 ? 
                            <div className='error-field' onClick={()=>{navigator('/booking')}}>
                                <div>
                                    <span className='material-symbols-outlined'>warning</span>
                                </div>
                                <div className='error-content'>
                                    <span class="material-symbols-outlined">today</span> 
                                    Select Date
                                </div>
                            </div> : 
                            <div className='prev-data'>
                                <span class="material-symbols-outlined">today</span>
                            {bookingData.date}  
                            </div>
                        }  
                        {bookingData.time.length === 0 ? 
                            <div className='error-field' onClick={()=>{navigator('/booking')}}>
                                <div>
                                    <span className='material-symbols-outlined'>warning</span>
                                </div>
                                <div className='error-content'>
                                    <span class="material-symbols-outlined">schedule</span> 
                                    Select Time
                                </div>
                            </div> : 
                            <div className='prev-data'> 
                                <span class="material-symbols-outlined">schedule</span>
                            {bookingData.time}  
                            </div>
                        }  
                        {bookingData.occasion.length === 0 ? 
                            <div className='error-field' onClick={()=>{navigator('/booking')}}>
                                <div>
                                    <span className='material-symbols-outlined'>warning</span>
                                </div>
                                <div className='error-content'>
                                    <span class="material-symbols-outlined">celebration</span> 
                                    Select event
                                </div>
                            </div> : 
                            <div className='prev-data'>
                                <span class="material-symbols-outlined">celebration</span>
                            {bookingData.occasion}  
                            </div>
                        }  
                        {bookingData.size.length === 0 ? 
                            <div className='error-field' onClick={()=>{navigator('/booking')}}>
                                <div>
                                    <span className='material-symbols-outlined'>warning</span>
                                </div>
                                <div className='error-content'>
                                    <span class="material-symbols-outlined">person</span> 
                                    Select Diner
                                </div>
                            </div> : 
                            <div className='prev-data'>
                                <span class="material-symbols-outlined">person</span>
                                {bookingData.size} diners  
                            </div>
                        }  
                                                   
                        {bookingData.place.length === 0 ? 
                            <p className='error-field'onClick={()=>{navigator('/booking')}}>Pick a place</p> :
                            <div className='prev-data'>{bookingData.place}</div>
                        }
                        
                    </div>
                    <div className="field ">
                        <label htmlFor="comment">Special Requests</label>
                        <textarea id="comment" rows="4" cols="50" placeholder="Comment"/>
                    </div>
                    <div className='agreement'>
                        <input id='agreement' type="checkbox" required/>
                        <label htmlFor='agreement' className='agreement'>You agree to our friendly <em>privacy policy</em></label>
                    </div>
                </div>
                <div className="img-btn"> 
                    <div className="img-section ">
                        <img src={require('../Image/row_31.jpg')} alt="owner_image" width="200px" height="200px"/>
                        <img src={require('../Image/row_32.jpg')} alt="owner_image" width="200px" height="200px"/>
                        <img src={require('../Image/row_33.jpg')} alt="owner_image" width="200px" height="200px"/>
                    </div>
                    <button 
                        className="btn"
                        type="submit"
                        onClick={handleClick}
                    >
                        Confirm Booking
                    </button>
                </div>
            </form>
        </section>
    )
}