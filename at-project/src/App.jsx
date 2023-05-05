import React, { useEffect, useState } from 'react'
import List from './List/List';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const request = await fetch("https://restcountries.com/v3.1/all");
      const response = await request.json();

      setData(response);
    }
    getData();
  }, [])

  

  return (
    <>
      <h1 className='text-[40px] flex justify-center ml-auto mr-auto bg-slate-400'>HEADER</h1>
      <main>
        <List data={data}/>
      </main>
      <h1 className='text-[40px] flex justify-center ml-auto mr-auto bg-slate-400'>FOOTER</h1>

    </>
  )
}