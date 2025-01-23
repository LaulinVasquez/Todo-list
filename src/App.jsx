import { Container, Title, Typography } from "./components";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import TodoList from "./components/TodoList/TodoList";
import Card from "./components/Card/Card";

function App() {
  return (
    <Container>
      <Title />
      <Typography fontSize={28} bold marginTop={"38px"} marginBottom={"17px"}>
        List of Task
      </Typography>
      {/* Create another container that a uses flex row to create spaces for the progress container */}
      <Container flex >
        <TodoList />
        <Card col>
          <Typography fontSize={20} bold>
            Progress:
          </Typography>
          <ProgressBar progress={"60%"}/>
        </Card>
      </Container>
    </Container>
  );
}

export default App;
