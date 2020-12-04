import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';


//second argument

const UseEffectFetchData = () => {
  const[users, setUsers] = setState([]);
  const getUsers = async () =>{
    const response = await fatch(url);
    const users = await response.json();
    console.log(users);
  };
  useEffect(() =>{
getUsers();
  });
  return (
    <>
  <h2>github users</h2>
    </>
  );
};

export default UseEffectFetchData;
