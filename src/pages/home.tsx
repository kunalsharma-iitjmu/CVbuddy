import "./home.css"
import Button from "../components/button.tsx"

const Home = () => {
    return (
        <div className="home-content">
            <h1 id="heading">CV Templates</h1>
            <div className="row1">
                <a href="../CV-Temp/IITkgp/index.html"><Button name="Template 1"/></a>
                <a href="../CV-Temp/IITB/index.html"><Button name="Template 2"/></a>
                <a href="../CV-Temp/IITM/index.html"><Button name="Template 3"/></a>
            </div>
        </div>
    )
}

export default Home