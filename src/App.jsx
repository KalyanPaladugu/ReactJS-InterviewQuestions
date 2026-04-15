import React,{ useState } from 'react'
import SearchItemsFromApi from './components/SearchItemsFromApi';
import SearchItems from './components/SearchItems';


// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import LoginPage from './components/LoginPage'
// import AdminPage from './components/AdminPage'
// import GuestPage from './components/GuestPage'
// import Unauthorized from './components/Unauthorized'
// import UserPage from './components/UserPage'
// import ProtectedRoute from './context/ProtectedRoute'
// import CountryStateSelector from './components/CountryStateSelector'
// import Test from './components/Test';
// import Input from './components/Input';
// import Display from './components/Display'
// import { useMemo } from "react";



function App() {
  
// const [name, setName] = useState("");
  return (
//     <>
// {/* <Router>
//   <Routes>
//     <Route path='/login' element={<LoginPage />} />
//     <Route path='/admin' element={<ProtectedRoute roles={['admins']}>
//   <AdminPage />
//     </ProtectedRoute>} />
//     <Route path='/guest' element={<GuestPage />} />
//     <Route path='/unauther' element={<Unauthorized />} />
//     <Route path='/user' element={<UserPage />} />
//   </Routes>
// </Router> */}
//      {/* <CountryStateSelector /> */}
//      {/* <Test /> */}
//      <Input name={name} setName={setName}/>
//      <Display name={name} />
//     </>
    <div>
      {/* <SearchItemsFromApi /> */}
      <SearchItems />
    </div>
  )
}

export default App





// export default function App() {
//   const [count, setCount] = React.useState(0);
//   const [text, setText] = React.useState("");
// function slowFunction(num) {
//   console.log("Running slow function...");
//   for (let i = 0; i < 1_000_000_000; i++) {}
//   return num * 2;
// }
// const expensiveValue = React.useMemo(() => {
//     return slowFunction(count);
//   }, [count]);

//   const handleClick= () =>{
//       const inputValue= Number(text)
//     setCount(count+inputValue);
//     setText("");
//   }
//   return (
//     <>
//       <button onClick={handleClick}>Count</button>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <p>{expensiveValue}</p>
//       {/* <p>{count}</p> */}
//     </>
//   );
// }
