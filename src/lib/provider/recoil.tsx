"use client";

import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

const RecoilProvider = ({ children }: PropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
