import { useState, useEffect } from 'react';
import { OidcSecure, useOidcUser, OidcUserStatus, useOidcAccessToken, useOidcIdToken } from '@axa-fr/react-oidc';

const DisplayUserInfo = () => {
  const { oidcUser, oidcUserLoadingState } = useOidcUser();

  switch (oidcUserLoadingState) {
    case OidcUserStatus.Loading:
      return <p>User Information are loading</p>;
    case OidcUserStatus.Unauthenticated:
      return <p>you are not authenticated</p>;
    case OidcUserStatus.LoadingError:
      return <p>Fail to load user information</p>;
    default:
      return (
        <>
          <h2>User info </h2>
          <pre>{JSON.stringify(oidcUser, null, 2)}</pre>
        </>
      );
  }
};


const DisplayIdToken = () => {
  const { idToken, idTokenPayload } = useOidcIdToken();

  if (!idToken) {
    return <p>you are not authenticated</p>;
  }

  return (
    <>
      IdToken Payload:
      <pre>
        {JSON.stringify(idTokenPayload, null, 2)}
      </pre>
    </>
  );
};

const DisplayAccessToken = () => {
  const { accessToken, accessTokenPayload } = useOidcAccessToken();

  if (!accessToken) {
    return <p>you are not authenticated</p>;
  }
  return (
    <>
      {/* <h2> Access Token </h2>
      <pre>
        {JSON.stringify(accessToken, null, 2)}
      </pre> */}
      <h2> Access Token Payload: </h2>
      <pre>
        {JSON.stringify(accessTokenPayload, null, 2)}
      </pre>
    </>
  );
};



const Resources = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <DisplayIdToken />
      <DisplayAccessToken />
      <DisplayUserInfo />
    </div >
  )
}


export const ResourcesHoc = () => <OidcSecure><Resources /></OidcSecure>
