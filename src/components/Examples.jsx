import TabButton from "./TabButton.jsx";
import {useState} from "react";
import {EXAMPLES} from "../data.js";

function Examples() {
    const [selectedTab, setSelectedTab] = useState();

    function onTabSelected(index) {
        setSelectedTab(index);
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTab !== undefined) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
            </div>
        );
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    onSelect={() => onTabSelected(0)}
                    isSelected={selectedTab === 0}>
                    Hardware
                </TabButton>
                <TabButton
                    onSelect={() => onTabSelected(1)}
                    isSelected={selectedTab === 1}>
                    Software
                </TabButton>
                <TabButton
                    onSelect={() => onTabSelected(2)}
                    isSelected={selectedTab === 2}>
                    Networking
                </TabButton>
                <TabButton
                    onSelect={() => onTabSelected(3)}
                    isSelected={selectedTab === 3}>
                    Security
                </TabButton>
            </menu>
            {tabContent}
        </section>
    )
}

export default Examples;