import tw from 'twin.macro';
import styled from 'styled-components';
import './App.css';

const Container = tw.div`

`;
const Text = styled.span`
  color: red;
`;
function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
      <Container>
        <Text>Hello world</Text>
      </Container>
    </div>
  );
}

export default App;
