import Header from "../pages/header/Header"
function Layout({ children }: { children: any }) {
    return (
        <div>
            <Header/>
           {children}
        </div>
    )
}
export default Layout