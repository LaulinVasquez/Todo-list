import {
  Container,
  Title,
  Typography,
  Card,
  TodoList,
  Form,
  ProgressBar,
  CategoriesList,
  Background,
} from "./components";
import { useSelector } from "react-redux";

function App() {
  const { category } = useSelector((state) => state.todos);

  return (
    // <Background>
      <Container>
        <Title />
        <Typography fontSize={28} bold marginTop={"38px"} marginBottom={"17px"}>
          List of{" "}
          <span style={{ textTransform: "capitalize" }}>{category}</span> Task
        </Typography>
        {/* Create another container that a uses flex row to create spaces for the progress container */}
        <Container flex>
          <TodoList />
          <Container flexcol>
            <Card col>
              <Typography fontSize={20} bold>
                Progress:
              </Typography>
              <ProgressBar />
            </Card>
            <Form />
          </Container>
        </Container>
        <CategoriesList />
      </Container>
    // </Background>
  );
}

export default App;
