import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import { useHistory, PrivateRoute } from 'react-router-dom';
import searchAction from './../actions/addAction';

export default function Authentication() {

    const [error,setError] = useState({
        status: false,
        message: false
    })
    const otp = useSelector(state => state.add);
    const [userOtp, setUserOtp] = useState();
    const history = useHistory();
    const onChange = e => {
        setUserOtp(e.target.value);
    }
    
        const onSubmit = e => {
            e.preventDefault();
            
            if(otp.value == userOtp){
                // redirect to dashboard
                history.push("/dashboard")
            }else{
                // display error
                setError({status:true,message:'You have entered Invalid OTP'});
            }
        }

    return (
<div>
<section className="bg-dark">
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>OTP!  {otp.value}</strong> PLEASE USE THIS OTP TO SIGNIN
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    </button>
    </div>
        <div className="row pl-5 pr-5 d-flex justify-content-center align-items-center h-100">
           <div className="col-md-6">
                 <p className="text-white">SIGNIN With OTP</p>
                        <form className="form" method="post" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Enter OTP to SIGNIN" name="otp" value={userOtp} onChange={e => onChange(e)} required/>
                            </div>
                                <input type="submit" className="btn btn-primary" value="SIGNIN" />
                        </form>                
                        {
                            error.status ? <div class="alert alert-danger">
                            <strong>Error!</strong> {error.message}
                            </div> : ''
                        }
                    </div>
            </div>
</section>
</div>
    )
}
