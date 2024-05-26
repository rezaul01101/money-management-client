import AmountCard from "@/components/cards/AmountCard";

const Home = () => {
  const expenses = [
    {
      id: 1,
      amount: 200,
      category: "Food & Drink",
    },
    {
      id: 2,
      amount: 1000,
      category: "Courses",
    },
    {
      id: 3,
      amount: 2000,
      category: "Shopping",
    },
    {
      id: 4,
      amount: 500,
      category: "Mobile Bill",
    },
  ];
  const incomes = [
    {
      id: 1,
      amount: 40000,
      category: "Salary",
    },
    {
      id: 2,
      amount: 5000,
      category: "P. Projects",
    },
  ];
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center mt-20">
      <div className="sm:w-[30vw] w-full px-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full sm:h-[200px] h-[160px] bg-blue-500 flex flex-col items-center justify-center rounded-[50%]">
            <span className="font-bold sm:text-4xl text-3xl text-white">
              ৳2000
            </span>
            <span className=" text-theme-yellow-500 text-sm">Balance</span>
          </div>
          <div className="flex flex-col justify-around">
            <h1 className="font-bold text-xl">This Month</h1>
            <div>
              <div className="px-2 py-2 bg-theme-yellow-600 rounded-md mb-3">
                <p className="text-sm">Income</p>
                <h1 className="text-xl">৳ 2000</h1>
              </div>
              <div className="px-2 py-2 bg-theme-red-600 rounded-md text-white">
                <p className="text-sm">Expense</p>
                <h1 className="text-xl">৳ 2000</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div className="text-center flex justify-between items-center bg-theme-red-600 p-2 rounded-md text-white">
            <p className="">This Month</p>
            <p className="">Expense ৳2300</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {expenses.map((expense) => (
              <AmountCard
                key={expense?.id}
                amount={expense?.amount}
                category={expense?.category}
              />
            ))}
          </div>
        </div>
        <div className="mb-20 mt-4">
          <div className="text-center flex justify-between items-center bg-theme-yellow-600 p-2 rounded-md text-black">
            <p className="">This Month</p>
            <p className="">Income ৳1300</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {incomes.map((expense) => (
              <AmountCard
                key={expense?.id}
                amount={expense?.amount}
                category={expense?.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
