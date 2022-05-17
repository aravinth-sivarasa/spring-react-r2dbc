
const Header = ({ title }:any) => {
  return (
    <header>
      <h1>{title}</h1>
      <form method="POST" action="/logout" >
        <button className="btn btn-lg btn-primary btn-block" type="submit" >logout</button>
      </form>
    </header>
  )
}



export default Header
