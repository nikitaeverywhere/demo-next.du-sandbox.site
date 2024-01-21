"use client";

import defender, { DefenderReport } from "@dataunlocker/defender";
import { FC, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const DefenderWrapper: FC<Props> = ({ children }) => {
  const [report, setReport] = useState<DefenderReport | undefined>(undefined);

  useEffect(() => {
    console.log(
      "Initializing Defender at document.readyState=",
      document.readyState
    );
    defender((report) => {
      setReport(report);
    });
  }, []);

  return report ? (
    <div dangerouslySetInnerHTML={{ __html: report.element().outerHTML }}></div>
  ) : (
    <div>{children}</div>
  );
};

export default DefenderWrapper;
