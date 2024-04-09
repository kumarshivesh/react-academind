import './index.css'
import Todo from './Todo';

// don't remove the export keyword here!
export const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

// don't change the Component name "App"
export default function App() {
  return (
   <Todo todos={DUMMY_TODOS} />
  )

}
