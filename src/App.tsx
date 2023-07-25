import "./App.css";
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import "./App.css";
import { useState } from "react";
import { CreateModal } from "./components/card/create-modal/create-modal";

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (

      <div className="container">
        <h1>Monke Place</h1>
        <div className="card-grid">
    {data?.map(foodData => <Card 
      price={foodData.price} 
      title={foodData.title} 
      image={foodData.image}/>)}

        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
      </div>
     
    
  )
}

export default App
