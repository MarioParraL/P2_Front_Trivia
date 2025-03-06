import { useSignal } from "@preact/signals";
export default function Respuesta(props: { correctAnswer: string }) {
  const answer = useSignal("");
  return (
    <section>
      <input
        type="text"
        name="answer"
        placeholder="Campo de texto para la respuesta"
        class="rectangulo"
        value={answer.value}
        onInput={(e) => {
          answer.value = e.currentTarget.value.toLowerCase();
        }}
      />

      <button
        class="miboton"
        onClick={() => {
          if (answer.value === props.correctAnswer.toLowerCase()) {
            window.location.href = "/acierto";
          } else {
            window.location.href = "/fallo";
          }
        }}
      >
        Enviar
      </button>
    </section>
  );
}
