import { useState } from "react";

const TuggleButton = () => {
  const [text, setText] = useState(true);

  return (
    <>
      {text && <h1>Hello</h1>}
      <button onClick={() => setText(!text)}>Click me</button>
    </>
  );

  //   const [image, setImage] = useState(false);
  //   return (
  //     <>
  //       {image && (
  //         <img
  //           src="https://th-thumbnailer.cdn-si-edu.com/OTGsCZcpxXS64z7s4bSKqwDWkFk=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/a9/ff/a9ff31d0-aecd-464e-80c7-873e4651cd2b/mufasa.jpeg"
  //           alt="pic"
  //         ></img>
  //       )}
  //       <button onClick={() => setImage(!image)}>Show/Hide</button>
  //     </>
  //   );
};

export default TuggleButton;
