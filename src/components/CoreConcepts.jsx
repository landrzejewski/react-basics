import CoreConcept from './CoreConcept.jsx';
import {CORE_CONCEPTS} from '../data.js';

function CoreConcepts() {
    return (
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
    );
}

export default CoreConcepts;