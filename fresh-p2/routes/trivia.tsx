import Axios from "npm:axios";
import Respuesta from "../islands/respuesta.tsx";

type Data = {
  question: string;
  answer: string;
};

export default async function Home() {
  const API_KEY = Deno.env.get("API_KEY");
  if (!API_KEY) throw new Error("API_KEY ERROR");

  const response = await Axios.get<Data[]>(
    "https://api.api-ninjas.com/v1/trivia",
    {
      headers: { "X-API-KEY": "WyTKMVjkosMxFYGxVKBKLqjDrj1MWJgjIYzFRndE" },
    },
  );

  if (!response.data) {
    throw new Error("API NINJAS ERROR");
  }

  const pregunta = response.data[0].question;
  const respuesta = response.data[0].answer;
  return (
    <section>
      <h1 class="title">Trivia</h1>
      <p class="pregunta">{pregunta}</p>
      <Respuesta correctAnswer={respuesta} />
    </section>
  );
}
