import "./footer.css";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div className="bg-light">
      <Container>
        <footer className="d-flex flex wrap align-items-center justify-content-between col-12 py-2 my-2">
          {" "}
          <a href="https://www.solarisesolar.com/">
            <img className="img" src="./src/assets/Full_logo.png"></img>
          </a>
          <span class="text-muted m-2">Copyright 2024 © Solarise Solar</span>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;
