import { useState, useEffect } from 'react';
import { OidcSecure, useOidcUser, OidcUserStatus } from '@axa-fr/react-oidc';

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
          {JSON.stringify(oidcUser)}
        </>
      );
  }
};

const Resources = () => {
  return (
    <div className='my-12 grid place-items-center'>
      <DisplayUserInfo />
    </div >
  )
}


export const ResourcesHoc = () => <OidcSecure><Resources /></OidcSecure>
