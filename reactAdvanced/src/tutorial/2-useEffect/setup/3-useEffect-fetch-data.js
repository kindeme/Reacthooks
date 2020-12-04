import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

//second argument

const UseEffectFetchData = () => {
	const [users, setUsers] = setState([]);
	const getUsers = async () => {
		const response = await fatch(url);
    const users = await response.json();
    setUsers(users)
		//console.log(users);
	};
	useEffect(() => {
		getUsers();
	},[]);
	return (
		<>
			<h2>github users</h2>
			<ul>{users.map((user) =>{
        const {id,login,avatar_url,html_url} = user;
        return(
          <li key ={id}>
            <img src={avatar_url} alt={login}/>
            <div>
              <h4>{login}</h4>
              <a href={html_url}></a>
            </div>
          </li>

        )
      })}</ul>
		</>
	);
};

export default UseEffectFetchData;
