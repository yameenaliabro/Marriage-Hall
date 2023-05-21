import { Divider } from "antd";
import Banner from "./banner/Banner";
import About from "../about/About";
import Marriage from "../../marriage/Marriage";
import Blog from "../blog/Blog";
import "./home.css"
import ContactUs from "../ContanctUs/ContactUs";
import News from "../News/News";
function Home(){
return(
    <div>
        <Banner/>
        <Divider className="hidden" style={{ marginTop: 80 }} />
        <About/>
        <Divider className="hidden" style={{ marginTop: 80 }} />
        <Marriage/>
        <div className="set-color">
        <Divider className="hidden" style={{ marginTop: 80 }} />
        <Blog/>
        <Divider className="hidden" style={{ marginTop: 80 }} />
        <ContactUs/>
        <Divider className="hidden" style={{ marginTop: 80 }} />
        <News/>
        </div>
    </div>
)
}
export default Home;