const getCity = async (cityName: string) => {
  try {
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/geo/1.0/direct?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await resp.json();

    if (!data) {
      throw new Error("No se encontro ciudad");
    }
    console.log(data[0], "data buscada");
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

export interface Coords {
  lat: string;
  lng: string;
}

const getWheater = async (coordinates: Coords) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    const data = await res.json();

    if (!data) {
      throw new Error("no se encontro el clima de la ciudad");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPollution = async (coordinates: Coords) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/data/2.5/air_pollution?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=${process.env.REACT_APP_API_KEY}`
    );

    const data = await res.json();

    if (!data) {
      throw new Error("no se encontro el clima de la ciudad");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMap = async () => {
  try {
    const res = await fetch(
      `https://tile.openweathermap.org/map/pressure_new/3/3/3.png?appid=${process.env.REACT_APP_API_KEY}`
    );

    const data = await res.json();

    if (!data) {
      throw new Error("no se encontro el clima de la ciudad");
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getCity, getWheater, getPollution };
