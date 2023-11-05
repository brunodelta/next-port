import Image from "next/image";

type Skill = {
  title: string;

  imageProperties: {
    src: string;
    width?: number;
    height?: number;
  };
};

const skillList: Skill[] = [
  {
    title: "Python",
    imageProperties: {
      src: "/python.png",
    },
  },
  {
    title: "C#",
    imageProperties: {
      src: "/csharp.png",
    },
  },
  {
    title: "Microsoft Azure",
    imageProperties: {
      src: "/microsoft-azure.png",
    },
  },
  {
    title: "Docker",
    imageProperties: {
      src: "/docker.png",
    },
  },
  {
    title: "Node.js",
    imageProperties: {
      src: "/node.js.png",
    },
  },
  {
    title: "React.js",
    imageProperties: {
      src: "/react.js.png",
    },
  },
];

export default function Skills() {
  return (
    <section className="my-2 px-2 pt-16" id="habilidades">
      <h3 className="mb-2 text-2xl font-semibold">Habilidades</h3>

      <ol className="flex justify-around p-3 text-stone-300">
        {skillList.map(({ title, imageProperties }, index) => (
          <li
            key={index}
            className="flex flex-col items-center transition duration-300 hover:scale-125 cursor-pointer"
          >
            <Image
              src={imageProperties.src}
              width={imageProperties?.width ?? 96}
              height={imageProperties?.height ?? 96}
              alt={title.toLowerCase()}
            />

            <h4 className="font-semibold">{title}</h4>
          </li>
        ))}
      </ol>
    </section>
  );
}
