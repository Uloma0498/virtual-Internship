import React from "react";


const SkeletonLoader = ({ count }) => {
  return (
    <div className="skeleton-loader">
      {[...Array(count)].map((_, index) => (
      <div className="skeleton-item" key={index}>
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-code"></div>
      </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;







/*const Skeleton = ({ width, height, borderRadius }) => {
  return (
    <div
      className="skeleton-box"
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};*

export default Skeleton;
