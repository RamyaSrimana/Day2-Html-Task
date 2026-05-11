import Header from "./Header"
import Footer from "./Footer"
const Layout = ({children}) => {
     return(
        <div>
            <Header text = "My React App :)" style = {{textAlign : "center"}}  />
            <main style={{backgroundColor:"blue",border:"2px solid black", padding : "5px"}}>
                {children}
            </main>
            <Footer text = "@Footer" style = {{marginTop:"5px" , backgroundColor:"grey" , padding : "25px" , textAlign :"center"}}/>
        </div>
     )

}
export default Layout