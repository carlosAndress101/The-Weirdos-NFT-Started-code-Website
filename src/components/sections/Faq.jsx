import styled from 'styled-components';

const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};

  margin:  1rem auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;

`;
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Box = styled.div`
width: 45%;
`
function Faq() {
  return (
    <Section>
    <Title>FAQ</Title>
    <Container>
    <Box>col1</Box>
    <Box>col2</Box>
    </Container>
    </Section>
  )
}

export default Faq