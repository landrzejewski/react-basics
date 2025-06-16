import {CORE_CONCEPTS, EXAMPLES} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {useState} from "react";

function App() {
    // let selectedTab = 'None';

    const [selectedTab, setSelectedTab] = useState(0);

    function onTabSelected(index) {
        // selectedTab = index;
        // setSelectedTab((lastIndex) => index);
        setSelectedTab(index);
    }

    return (
        <>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Computer Fundamentals</h2>
                    <ul>
                        {
                            CORE_CONCEPTS.map(item => (
                                <CoreConcept key={item.title} {...item}/>
                            ))
                        }
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={()=> onTabSelected(0)}>Hardware</TabButton>
                        <TabButton onSelect={()=> onTabSelected(1)}>Software</TabButton>
                        <TabButton onSelect={()=> onTabSelected(2)}>Networking</TabButton>
                        <TabButton onSelect={()=> onTabSelected(3)}>Security</TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTab].title}</h3>
                        <p>{EXAMPLES[selectedTab].description}</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App;