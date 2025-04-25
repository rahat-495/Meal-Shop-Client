import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logos/logo-icon.png';

const sections = [
   
    {
        title: "Company",
        links: [
            { name: "About Us", href: "#" },
            { name: "Our Team", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Careers", href: "#" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Help Center", href: "#" },
            { name: "Contact Us", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Privacy Policy", href: "#" },
        ],
    },
];



const FooterSection = () => {

    return (
        <section className="pt-20 bg-slate-800 text-white">
            <div className="container max-w-6xl mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
                    <div className="flex w-full flex-col items-center gap-6 lg:items-start">
                        <div className="flex items-center gap-2">
                            <Link href='/'>
                                <Image
                                    src={logo}
                                    alt="Meal Moja"
                                    title="Meal Moja"
                                    className="w-16"
                                />
                            </Link>
                            <h2 className="text-pretty font-bold font-ubuntu text-5xl text-teal-500">
                                Meal Moja
                            </h2>
                        </div>
                        <p className="text-sm ">
                            Fresh meals, delivered to your door. Choose from our<br/>
                            chef-curated weekly menu.
                        </p>
                        <ul className="flex items-center space-x-6 ">
                            <li className="hover:text-amber-300">
                                <Link href="#">
                                    <Instagram className="size-5" />
                                </Link>
                            </li>
                            <li className="hover:text-amber-300">
                                <Link href="#">
                                    <Facebook className="size-5" />
                                </Link>
                            </li>
                            <li className="hover:text-amber-300">
                                <Link href="#">
                                    <Twitter className="size-5" />
                                </Link>
                            </li>
                            <li className="hover:text-amber-300">
                                <Link href="#">
                                    <Linkedin className="size-5" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="grid w-full grid-cols-2 gap-8 lg:gap-20">
                        {sections.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="mb-6 font-bold text-emerald-200">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3 text-sm ">
                                    {section.links.map((link, i) => (
                                        <li
                                            key={i}
                                            className="hover:text-amber-300 font-medium"
                                        >
                                            <a href={link.href}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
            <div className="bg-gray-900 p-5 lg:px-20 text-white mt-10 flex flex-col justify-between gap-4 border-t pt-6 text-center text-sm lg:flex-row lg:items-center lg:text-left">
                    <p>
                        © {new Date().getFullYear()} Meal Moja. All rights
                        reserved.
                    </p>
                    <ul className="flex justify-center gap-4 lg:justify-start">
                        <li className="hover:text-amber-300">
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li className="hover:text-amber-300">
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
        </section>
    );
};

export default FooterSection ;
