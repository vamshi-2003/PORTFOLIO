import { useState, useEffect, useRef } from "react";

function useDraggable(initialPosition) {
  const [position, setPosition] = useState(initialPosition);
  const elementRef = useRef(null);

  useEffect(() => {
    const elmnt = elementRef.current;
    if (elmnt) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

      const dragMouseDown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      };

      const elementDrag = (e) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        setPosition({ x: elmnt.offsetLeft, y: elmnt.offsetTop });
      };

      const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      };

      elmnt.onmousedown = dragMouseDown;
    }
  }, [elementRef]);

  return { position, elementRef };
}

export default useDraggable;
