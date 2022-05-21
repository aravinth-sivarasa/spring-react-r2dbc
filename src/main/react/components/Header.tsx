import { Link } from "react-router-dom";
const Header = ({ title }: any) => {
  return (
    <header>
      <form method="POST" action="/logout" >
        <button className="btn btn-primary" type="submit">logout</button>
      </form>
    </header>
  )
}



export default Header
