import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
    //google login er jonno firebase theke object akare niye asbo
    const {signinwithgoogle}=useFirebase();
    return (
        <div>
            <h2>login</h2>
            <button onClick={signinwithgoogle}>Google sign in</button>
            <form >
                
             <br/>
                <input type="email" placeholder='your email' />
                <br/>
                <input type="password" placeholder='your password' /><br/>
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;