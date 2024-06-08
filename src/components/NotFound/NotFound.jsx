import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <h1>Not Found</h1>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default NotFound;
