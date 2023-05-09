const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("hover", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("hover", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? undefined : element;
};
