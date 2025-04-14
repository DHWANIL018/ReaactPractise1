// Shree Ganeshay namah 
import React from 'react'
import Card from '../Components/Card'
import CardApi from '../Components/CardApi'

const Home = () => {
  return (
    <>
        {/* <Card Title={"Jay Shree Ram"} Description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias dignissimos ipsam sit quas culpa sunt beatae molestiae. Saepe, voluptate."}/>

        <Card Title={"Har Har Mahadev"} Description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias dignissimos ipsam sit quas culpa sunt beatae molestiae. Saepe, voluptate."}/> */}

        {
            CardApi.map((ele=>{
                return(
                    <Card  Title={ele.Title} Description={ele.Description}/>
                )        
            }))
        }
        
    </>
  )
}

export default Home