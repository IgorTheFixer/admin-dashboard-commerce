"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/StoreModal";

export const ModalProvider = () => {
  //Mounted logic needed to prevent bad hydration of component
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
}