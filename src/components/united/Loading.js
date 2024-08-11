const Loading = ({ show }) => {
  return (
    <div className={`loading ${show ? "loading-enter" : "loading-exit"}`}>
      درحال بارگزاری...
    </div>
  );
};

export default Loading;
