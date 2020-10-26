import React from 'react';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UsersItem.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    // <ul className="users-list">
    //   {/* {props.items.map(user => ( */}
    //     <UserItem
    //       key={props.items.id}
    //       id={props.items.id}
    //       image={props.items.image}
    //       email={props.items.email} 
    //     />
    //   {/* ))} */}
    // </ul>
 
      
         <Card className="user-item-card">
           <div className="user-item__image">
             <Avatar image={`https://chen-omada.herokuapp.com/${props.items.image}`} alt="Avatar" />
          </div>
          <div className="user-item__info">
            <h2>User Email: {props.items.email}</h2>
          </div> 
         </Card>
        
   
    
  );
};

export default UsersList;
