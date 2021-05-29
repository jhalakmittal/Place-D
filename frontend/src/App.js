import {Route , Switch} from "react-router-dom";
import Signinout from './Container/Siginout';
import Interviewexp from './Component/Interviewexp';
import Forgotpassword from './Component/Forgotpassword';
import Updatepassword from './Component/Updatepassword';
import App1 from "./App copy";
import BasicForms from './components/pages/BasicForms';
import Dboard from './components/pages/Dboard';
import Dashboard2 from './components/pages/Dashboard2';
import Cquestion from "./Component/Cquestion";
import Company from './Component/Company';
import CreatePost from "./Component/CreatePost";
import DetailPage from './Component/DetailPage';
import EditPost from './Component/EditPost';
import Home from './components/pages/Home';
import Login from './Component/Login';
import './App.css';
import ComEdit from "./components/pages/com-edit";
import Cards from "./Component/company-cards";
import EditCom from "./components/pages/com-edit";
import EditCompany from "./Component/com-edit-form";
import Ccontent from "./Component/com-add-content";
import AForm from "./components/pages/admn-form";
import EditAnnouncement from "./components/pages/anc-edit";
// import DoubtPortal from './Component/DoubtPortal'
import Homes from "./Component/index.jsx";
import Create from "./Component/create.jsx";
import Question from "./Component/question";
function App() {
  return (
    <div className="App">
      {/* <App1/> */}
    <Switch>
    {/* <Interviewexp></Interviewexp> */}
    {/* <Forgotpassword></Forgotpassword> */}
    <Route exact path = "/home" component = {Homes} />
    <Route exact path="/" exact component={Signinout}/>
    <Route exact path="/login" exact component={Login}/>
    <Route exact path="/admin/getexperience" component={Interviewexp}/>
    <Route exact path="/user/postforgotpassword" component={Forgotpassword}/>
    <Route exact path="/user/resetpassword/:id/:token" component={Updatepassword}/>
    <Route path='/user/home' exact component={Home}/>
    <Route exact path="/user/profile" exact component={BasicForms}/>
    <Route exact path="/user/dashboard" exact component={Dboard}/> 
    <Route exact path="/user/pdashboard" exact component={Dashboard2}/>
    <Route exact path="/user/pdashboard/questions" exact component={Cquestion}/>
    <Route exact path="/user/pdashboard/company" exact component={Company}/>
    <Route path="/posts/:id" component={DetailPage} />
    <Route path="/add" component={CreatePost} />
    <Route path="/edit/:id" component={EditPost} />
    <Route path="/user/company/edit/:id" exact component={EditCompany}/>
    <Route path="/user/company/add" exact component={Ccontent}/>
    <Route path="/user/announcement/add" exact component={AForm}/>
    <Route path="/user/announcement/edit/:id" exact component={EditAnnouncement}/>
    {/* <Route path="/doubtPortal" component={DoubtPortal} /> */}
    <Route path = "/create" component = {Create} />
            <Route path = "/question/:questionId" component = {Question} />

    </Switch>
     </div>
  );
}

export default App;