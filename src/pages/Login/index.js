import React from 'react';
import Header from '../../components/Header';

const Home = ()=> {
  return (
    <>
      <Header />
      <button onClick={() => alert('wwwww')}>点击</button>
      <div>Login</div>
    </>
  )
}

export default Home;