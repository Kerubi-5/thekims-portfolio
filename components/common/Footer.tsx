import { Container } from "components/ui";

const Footer = () => {
  return (
    <footer>
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} - KK</p>
      </Container>
    </footer>
  );
};

export default Footer;
