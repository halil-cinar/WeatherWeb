import HomeContainer from "@/containers/home";
import React from "react";
import weatherMockData from "../../mocks/weather.json";
import cityBackground from "../../images/city.jpg";
//import background from "../../images/background.jpg";
import { getCurrentWeather, getForecastWeather } from "../../services/weather";
import { searchImage } from "@/services/pexel";
export default async function Page({ params, searchParams }) {
  let lang = "tr";
  let loc = "";
  if (searchParams.q) {
    loc = searchParams.q;
  } else {
    loc = "istanbul";
  }
  let [{ forecast, location, current,air_quality }] = await Promise.all([
    getForecastWeather({q:loc,lang}),
  ]);
  let [leftPanelBackground, background] =
    await Promise.all([
      searchImage({
        query: loc+" historical",
        landscape: false,
        portrait: true,
        count: 20,
      }),
      searchImage({
        query: `forest mountains ${current?.condition?.text} ${current?.is_day==0?"night":"day"}  screensaver`,
        landscape: true,
        portrait: false,
        count: 20,
      }),
    ]);
//console.log(await getForecastWeather("kayseri").current)
const createRandomInt=(max,min=0)=>{
  return Math.floor(Math.random()*(max-min)+min)
}

  return (
    <div>
      <HomeContainer
        leftPanelBackground={leftPanelBackground?.at(createRandomInt(leftPanelBackground.length))?.src?.portrait}
        background={background?.at(createRandomInt(background.length))?.src?.landscape}
        location={location}
        current={current}
        forecast={forecast}
      />
    </div>
  );
}
