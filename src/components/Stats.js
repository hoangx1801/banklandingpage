import styles from "../styles";
import { stats } from "../constants";

function Stats() {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold sm:text-[40px] tex-[30px] xs:leading-[50px] leading-[40px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-semibold sm:text-[20px] tex-[26px] xs:leading-[26px] leading-[20px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;