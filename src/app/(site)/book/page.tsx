import BookPage from "@/components/Book/BookPage";
import AssessmentForm from "@/components/Book/BookPage";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book | Arjun Raj Urs",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/book", text: "Book" },
    ];

    return (
        <>
            {/* <HeroSub
                title="Organisational Productivity Assessment"
                description="Help us understand where your organisation stands today. Your responses are confidential and will be used to generate a personalised growth strategy."
                breadcrumbLinks={breadcrumbLinks}
            /> */}
            <BookPage />
        </>
    );
};

export default page;