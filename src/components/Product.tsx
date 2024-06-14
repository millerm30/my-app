import { ProductProps } from '../../types';

const Product = ({title, image, price, rating}: ProductProps) => {
  return (
    <div className="flex flex-col items-center justify-end m-3 p-5 w-full max-h-[400px] min-w-[100px] bg-white z-0">
      <div className="h-[100px] mb-[24px] w-full">
        <p>{title}</p>
        <p className="mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill("⭐")
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="max-h-[200px] w-full object-contain mb-4" />
      <button className="bg-[#f0c14b] border-[1px] border-solid mt-2 text-[#111] border-[#846a29]">
        Add to Basket
      </button>
    </div>
  );
}

export default Product