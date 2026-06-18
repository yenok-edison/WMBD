import LeadershipPage from "@/components/Assessment/LeadershipPage";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Assessment | Arjun Raj Urs",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/assessment", text: "Assessment" },
    ];

    return (
        <>
            <HeroSub
                title="Leadership Productivity Assessment"
                description="Leadership is a proprietary diagnostic tool for identifying organisational health. Leadership is the brainchild of Arjun Raj Urs that works on a self-assessment algorithm.
                Performance parameters are common for all assessments and scoring against each of the attributes drives the identification of barriers across departments, teams or businesses."
                breadcrumbLinks={breadcrumbLinks}
            />
            <LeadershipPage />
        </>
    );
};

export default page;