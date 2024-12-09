import { BeatLoader } from "react-spinners";

const LoadingComponent = () => {
  return (
    <div>
      <BeatLoader color="#0291FA" loading={true} size={5} speedMultiplier={2} className="max-w-screen-2xl mx-auto" />
    </div>
  );
};

export default LoadingComponent;
