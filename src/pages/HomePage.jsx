
const HomePage = () => {
    return (
        <div className="watchButtonContainer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <button className="watchBtn flex items-center justify-center overflow-hidden text-white bg-black border-2 border-black px-4 py-2 rounded-lg min-w-[5vw] max-w-[30vw] min-h-[3vh] max-h-[10vh]">
            <span className="truncate inline-block text-[clamp(5px,12px,30px)] overflow-hidden text-ellipsis">
              Watch Attack on Titan here!
            </span>
          </button>
        </div>
    );
  };
  
  export default HomePage;
  