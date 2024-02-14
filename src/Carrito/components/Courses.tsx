import { FC } from "react";
import estrellas from "../img/estrellas.png";
import curso1 from "../img/curso1.jpg";
import curso2 from "../img/curso2.jpg";
import curso3 from "../img/curso3.jpg";
import curso4 from "../img/curso4.jpg";
import curso5 from "../img/curso5.jpg";
interface CoursesProps {}
const Courses: FC<CoursesProps> = ({}) => {
  return (
    <div
      id="lista-cursos"
      className="container"
    >
      <h1
        id="encabezado"
        className="encabezado"
      >
        Cursos En Línea
      </h1>
      <div className="row">
        <div className="four columns">
          <div className="card">
            <img
              src={curso1}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="1"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="card">
            <img
              src={curso2}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Curso de Comida Vegetariana</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="2"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="card">
            <img
              src={curso3}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Guitarra para Principiantes</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="3"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="four columns">
          <div className="card">
            <img
              src={curso4}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Huerto en tu casa</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="4"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="card">
            <img
              src={curso5}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Decoración con productos de tu hogar</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="5"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="card">
            <img
              src={curso1}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Diseño Web para Principiantes</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="6"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="four columns">
          <div className="card">
            <img
              src={curso2}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Comida Mexicana para principiantes</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="7"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="card">
            <img
              src={curso3}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Estudio Musical en tu casa</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="8"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="card">
            <img
              src={curso4}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Cosecha tus propias frutas y verduras</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="9"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="four columns">
          <div className="card">
            <img
              src={curso5}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>Prepara galletas caseras</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="10"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="card">
            <img
              src={curso1}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>JavaScript Moderno con ES6</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="11"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
        <div className="four columns">
          <div className="card">
            <img
              src={curso2}
              className="imagen-curso u-full-width"
            />
            <div className="info-card">
              <h4>100 Recetas de Comida Natural</h4>
              <p>Juan Pedro</p>
              <img src={estrellas} />
              <p className="precio">
                $200 <span className="u-pull-right ">$15</span>
              </p>
              <a
                href="#"
                className="u-full-width button-primary button input agregar-carrito"
                data-id="12"
              >
                Agregar Al Carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
