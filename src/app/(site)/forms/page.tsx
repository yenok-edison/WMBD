import AssessmentForm from "@/components/Assessment/AssessmentForm";
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
                title="Organisational Productivity Assessment"
                description={
                    <>
                    OPA is a proprietary diagnostic tool for identifying organisational
                    health. OPA is the brainchild of Arjun Raj Urs that works on a
                    self-assessment algorithm.

                    Performance parameters are common for all assessments and scoring
                    against each of the attributes drives the identification of barriers
                    across departments, teams or businesses. Your assessment is the first
                    step. Learn how our{" "}
                    <a
                        href="/enterprise"
                        className="text-primary font-semibold underline hover:no-underline"
                    >
                        Growth Program
                    </a>{" "}
                    helps Organisations overcome barriers and achieve lasting growth.
                    </>
                }
                
                breadcrumbLinks={breadcrumbLinks}
            />
            <AssessmentForm />
        </>
    );
};

export default page;