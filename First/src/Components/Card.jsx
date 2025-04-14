// Shree Ganeshay namah 

// import React from 'react'

// const Card = ({Title,Description}) => {
//   return (
//     <>
//         <div class="card" style={{width:"18rem"}}>
//   <img src="..." class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">{Title}</h5>
//     <p class="card-text">{Description}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     </>
//   )
// }

// export default Card

import React from 'react'

const Card = (props) => {
  return (
    <>
        <div class="card" style={{width:"18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.Title}</h5>
    <p class="card-text">{props.Description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default Card