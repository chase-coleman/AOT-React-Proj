const Card = ( {imgSrc, title, firstItem, secondItem, thirdItem, fourthItem, fifthItem}) => {
  return (
    <div className="card w-full h-full bg-black">
      <img src={imgSrc} className="card-img-top border-4 border-black object-center object-contain w-9/10 h-6/10" alt="..." />
      <div className="card-body">
        <h5 className="card-title m-[2vh] border-2 border-black text-white bg-black
        w-9/10 h-3/10 text-[1rem] truncate overflow-hidden">{title}</h5>
        <p className="card-text m-[0.5rem] border-2 border-black text-white bg-black
         w-9/10 h-3/10 text-[1rem] ">
          {firstItem}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item m-[0.5rem] border-2 border-black text-white bg-black 
        w-9/10 h-3/10 text-[1rem] text-ellipsis">{secondItem}</li>
        <li className="list-group-item m-[0.5rem] border-2 border-black text-white bg-black 
        w-9/10 h-3/10 text-[1rem] text-ellipsis">{thirdItem}</li>
        <li className="list-group-item m-[0.5rem] border-2 border-black text-white bg-black 
        w-9/10 h-3/10 text-[1rem] text-ellipsis">{fourthItem}</li>
        <li className="list-group-item m-[0.5rem] border-2 border-black text-white bg-black 
        w-9/10 h-3/10 text-[1rem] text-ellipsis">{fifthItem}</li>
      </ul>
    </div>
  );
};

export default Card;