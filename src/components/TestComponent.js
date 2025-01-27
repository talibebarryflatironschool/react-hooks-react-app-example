import React from "react";

function TestComponent() {
  return (
    <div>
      <h3>This is the TestComponent!</h3>
      <video title="time video" controls>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default TestComponent;










// import React from "react";

// // no need to modify anything in here. The final test is looking for the returned JSX from this component
// function TestComponent() {
//   return (
//     <div className="video">
//       <iframe
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/5TbUxGZtwGI"
//         frameBorder="0"
//         allow="autoplay; encrypted-media"
//         title="time video"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// }

// export default TestComponent;