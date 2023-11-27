
import profile from './Assets/png-transparent-computer-icons-user-login-swiggy-blue-text-computer-removebg-preview.png'
export default function Login(){
    return(
            <div className="container">
                <div className='logo'>
                    <img className='logo-img' src={profile} alt=""></img>
                </div>
                <h2 className='heading'>Sign In</h2>
                <form action="/login" method="POST">
                    <input className='fields'  type="tel" placeholder='Enter your Phone' pattern='[0-9]{10}' required />
                    <input className='fields' type="password"  placeholder='Enter your password' required />
                    <button className='btn' type='submit'>Sign In</button>
                </form>
                <div className='lower'>
                    <div className='left'>
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </div>
                    <p><a href="#">Forgot Password?</a></p>
                </div>
                <div className='footer'>
                    <p>Not a Member? <a href="#">Create an Account</a></p>
                </div>
            </div>
)
}