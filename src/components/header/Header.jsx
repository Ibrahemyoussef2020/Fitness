import HeaderBar from "./HeaderStyle"

const Header = () => {
  return (
    <HeaderBar>
        <div>
            <img src="images/logo.png" alt="Fitness"/>
        </div>
        <div>
          <div className="admin-container">
            <img src="images/Ibrahim.jpg" alt="Ibrahim"/>
          </div>
        </div>
    </HeaderBar>
  )
}

export default Header