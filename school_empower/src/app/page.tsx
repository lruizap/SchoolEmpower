import Image from "next/image";

// Styles
import "./styles/global.css";

// Components
import Nav from "./components/Nav";
import Button from "./components/Button";
import CardCourse from "./components/CardCourse";
import CardPackages from "./components/CardPackages";

export default function Home() {
  return (
    <body className="gird grid-cols justify-center items-center min-h-screen">
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
          className="absolute top-0 left-0 z-[-1] w-[80%] md:w-[60%] lg:w-[58%] h-auto"
        />
      </div>

      {/* Nav */}

      <header className="grid p-6">
        <Nav />
      </header>

      {/* Join Us */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center items-center w-full lg:mb-40">
        <div className="container size-1/2 justify-center text-left m-4">
          <p className="text-lg pb-5">Join Us</p>
          <h1 className="text-6xl font-bold my-4 pb-5 text-balance">
            25K+ STUDENTS TRUST US
          </h1>
          <p className="text-base pb-5">
            Every day brings with it a fresh set of learning possibilities.
          </p>
          <div className="mt-4 space-x-4 space-y-4">
            <Button label="Join Us"></Button>
            <Button label="Learn More" background="transparent"></Button>
          </div>
        </div>
        <div className="w-full size-max justify-items-center items-center m-4">
          <Image
            alt="girl with books"
            src={"/img/girl-homePage.png"}
            width={904}
            height={882}
            className="object-contain"
          />
        </div>
      </section>

      {/* Most popular courses */}

      <section className="grid grid-flow-row my-40 w-full md:py-10">
        <div className="grid grid-rows-1 justify-center items-center text-center gap-4 space-y-40 p-5">
          <div className="grid grid-rows-1">
            <p className="text-[#8D5CF6] text-lg font-semibold">
              Practice Advice
            </p>
            <h2 className="text-4xl font-bold my-4 pb-5">
              Most Popular Courses
            </h2>
            <p className="text-balance">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid grid-rows-1 justify-center items-center -my-5">
            <div className="grid md:grid-cols-2 md:space-x-6 md:space-y-0 space-y-6">
              <div className="flex justify-center">
                <CardCourse
                  icon="/svg/icon-school.svg"
                  label="Expert instruction"
                  description="The gradual accumulation and small-scale..."
                />
              </div>
              <div className="flex justify-center">
                <CardCourse
                  icon="/svg/icon-book_brain.svg"
                  label="2,769 online courses"
                  description="The gradual accumulation and small-scale..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Popular Courses */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 my-40 w-full md:py-10">
        <div className="flex container justify-center items-center m-4">
          <Image
            alt="girl with scores"
            src={"/img/girl-scores.png"}
            width={556}
            height={504}
            className="object-contain"
          />
        </div>
        <div className="flex justify-center items-center m-4">
          <div className="md:w-1/2 size-1/2 text-left">
            <Image
              alt="orange divider"
              src={"/svg/orange-separator.svg"}
              width={94}
              height={7}
            />
            <h1 className="text-4xl font-bold my-4 py-5 text-balance">
              Our Popular Courses
            </h1>
            <p className="text-base py-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <div className="mt-4">
              <Button
                label="Learn More"
                textColor="text-[#8D5CF6]"
                border="transparent"
                background="transparent"
                arrow
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approdable Packages */}
      <section className="grid grid-flow-row my-40 w-full md:py-10">
        <div className="grid grid-rows-1 justify-center items-center text-center gap-4 space-y-40 p-5">
          <div className="grid grid-rows-1">
            <p className="text-[#8D5CF6] text-lg font-semibold">
              Practice Advice
            </p>
            <h2 className="text-4xl font-bold my-4 pb-5">
              Affordable Packages
            </h2>
            <p className="text-balance">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="grid">
            <CardPackages
              description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              image="/img/product-cover-1.png"
              price="16,48"
              rating="4,9"
              salePrice="6,48"
              sales="15"
              title="Training Courses"
            ></CardPackages>
            <CardPackages
              description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
              image="/img/product-cover-1.png"
              price="16,48"
              rating="4,9"
              salePrice="6,48"
              sales="15"
              title="Training Courses"
            ></CardPackages>
          </div>
        </div>
      </section>
    </body>
  );
}
