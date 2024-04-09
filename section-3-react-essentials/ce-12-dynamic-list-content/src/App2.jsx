import './index.css'
import Todo2 from './Todo2';

// don't remove the export keyword here!
export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

// don't change the Component name "App"
export default function App2() {
  return (
    <ul>
      {DUMMY_TODOS.map((todo, index) => <Todo2 key={index} text={todo} />)}
    </ul>
  );
}
