import computerImage from './assets/computer-tech.svg'
import {CORE_CONCEPTS} from "./data.js";
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

function CoreConcept({title, description}) {
    return (
        <div>
            <li>
                <h3>{title}</h3>
                <p>{description}</p>
            </li>
        </div>
    )
}

/*function CoreConcept(props) {
    return (
        <div>
            <li>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </li>
        </div>
    )
}*/

function App() {
    return (
        <>
            <Header/>
            <main>
                <section id="core-concepts">
                    <ul>
                        {/*<CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>*/}
                        {
                            CORE_CONCEPTS.map(item  => (
                                <CoreConcept key={item.title} {...item}/>
                            ))
                        }
                    </ul>
                </section>
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