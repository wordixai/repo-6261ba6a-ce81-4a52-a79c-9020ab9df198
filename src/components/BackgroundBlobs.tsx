const BackgroundBlobs = () => {
  return (
    <div className="h-full absolute w-full translate-z-0 overflow-hidden" aria-hidden="true">
      <div className="translate-z-0 select-none absolute pointer-events-none z-[1] top-0 left-0 w-[714px] h-[714px] transform -translate-x-1/2 -translate-y-1/2 filter blur-[160px] bg-[#254972] rounded-full opacity-80" />
      <div className="translate-z-0 select-none absolute pointer-events-none z-[1] top-[60vh] left-1/2 w-[200vw] h-[825px] transform -translate-x-1/2 filter blur-[2000px] bg-[#CDD9E9] rounded-full opacity-100" />
      <div className="translate-z-0 select-none absolute pointer-events-none z-[2] top-0 left-1/2 w-[200vw] h-full transform -translate-x-1/2 filter blur-[160px] rounded-full opacity-100 bg-hero-gradient" />
      <div className="translate-z-0 select-none absolute pointer-events-none z-[3] top-0 left-1/2 w-[80%] h-[809px] transform -translate-x-1/2 -translate-y-[90%] filter blur-[150px] bg-[#64ADA1] rounded-full opacity-100" />
      <div className="translate-z-0 select-none absolute pointer-events-none z-[4] top-0 right-0 w-[70%] h-[755px] transform translate-x-1/2 filter blur-[200px] bg-[#CC99A4] rounded-full opacity-85" />
      <div className="translate-z-0 select-none absolute pointer-events-none z-[5] top-[1050px] right-0 w-[714px] h-[714px] transform translate-x-1/2 rotate-[10deg] filter blur-[200px] bg-[#254972] rounded-full opacity-40" />
    </div>
  );
};

export default BackgroundBlobs;