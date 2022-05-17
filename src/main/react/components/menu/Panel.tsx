
import "./Panel.css";
import { Link } from "react-router-dom";

const Panel = () => {
  return (<div>
    <div className="sidebar">
      <Link to="/page1.ui">Page1</Link>
      <Link to="/page2.ui">Page2</Link>

    </div>
  </div>

  )
}

export default Panel
