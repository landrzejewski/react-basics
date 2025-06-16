import CoreConcept from './CoreConcept.jsx';
import {CORE_CONCEPTS} from '../data.js';
import Section from "./Section.jsx";

function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Computer Fundamentals" >
            <ul>
                {
                    CORE_CONCEPTS.map(item => (
                        <CoreConcept key={item.title} {...item}/>
                    ))
                }
            </ul>
        </Section>

    );
}

export default CoreConcepts;