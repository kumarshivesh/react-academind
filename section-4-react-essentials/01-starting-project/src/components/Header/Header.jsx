import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
// The `getRandomInt()` function  is used to generate a random integer between `0` and `max` (inclusive). So, at the end of function, we can use that number to produce random index to produce random words.
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
    <header>
      {/* Important: While using the dynamic value expression for attribute values is that you do not use quotes.For example, we don't use <img src="{reactImg}" alt="Stylized atom" />. That is   */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}