import { CORE_CONCEPTS } from "../../data";
import "./CoreConceptsSection.css";
function CoreConcept({ img, title, description } = props) {
  // we used destructuring instead of just putting props as a param and using props.img, etc.
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default function CoreConceptsSection() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}

// PS: Old way to render the CoreConcept component

{
  /* <CoreConcept
img={CORE_CONCEPTS[0].img}
title={CORE_CONCEPTS[0].title}
description={CORE_CONCEPTS[0].description}
/>
<CoreConcept {...CORE_CONCEPTS[1]} />
<CoreConcept {...CORE_CONCEPTS[2]} />
<CoreConcept {...CORE_CONCEPTS[3]} /> */
}
