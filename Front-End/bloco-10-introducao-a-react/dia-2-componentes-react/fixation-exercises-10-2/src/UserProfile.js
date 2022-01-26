import React from 'react';

class UserProfile extends React.Component{
  render(){
    const {id, name, email, avatar} = this.props.user;
    
    return (

      
      <div className='card'>
          <h2> Nome: {name} </h2>
          <h3> ID: {id}</h3>
          <h3> Email: {email}</h3>
          <img src={avatar} alt={name} />

          <style jsx>{`
            .card{
              width:200px;
              margin: auto;
              text-align: center;
              background-color: #bee1e6;
              padding:15px;
              margin-bottom: 10px;
              border-radius: 5px;              
            }

            img{
              width: 150px;
              border-radius:8px              
            }
          `}
        

    </style>
      </div>
    )
  }
}
export default UserProfile;