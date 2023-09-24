import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "contexts";
import { IAppContext } from "types/interfaces/appContext.interface";

interface PortalProps {
  children: JSX.Element;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setElement(document.getElementById("portal"));
  }, []);
  if (typeof document === "undefined") {
    return null;
  }

  const portalContainer = document.getElementById("portal") as HTMLDivElement;
  const modal = (useContext(AppContext) as IAppContext)?.modal;

  if (modal?.status) return ReactDOM.createPortal(children, portalContainer);

  if (!element) {
    return <></>;
  }

  return ReactDOM.createPortal(children, element);
};

export default Portal;
