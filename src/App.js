import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Headings from "./Components/Headings/Headings";

function App() {

    //https://dev.deepthought.education/assets/uploads/files/others/project.json
    return <div>
        <Header/>
        <div className={"app"}>
            <Sidebar/>
            <Headings/>
        </div>
    </div>
}

export default App;
