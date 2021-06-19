import { Link } from 'react-router-dom';
import { Container, Wrapper } from './styles';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">FilmesActions</Link>

        <button type="button">Salvos</button>
      </Wrapper>
    </Container>
  );
}