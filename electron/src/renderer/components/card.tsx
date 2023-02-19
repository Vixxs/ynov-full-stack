import clsx from 'clsx';
import React from 'react';

export interface CardProps {
  className: string;
  name: string;
  price: number;
  image: string;
}
const Card : React.FC<CardProps> = ({ className, name, price, image }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center rounded-lg bg-white custom-shadow-card w-full',
        className
      )}
    >
      <img src={image} alt="image" className="h-32 w-full object-cover rounded-t-lg" />
      <div className="flex flex-row items-start justify-between w-full p-4 ">
        <h1 className="text-lg uppercase font-bold w-1/2">FERRARI 458 SPECIALE APERTA</h1>
        <span className="font-[Abel]">à partir de
          <span className="font-bold text-red"> {price} €</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
