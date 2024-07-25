import Image from "next/image";

// Styles
import "./styles/global.css";

// Components
import Nav from "./components/Nav";
import Button from "./components/Button";

export default function Home() {
  return (
    <body className="flex flex-col items-center min-h-screen">
      {/* Background Images */}

      <div className="relative w-full h-full">
        <Image
          alt="Pink Rectangle Background"
          src="/img/Rectangle_4.png"
          width={530}
          height={271}
          className="absolute top-0 right-0 z-[-1] w-[50%] md:w-[40%] lg:w-[30%] h-auto"
        />
        <Image
          alt="Pink Rectangle Background"
          src="/img/Rectangle_5.png"
          width={910}
          height={778}
          className="absolute top-0 left-0 z-[-1] w-[80%] md:w-[60%] lg:w-[60%] h-auto"
        />
      </div>

      {/* Nav */}

      <header className="flex justify-center items-center p-6">
        <Nav />
      </header>

      {/* Join Us */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center items-center w-full">
        <div className="container md:w-1/2 size-min justify-center text-left m-4">
          <p className="text-lg pb-5">Join Us</p>
          <h1 className="text-6xl font-bold my-4 pb-5">
            25K+ STUDENTS TRUST US
          </h1>
          <p className="text-base pb-5">
            Every day brings with it a fresh set of learning possibilities.
          </p>
          <div className="mt-4 space-x-4">
            <Button label="Join Us"></Button>
            <Button label="Learn More" background="transparent"></Button>
          </div>
        </div>
        <div className="container w-full size-max justify-items-center items-center m-4">
          <Image
            alt="girl with books"
            src={"/img/girl-homePage.png"}
            width={904}
            height={882}
            className="object-contain"
          />
        </div>
      </section>

      <section></section>
    </body>
  );
}
