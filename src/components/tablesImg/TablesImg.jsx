import React from 'react'

const TablesImg = ({table}) => {
    const img = table === 'clients' ? "images/tableClientsImg.png" : 'images/tableClassesImg.jpg';
  return (
    <div className='tableImg'>
        <img src={img} alt="Clients" />
    </div>
  )
}

export default TablesImg