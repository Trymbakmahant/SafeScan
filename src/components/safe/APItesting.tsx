import React, { useRef } from "react";

import { SafeServiceInfoResponse } from "@safe-global/api-kit";

const APItesting = () => {
  const inputref = useRef<HTMLInputElement | null>(null);
  //   const serviceInfo: SafeServiceInfoResponse =
  //     await safeService.getServiceInfo();
  return (
    <div>
      APItesting{" "}
      <div>
        <input type="text" placeholder="" ref={inputref} />
      </div>
      <button
        onClick={() => {
          console.log(inputref.current?.value);
        }}
      >
        subbmit
      </button>
    </div>
  );
};

export default APItesting;
