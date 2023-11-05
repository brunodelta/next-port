import Image from "next/image";
import Link from "next/link";

type Contact = {
  content: string;
  link: string;

  imageProperties: {
    alt: string;
    src: string;
    width?: number;
    height?: number;
  };
};

const contacts: Contact[] = [
  {
    content: "brunodaviandrade2000@gmail.com",
    link: "mailto:brunodaviandrade2000@gmail.com",

    imageProperties: {
      alt: "email",
      src: "/email.svg",
      width: 24,
      height: 24
    },
  },

  {
    content: "11 98736 4471",
    link: "https://wa.me/5511987364471",

    imageProperties: {
      alt: "whatsapp",
      src: "/whatsapp.svg",
    },
  },

  {
    content: "GitHub",
    link: "https://github.com/brunodavi",

    imageProperties: {
      alt: "github-icon",
      src: "/github.svg",
    },
  },

  {
    content: "Linkedin",
    link: "https://linkedin.com/in/brunodavi",

    imageProperties: {
      alt: "linkedin-icon",
      src: "/linkedin.svg",
    },
  },
];

export default function Contacts() {
  return (
    <section className="my-2 p-2 pt-16" id="contato">
      <h3 className="text-2xl font-semibold">Contato</h3>

      <ol className="flex flex-col justify-around h-36 p-3 text-stone-300">
        {contacts.map((contact, index) => (
          <li key={index} className="flex space-x-2">
            <Image
              src={contact.imageProperties.src}
              width={contact?.imageProperties?.width ?? 20}
              height={contact?.imageProperties?.height ?? 20}
              alt={contact.imageProperties.alt}
            />
            <Link
              className="font-semibold hover:underline"
              href={contact.link}
              target="_blank"
            >
              {contact.content}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
