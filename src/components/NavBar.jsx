
import { Link } from 'react-router-dom'

import { useOidc } from '@axa-fr/react-oidc';

export const Home = () => {

  return (
    <div className="container-fluid mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Home</h5>
          <p className="card-text">React Demo Application protected by OpenId Connect. More info on about oidc on <a href="https://github.com/AxaGuilDEv/react-oidc">GitHub @axa-fr/react-oidc</a></p>
          {!isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => login('/profile')}>Login</button></p>}
          {isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => logout('/profile')}>logout /profile</button></p>}
          {isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => logout()}>logout</button></p>}
          {isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => logout(null)}>logout whithout callbackredirect</button></p>}
          {isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => renewTokens()}>renew tokens</button></p>}
        </div>
      </div>
    </div>
  );
};

export default function NavBar() {
  const { login, logout, renewTokens, isAuthenticated } = useOidc();
  return (
    <>
      <div className='flex justify-around items-center py-5 bg-[#234] text-white'>
        <h1 className='font-semibold font-2xl'>KeyCloak App</h1>
        <ul className='flex'>

          <li className='mx-1'>
            <Link to='/'>Home</Link>
          </li>
          {/* <li className='mx-1'>
            <Link to='/resource'>Login</Link>
          </li> */}
          <li className='mx-1'>
            <Link to='/resource'>Resource</Link>
          </li>
          <li>
            {isAuthenticated && <p><button type="button" className="btn btn-primary" onClick={() => logout()}>Logout</button></p>}
          </li>
        </ul>
      </div>
    </>
  )
}