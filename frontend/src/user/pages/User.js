import React, { useEffect, useState,useContext } from 'react';

import UsersItem from '../components/UsersItem';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
 
const User = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();
 
  useEffect(() => {
     const fetchUsers = async () => {
      try {
        const responseData =  await sendRequest(
        'https://chen-omada.herokuapp.com/api/users'  
        );
        console.log(auth.userId);
        console.log(responseData.users);
        let User =   responseData.users.find((item)=>item.id===auth.userId);
        console.log("User.id " +User.id);
        
        setLoadedUsers(User);
      } 
      catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);
  
  
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersItem items={loadedUsers} />}
    </React.Fragment>
  );
};
export default User;
