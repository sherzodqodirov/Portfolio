import Image from 'next/image'
import Hero from "@/components/Hero";
import HomeProducts from "@/components/HomeProducts";
import Feature from "@/components/Feature";
import Contact from "@/components/Contact";
import Statistics from "@/components/Statistics";

export default function Home() {
    return (
        <>
            <Hero/>
            <HomeProducts/>
            <Feature/>
            <Statistics/>
            <Contact/>
        </>
    )
}
