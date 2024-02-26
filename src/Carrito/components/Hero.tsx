import { FC, useState } from "react";
import { useAppDispatch } from "../data/hook";
import { searchCourse } from "../data/cursosSlice";

interface HeroProps {}
const Hero: FC<HeroProps> = ({}) => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();

  const searchingCourse = (e: any) => {
    setSearch(e.target.value);

    dispatch(
      searchCourse({
        search: e.target.value,
      })
    );
  };

  return (
    <>
      <div id="hero">
        <div className="container">
          <div className="row">
            <div className="six columns">
              <div className="contenido-hero">
                <h2>Aprende algo nuevo</h2>
                <p>Todos los cursos a $15</p>
                <form
                  action="#"
                  id="busqueda"
                  method="post"
                  className="formulario"
                >
                  <input
                    className="u-full-width"
                    type="text"
                    placeholder="¿Que te gustaría Aprender?"
                    id="buscador"
                    onChange={searchingCourse}
                    value={search}
                    style={{
                      color: "#000",
                    }}
                  />
                  <input
                    type="submit"
                    id="submit-buscador"
                    className="submit-buscador"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
