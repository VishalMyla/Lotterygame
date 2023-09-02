function History() {
  return (
    <>
      <div className="max-w-[1024px] px-4 m-auto">
        <div className="py-14 text-center">
          <h1 className="text-5xl font-semibold text-white">History</h1>
        </div>
        <div className=" w-auto overflow-scroll flex justify-center  border border-white/[70%] text-white rounded-[5px]">
          <table className="w-full">
            <thead className="bg-rhino">
              <tr className="text-justify">
                <th className="py-3 pl-[69px]">Date</th>
                <th className="py-3 pl-[69px]">Amount</th>
                <th className="py-3  pl-[69px]">Deposit</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" text-sm sm:text-lg font-medium border-b ">
                <td className="py-[10px] pl-[69px]">10/08/2023</td>
                <td className="text-screamin pl-[69px]">+10,000</td>
                <td className="pl-[69px]">Transfer To Lottery Original</td>
              </tr>
              <tr className=" text-sm sm:text-lg  font-medium border-b ">
                <td className="py-[10px] pl-[69px]">10/08/2023</td>
                <td className="text-screamin pl-[69px]">+10,000</td>
                <td className="pl-[69px]">Transfer To Lottery Original</td>
              </tr>
              <tr className=" text-sm sm:text-lg  font-medium border-b ">
                <td className="py-[10px] pl-[69px]">10/08/2023</td>
                <td className="text-[#FF2D2D] pl-[69px]">+10,000</td>
                <td className="pl-[69px]">Transfer To Lottery Original</td>
              </tr>
              <tr className=" text-sm sm:text-lg font-medium border-b ">
                <td className="py-[10px] pl-[69px]">10/08/2023</td>
                <td className="text-screamin pl-[69px]">+10,000</td>
                <td className="pl-[69px]">Transfer To Lottery Original</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default History;
