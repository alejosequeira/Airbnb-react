import { useState } from 'react'
import Card from "./Card"
import Navbar from "./Navbar"
import Hero from "./Hero"
import cardData from "./cardData"

export default function App() {
    // <Hero />
    const elements = cardData.map(item => {
        return (
            <Card 
            key={item.id}
            {...item}
            />
        )
    })
return (
<div>
    <Navbar />
    <Hero/>
    <section className="cards-list">
             {elements}
    </section>
    
    {/* <Card 
    img={Gato1}
    rating="5.0"
    reviewCount="6"
    country="Argentina"
    title="Life Lessons with Katie Zaferes"
    price="136"
    /> */}
</div>
)
}


// export default function App() {

//   return (
//     <div className="Cards">
//         <Card 
//             img={Gato1} 
//             name="Mr. Whiskerson"
//             phone="(212) 555-1234"
//             email="mr.whiskaz@catnap.meow"
//         />
//         <Card 
//             img={Gato2}
//             name="Fluffykins"
//             phone="(212) 555-2345"
//             email="fluff@me.com"
//         />
//         <Card 
//             img={Gato3}
//             name="Felix"
//             phone="(212) 555-4567"
//             email="thecat@hotmail.com"
//         />
//         <Card 
//             img={Gato4}
//             name="Pumpkin"
//             phone="(0800) CAT KING"
//             email="pumpkin@scrimba.com"
//         />
//     </div>
// )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //     <a href="https://vitejs.dev" target="_blank">
  //         <img src={jordanLogo} className="logo react" alt="React logo" />
  //       </a>
        
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
      
  //     <h1>Vite + React = Happy Guy</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )


