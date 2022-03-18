// // import React from 'react'
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// // import Header from './Header';
// // import CardList from '../Dashboard/CardList';
// // // import Reports from '../Dashboard/Reports';
// // import { fetchApiData } from '../../Redux/stocks/stocksThunks';

// // const Dashboard = () => {
// //     const stocks = useSelector(({Reducer}) => Reducer.stocks);

// //     // const navigate = useNavigate();
// //     // const dispatch = useDispatch();

// //     // const navigateHandler = (id) => {
// //     //     dispatch(fetchApiData());
// //     //     navigate(`/details/${id}`);
// //     // }

// //     return (
// //         <>
// //         <div className="pb-5">
// //             <Header />
// //             {/* <Reports navigate={navigateHandler} /> */}
// //             <CardList stocks={stocks} />
// //         </div>
// //         </>

// //     )
// // };

// // export default Dashboard;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CardList from '../Dashboard/CardList';
// import Header from './Nav';
// import { fetchApiData } from '../../Redux/stocks/stocksThunks';

// const Dashboard = () => {
//   const stocksData = useSelector((state) => { state.Reducer; });

//   const dispatch = useDispatch();

//   const getMetrics = () => {
//     if (stocksData.length === 0) {
//       dispatch(fetchApiData());
//     }
//   };

//   useEffect(() => {
//     getMetrics();
//   }, []);

//   return (
//     <section>
//       <Header />
//       <CardList />

//     </section>
//   );
// };

// export default Dashboard;

import React from 'react';
import CardList from '../Dashboard/CardList';
import Header from './Header';

const Dashboard = () => (
  <div>
    <Header />
    <CardList />
  </div>

);
export default Dashboard;
