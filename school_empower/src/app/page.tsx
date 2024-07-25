import Image from "next/image";

// Styles
import "./styles/global.css";

// Components
import Nav from "./components/Nav";

export default function Home() {
  return (
    <body className="flex flex-col items-center min-h-screen">
      <Image
        alt="Pink Rectangle Background"
        src={"/img/Rectangle_4.png"}
        width={530}
        height={271}
        className="absolute top-0 right-0 z-[-1]"
      ></Image>
      <Image
        alt="Pink Rectangle Background"
        src={"/img/Rectangle_5.png"}
        width={910}
        height={778}
        className="absolute top-0 left-0 z-[-1]"
      ></Image>
      <header className="flex justify-center items-center p-6">
        <Nav />
      </header>
    </body>
  );
}
