import React,{useState} from 'react'
import { Redirect,useHistory } from 'react-router-dom';
import addAction from '../actions/addAction'
import { useDispatch } from 'react-redux';




export default function Login() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [number,setNumber] = useState();


const onChange = e => {
    if(e.target.value.length > 10){
        console.log('false');
    }else{
        setNumber(e.target.value);
    }
}

    const onSubmit = e => {
        e.preventDefault();
        let randNum = Math.floor(Math.random() * 1000000); 
        if(number.length < 10){
            console.log('false num');
            alert("please Enter A Valid Number.Mobile Number Should be atleast 10 digit")
        }else{
            dispatch(addAction(randNum));
            history.push('/auth');
        }
    }

    return (
        <div>
            <section className="bg-dark"> 
                <div className="row pl-5 pr-5 d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-6">        
                        <p className="text-white">
                            ENTER YOUR MOBILE NUMBER TO GET OTP TO SIGNIN
                        </p>
                        <form className="form" method="post" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Mobile Number" name="number" value={number}  onChange={e => onChange(e)} required />
                            </div>
                                <input type="submit" className="btn btn-primary" value="Get O T P" />
                        </form> 
                    </div>
                </div>
            </section> 
        </div>  
    )
}
