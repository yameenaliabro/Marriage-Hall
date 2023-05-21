import { ConfigProvider } from "antd";
import theme from "./theme.json"
import "antd/dist/reset.css";
import "./main.css";
const Theme = ({ children }:{children : any}) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
export default Theme;