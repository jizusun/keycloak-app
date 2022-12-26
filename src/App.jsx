import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { OidcProvider } from '@axa-fr/react-oidc';

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

import { ResourcesHoc } from './components/Resources';


const configuration = {
  client_id: 'myclient',
  redirect_uri: window.location.origin + '/authentication/callback',
  silent_redirect_uri: window.location.origin + '/authentication/silent-callback',
  // silent_login_uri: window.location.origin + '/authentication/silent-login',
  scope: 'profile email openid',
  authority: 'http://localhost:8080/realms/myrealm',
  // authority_time_cache_wellknowurl_in_second: 60* 60,
  // refresh_time_before_tokens_expiration_in_second: 40,
  // service_worker_relative_url: '/OidcServiceWorker.js',
  service_worker_only: false,
  // storage: localStorage,
  // silent_login_timeout: 3333000
  // monitor_session: true,
  // token_renew_mode: TokenRenewMode.access_token_invalid,
};


export default function App() {
  return (
    <div>
      <OidcProvider configuration={configuration} >
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/resource' element={<ResourcesHoc />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </OidcProvider>
    </div>
  )
}