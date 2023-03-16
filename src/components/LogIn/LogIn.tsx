import loginImage from "../../assets/nguyen-hung-R1ftFeTKEbk-unsplash.jpg"
import './LogIn.css'

const Login = () => {
  return (
    <section className='login-container'>
      <div className='login'>
        <p className='login-banner'>Welcome, Please Log In</p>
        <form className='form-container'>
          <input 
            type='input'
            title='username'
            placeholder='Username'
          />
          <input 
            type='input'
            title='password'
            placeholder='Password'
          />
          <button>Login</button>
        </form>
        <div>
          <button>Create Account</button>
        </div>
      </div>
      <div className='image-container'>
          <img className="karate-image" src={loginImage} alt="person in striking karate pose"/>
      </div>
    </section>
  )
}

export default Login