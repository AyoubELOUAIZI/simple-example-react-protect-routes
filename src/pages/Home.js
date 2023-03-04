import React, { useContext, useEffect } from 'react';
import AuthContext from '../components/AuthContext';

export const Home = () => {
  const { profile } = useContext(AuthContext);

  useEffect(() => {
    console.log('profile in home');
     console.log(profile);
  }, [profile]);

  // if (!profile) {
  //   return (<div>Loading...</div>
  //   )
  // }

  return (
    <div>
      <h1>Home</h1>
      {profile?.account && (
        <div>
          Home for User: {profile.account.email}
          <div>{profile.account.account_type}</div>
        </div>
      )}
    </div>
  );
};
