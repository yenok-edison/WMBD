import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
    title: "Contact | WMBD",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title=""
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      {/* <ContactInfo /> */}
      <ContactForm />
      {/* <Location /> */}
      {/* <TicketSection/> */}
    </>
  );
};

export default page;
