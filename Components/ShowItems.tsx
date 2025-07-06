import React from 'react'
import ItemBox from '@/Components/ItemBox/ItemBox'

async function showItems() {
  const res =await fetch("https://reqres.in/api/users", {
      method: 'GET',
      headers: {
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json',
      },
  },
  );
  
  const users=await res.json();
  const usersData = users.data;
  
    return (
      <>
        {usersData.map((user:any) => (
          <ItemBox 
            key={user.id}
            id={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            avatar={user.avatar}
          />
        ))}
      </>
    )
}

export default showItems