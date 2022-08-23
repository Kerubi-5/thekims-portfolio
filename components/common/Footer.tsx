import { Container } from "components/ui";

const Footer = () => {
  return (
    <footer className="sticky bottom-0">
      <Container className="text-center py-5">
        <p>&copy; {new Date().getFullYear()} - KK</p>
      </Container>

      <style jsx>{`
        footer::after {
          content: "";
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          pointer-events: none;
          background-image: linear-gradient(
            180deg,
            hsla(255, 100%, 100%, 0),
            hsla(255, 100%, 100%, 0.9) 50%
          );
          width: 100%;
          height: 10rem;
          z-index: -1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
