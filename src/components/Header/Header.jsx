// here, reactImg is just the name that we assigned to the image we are importing
// since in normal JS, we can't import images, when we will build our app, react takes care of that
import reactImg from "../../assets/react-core-concepts.png";
// here, we'll import the Header.css which contains only the css related to this component
// PS: The problem with this is that the Header css file is not scoped, meaning, if we add a header to another component, it'll get the  styling even without that component being here in this file. Just something to be aware of
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(3)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
