// useWindowSize Hooks라는 것을 사용해서 innerWidth에 사이즈에 맞게 스타일링
import { useState, useEffect } from "react";

// windowSize를 width, height 모두 undefined로 설정해두기
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    // resize 이벤트가 발생 할 때 마다 handleResize라는 함수를 호출한다.
    window.addEventListener("resize", handleResize);
    handleResize();

    // 컴포넌트가 더이상 사용되지 않을때 등록해준 리스너를 remove 한다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
};

export default useWindowSize;
