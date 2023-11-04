import Image from "next/image";

export type Skill = {
  title: string;

  imageProperties: {
    src: string;
    width?: number;
    height?: number;
  };
};

export default function SkillsList({ skillList }: { skillList: Skill[] }) {
  return (
    <ol className="flex justify-around p-3 text-stone-300">
      {skillList.map(({ title, imageProperties }, index) => (
        <li key={index} className="flex flex-col items-center">
          <Image
            className="transition duration-300 hover:scale-125 cursor-pointer"
            src={imageProperties.src}
            width={imageProperties?.width ?? 96}
            height={imageProperties?.height ?? 96}
            alt={title.toLowerCase()}
          />

          <h4 className="font-semibold">{title}</h4>
        </li>
      ))}
    </ol>
  );
}
