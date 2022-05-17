import Header from "./Header"
import Menu from "./menu/Panel"
import "./PageTemplate.css"

const PageTemplate = (props: any) => {
    return (
        <>
            <Header title="Test Header 3" />

            <div className="container">
                <Menu />
                <div className="content">
                    {props.children}
                </div>

            </div>
        </>
    )
}
export default PageTemplate;  