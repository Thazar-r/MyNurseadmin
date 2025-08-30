function Loader(): React.JSX.Element {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="relative w-32 h-12 flex items-center justify-center">
        <div className="absolute w-1/2 h-full rounded-l-full bg-primary-500 animate-capsule-left z-10" />
        <div className="absolute right-0 w-1/2 h-full rounded-r-full bg-primary-700 animate-capsule-right z-10" />
        
      </div>
      <style>{`
        @keyframes capsuleLeft {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-60px);
            opacity: 1;
          }
        }
        @keyframes capsuleRight {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(60px);
            opacity: 1;
          }
        }
        @keyframes loadingAppear {
          0%,
          30%,
          100% {
            opacity: 0;
            transform: scale(0.9);
          }
          45%,
          55% {
            opacity: 1;
            transform: scale(1);
          }
          70% {
            opacity: 0;
            transform: scale(0.9);
          }
        }
        .animate-capsule-left {
          animation: capsuleLeft 3s ease-in-out infinite;
        }
        .animate-capsule-right {
          animation: capsuleRight 3s ease-in-out infinite;
        }
        .animate-loading {
          animation: loadingAppear 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Loader;
