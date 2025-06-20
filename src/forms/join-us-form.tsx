import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PAGE_URLS } from "@/constants";

export const JoinUs = () => {

    return (
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between pb-12 ">
            <div className="flex flex-col gap-1 flex-1">
                <h1 className="font-bold text-2xl">Join our newsletter</h1>
                <p className="">
                    Get all the latest TOLCE learning hub news delivered to your
                    inbox.
                </p>
            </div>
            <Link target="_blank" href={PAGE_URLS.NEWSLETTER_SUBSCRIPTION}>
                <Button className="">
                    Subscribe
                </Button>
            </Link>
        </section>
    );
}
