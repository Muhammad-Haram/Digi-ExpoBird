import styles from "../style";
import Button from "../components/Button";
import Image from "next/image";

const DigitalHero = ({ text1, para1 }) => (
  <section
    className={` ${styles.flexCenter} aboutus-digiexpo flex-col flex-wrap sm:mb-10`}
  >
    <div className="text-center">
      <h1 className={`${styles.heading1} font-montserrat max-w-[800px]`}>
        {text1}
      </h1>
    </div>
    <div className="text-center my-8">
      <p className={`${styles.paragraph} font-montserrat max-w-[800px] p-[20px]`}>
        {para1}
      </p>
    </div>
    <Button buttonText={"Let's Talk"} />
    <div className="sm:ml-[20px] sm:mb-[40px] sm:mt-[40px] md:mt-10 mx-auto mt-10 ">
      <div className="gap-20 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-3 sm:flex-wrap  md:grid md:grid-cols-3 sm:gap-10 flex items-center justify-center">
        <Image
          src={"/assets/partner05.png"}
          height={25}
          width={150}
          alt="pic"
        />
        <Image src={"/assets/partner02.png"} height={25} width={89} alt="pic" />
        <Image
          src={"/assets/partner06.png"}
          height={35}
          width={119}
          alt="pic"
        />
        <Image
          src={"/assets/partner01.png"}
          height={31}
          width={124}
          alt="pic"
        />
        <Image
          src={"/assets/partner01.png"}
          height={32}
          width={125}
          alt="pic"
        />
        <Image
          src={"/assets/partner03.png"}
          height={33}
          width={126}
          alt="pic"
        />
      </div>
    </div>
  </section>
);

export default DigitalHero;
