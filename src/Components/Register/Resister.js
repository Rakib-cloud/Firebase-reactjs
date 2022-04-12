import React from 'react';

const Resister = () => {
    return (
        <div>
            <h2>please register our site</h2>
            <form >
                <input type="text" placeholder='your name' />
             <br/>
                <input type="email" placeholder='your email' />
                <br/>
                <input type="password" placeholder='your password' /><br/>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Resister;