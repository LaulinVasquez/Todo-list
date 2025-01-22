import {Container, Title, Typography} from "./components";
import TodoList from "./components/TodoList/TodoList";
function App() {


  return (
    <Container>
      <Title/>
      <Typography fontSize={28} bold marginTop={"38px"}>
        List of Task
      </Typography>
      <TodoList />
    </Container>
  );
}

export default App
