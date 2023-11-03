import logo from './logo.svg';
import mendon from './rahul.JPG';
import './App.css';
import StudentForm from './components/StudentForm/StudentForm';
import Resume from './components/StudentForm/resume';
function NavBar(){
  return <h1>Ladies & Gentlemen</h1>
}

function Banner(){
  return<h1>one and only</h1>
}

function GreetUser(props){
  return<h1>{props.name}</h1>
}

function Email(props){
  return<h2>My email is:{props.email} </h2>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={mendon}/>
        <NavBar></NavBar>
        <Banner></Banner>
        <GreetUser name="Welcome Bhupendar jogi"/>
        <Email email="rahulmendon6@gmail.com"/>
        <StudentForm/>
<p >Bhupendar Jogi</p>

       <Resume />
      </header>
    </div>
  );
}

export default App;
