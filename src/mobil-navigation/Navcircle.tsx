import { useEffect } from "react";
import { useState } from "react";

const Navicircle = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [nav, setNav] = useState<string>();

  
  useEffect(() => {
    nav === "navi-circle-closed"
      ? setNav("navi-circle-open")
      : setNav("navi-circle-closed");
  }, [open]);


  return (
    <div className={`bits-font-link ${nav}`}>
      <div>Willkommen</div>
      <div>Über Mich</div>
      <div>Projekte</div>
      <div>Kontact</div>
    </div>
  );
};

export { Navicircle };
