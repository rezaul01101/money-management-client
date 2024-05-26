interface cardType {
  amount: number;
  category: string;
}
const AmountCard = ({ amount, category }: cardType) => {
  return (
    <div className=" bg-theme-yellow-500 py-3 flex flex-col items-center h-[120px] justify-center rounded-md">
      <p className="sm:text-xl">৳{amount}</p>
      <p className="text-sm text-center">{category}</p>
    </div>
  );
};

export default AmountCard;
