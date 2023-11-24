import { Provider as ReduxProvider } from 'react-redux'

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export function App() {
  
 return (
    <div>
        <ReduxProvider store={store}>
      <TodoList />
        <AddTodo />
        </ReduxProvider>
    </div>
  )
}


