import {
  Container,
  Title,
  Typography,
  Card,
  TodoList,
  Form,
  ProgressBar,
  CategoriesList
} from "./components";
import { useSelector } from "react-redux";

function App() {
  const { todos } = useSelector((state) => state.todos)
  console.log(todos);
  return (
    <Container>
      <Title />
      <Typography fontSize={28} bold marginTop={"38px"} marginBottom={"17px"}>
        List of Task
      </Typography>
      {/* Create another container that a uses flex row to create spaces for the progress container */}
      <Container flex>
        <TodoList />
        <Container flexcol>
          <Card col>
            <Typography fontSize={20} bold>
              Progress:
            </Typography>
            <ProgressBar progress={"60%"} />
          </Card>
          <Form />
        </Container>
      </Container>
      <CategoriesList/>
    </Container>
  );
}

export default App;
