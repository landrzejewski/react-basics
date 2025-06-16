import computerImage from './assets/computer-tech.svg'
// import {Fragment} from "react";

const prefixes = ['Fundamental', 'Core', 'Main'];

function getRandomPrefix() {
    const index = Math.floor(Math.random() * (3));
    return prefixes[index];
}

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={computerImage} alt="Computer"/>
            </div>
            <h1>Computer Technology</h1>
            <p>
                {getRandomPrefix()} computer concepts you will need to understand modern
                computing systems!
            </p>
        </header>
    );
}

function App() {
    return (
        <>
           <Header/>
           <main>
               <h2>Main section</h2>
           </main>
        </>
    )
}

/*function App() {
    return (
        <Fragment>
            <div>1</div>
            <div>2</div>
        </Fragment>
    )
}*/

export default App;