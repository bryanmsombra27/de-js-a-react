import { FC } from "react";

interface FooterProps {}
const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer
      id="footer"
      className="footer"
    >
      <div className="container">
        <div className="row">
          <div className="four columns">
            <nav
              id="principal"
              className="menu"
            >
              <a
                className="enlace"
                href="#"
              >
                Para tu Negocio
              </a>
              <a
                className="enlace"
                href="#"
              >
                Conviertete en Instructor
              </a>
              <a
                className="enlace"
                href="#"
              >
                Aplicaciones Móviles
              </a>
              <a
                className="enlace"
                href="#"
              >
                Soporte
              </a>
              <a
                className="enlace"
                href="#"
              >
                Temas
              </a>
            </nav>
          </div>
          <div className="four columns">
            <nav
              id="secundaria"
              className="menu"
            >
              <a
                className="enlace"
                href="#"
              >
                ¿Quienes Somos?
              </a>
              <a
                className="enlace"
                href="#"
              >
                Empleo
              </a>
              <a
                className="enlace"
                href="#"
              >
                Blog
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
