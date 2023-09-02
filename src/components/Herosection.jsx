import bingo from "../assets/images/bingo.png";
import lottery from "../assets/images/lottery.png";
// import LoginModal from "../common/LoginModal";
import CarousalSlider from "../common/CarousalSlider";

function Herosection() {
  const GamesData = [
    {
      image: bingo,
      heading: "Bingo",
      title: "Original",
    },
    {
      image: lottery,
      heading: "Lottery",
      title: "Original",
    },
    {
      image: bingo,
      heading: "Bingo",
      title: "Original",
    },
    {
      image: lottery,
      heading: "Lottery",
      title: "Original",
    },
  ];

  return (
    <>
      <div className="max-w-[1024px] px-4 m-auto text-white ">
        <CarousalSlider />
        <div className="mt-16">
          <h1 className="text-3xl">Available Games</h1>
          <div className="pt-11">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {GamesData.map((value, id) => {
                return (
                  <>
                    <div className=" rounded-[15px] bg-rhino" key={id}>
                      <img
                        src={value.image}
                        alt=""
                        className=" w-[100%] lg:w-72"
                      />
                      <div className="flex flex-col  items-center py-[5px]">
                        <span className="text-lg font-semibold">
                          {value.heading}
                        </span>
                        <span className="text-xs text-sky font-medium">
                          {value.title}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Herosection;
