const ProductsCard = () => {
  return (
    <>
      <div className="max-w-72">
        <div className="flex justify-center flex-col align-middle items-center space-y-2">
          <div className="bg-white p-5 h-96 w-72 rounded-md flex justify-center flex-col align-middle">
            <img src="/logo.png" alt="product1" />
          </div>
          <div className="w-full">
            <div className="flex justify-between flex-row align-middle">
              <p className="text-[#383838]">Short Description</p>
              <div className="rounded-full px-2 text-center text-yellow-600 bg-yellow-500/30">
                20% Off
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
