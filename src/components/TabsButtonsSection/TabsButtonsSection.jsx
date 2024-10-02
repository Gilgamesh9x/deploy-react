// props.children: This is a prop that is set by React and it's a prop that's not set by the help of attributes passed to the component
// It simply refers to the content between the component's tag: <TabButton>Components</TabButton>
// PS: We should understand that, for example, the button in the return below is actually just a component that's already available by React
// Also below, we added an event listener "onClick" which has a function that we'll call when the event happens
// PS: the params in TabButton is just destructuring the props object
import { useState } from "react";
import { EXAMPLES } from "../../data";

function TabButton({ children, onSelect, isSelected }) {
  // Let's explain how the className works
  // When you add className, the className is added to all elements, but we only want the selected button to have the class active
  // Because of the condition we did in assigning the prop below, only the prop isSelected that returns true, will have that class
  // so in each state, there is one item that is true which will have the class active. And the others, will have an empty class
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
export default function TabsButtonsSection() {
  // useState() does accept an argument which is the default value you want React to store and use when this component is first rendered
  // the useState() will return a value (an array) that includes two elements. The first is what you passed in the userState and the second is a function (look at the Manage state pic)
  // the state will change (the tabsButtonSection will be rendered again when the setSelectedTopic is called and we'll use the new value we passed in the argument to change the old state)
  const [selectedTopic, setSelectedTopic] = useState();
  // selectedTopic is the value passed to the useState

  function handleSelect(selectedButton) {
    // selectedButton => it could be: "components", "jsx", "props", "state" (these are our identifiers that will identify which button was clicked)
    setSelectedTopic(selectedButton); // this will change the state (will render the TabsButtonsSection again) and the new value is the one we passed in the argument
  }
  // Here, if the useState has no arguments, that means the selectedTopic will be undifined and we'll render tabCOntent that has a <p>
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  // here, the onSelect is just an attribute which we gave the value of a function to. Now, in our props, the onSelect will have the value of handleClick

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}

// Summary:

// When the paged is laoded, the buttons are created and there is no tab content because the state hasn't changed
// When the user click on a button, he triggers to change the state and with that, the selected topic will be valid and therefore 1 button will be styled and the tab content will be changed
