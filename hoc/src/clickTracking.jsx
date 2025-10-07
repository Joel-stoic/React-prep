export const clickTracking = (Comp) => {
  return (props) => {
    const handleClick = () => {
      console.log("Click Tracker", props.trackingInfo);
    };
    return (
      <div onClick={handleClick}>
        <Comp {...props} />
        
      </div>
    );
  };
};
