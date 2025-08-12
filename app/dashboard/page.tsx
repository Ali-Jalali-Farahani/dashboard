'use client'
import React,{useEffect,useState} from 'react'
import ItemBox from '@/Components/ItemBox/ItemBox'
import Menu from '@/Components/Menu/Menu';
import useSWR from 'swr';


function dashboard() {

  type myDatatype ={
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
    email: string;
  }

  const fetchUsers=async (url:string) => {
        try{
          const res = await fetch(url, {
          method: 'GET',
          headers: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json', 
          }
        });
        
        const users = await res.json();
        return(users.data);
        }catch(error){
          throw new Error("Failed to fetch users data");
        }
  };


  const { data:usersData, error:fetchError} = useSWR<myDatatype[]>("https://reqres.in/api/users",fetchUsers,{revalidateIfStale: false});
  const [searchText,setSearchText]=useState<string>("")

  return (
    <div className='w-full h-full bg-[#e5eef1] flex'>

      {/* menu */}
      <Menu />

      {/* items */}
      <div className='w-full h-full mt-[50px] md:mt-[10px]'>

        {/* show items */}
        {!fetchError?(
          <>
            {/*search bar */}
            <div className='w-full h-auto mt-[5px] bg-[#f0ffff] p-[10px]'>
              <label className='flex'>
                <p className='mr-[12px]'>search:</p>
                <input value={searchText} onChange={(event)=>setSearchText(event.target.value)} type="text" className='bg-[#e3fafa] border-[3px]'/>
              </label>
            </div>
            <div className='grid-cols-2 grid grid-rows-[max-content] gap-[10px] p-[10px] pt-0  md:w-[80%] md:grid-cols-3'>

              {/* filter items and show(map) */}
              {usersData?.filter((user:any)=>{
                let name=`${user.first_name} ${user.last_name}`;
                if(searchText){
                  return name.includes(searchText)
                }else{
                  return true
                }
              }).map((user:any) =>(
                <ItemBox 
                  key={user.id}
                  id={user.id}
                  firstName={user.first_name}
                  lastName={user.last_name}
                  avatar={user.avatar}
                />
              ))}

            </div>
            </>
        ):(
          // if data not fetch
          <div className='containerFlexBothCenter'>
            <h1 className='text-red-800 text-[25px]'>Error in get data from server</h1>
          </div>
        )}

      </div>
      
    </div>
  )
}

export default dashboard
