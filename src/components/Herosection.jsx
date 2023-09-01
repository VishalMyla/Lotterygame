import bingo from "../assets/images/bingo.png";
import lottery from "../assets/images/lottery.png";
// import LoginModal from "../common/LoginModal";
import CarousalSlider from "../components/CarousalSlider";

function Herosection() {
  // let [isOpen, setIsOpen] = useState(true);

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

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }
  return (
    <>
      <div className="max-w-[1100px] m-auto text-white ">
        <CarousalSlider />
        <div className="mt-16">
          <h1 className="text-3xl">Available Games</h1>
          <div className="pt-11">
            <div className="grid grid-cols-4 gap-4">
              {GamesData.map((value, id) => {
                return (
                  <>
                    <div className=" rounded-[15px] bg-rhino" key={id}>
                      <img src={value.image} alt="" className="w-72" />
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
      {/* <div onClick={openModal} className="text-white">
        Open
      </div>
      <LoginModal isOpen={isOpen} closeModal={closeModal} /> */}
    </>
  );
}
export default Herosection;
