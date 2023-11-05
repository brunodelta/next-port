import { Typewriter } from "react-simple-typewriter";

export default function Cover() {
  return (
    <section className="h-[95vh]">
      <div className="flex justify-center items-center border-b-2 border-white/10 bg-repeat-round h-full bg-[url(/terra-bw-b.jpg)]">
        <h2 className="font-bold mt-40 text-5xl">
          <Typewriter words={["Criando um mundo de possibilidades..."]} />
        </h2>
      </div>
    </section>
  );
}
