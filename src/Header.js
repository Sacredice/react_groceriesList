function Header({ title: baslik }) {

  
  return (
    <header>
        <h1>{baslik}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header
