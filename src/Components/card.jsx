import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./imagem/logo.jpeg" />
      <Card.Body>
        <Card.Title>Nossa Aplicação em React</Card.Title>
        <Card.Text>
        React faz com que a criação de UIs interativas seja 
        uma tarefa fácil. Crie views simples para cada estado 
        na sua aplicação, e o React irá atualizar e renderizar 
        de forma eficiente apenas os componentes nec
        </Card.Text>
        <Button variant="primary">Clique aqui!!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;