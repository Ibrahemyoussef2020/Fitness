import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-logo'>
            <img src="images/logo.png" alt="Fitness" />
        </div>
        <div className='border'></div>
        <ul>
            <li>Follow US</li>
            <li>Fitness</li>
            <li>Diets</li>
            <li>swedish </li>
            <li>devices </li>
        </ul>
    </footer>
  )
}

export default Footer