import "./footer.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div className="bg-light">
      <Container>
        <footer className="d-flex flex wrap align-items-center py-2 my-2">
          {" "}
          <div className="d-flex align-items-center">
            <a
              href="https://www.solarisesolar.com/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img src="./src/assets/Small_Logo.png"></img>
            </a>
            <span class="text-muted">Copyright 2024 © Solarise Solar</span>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
