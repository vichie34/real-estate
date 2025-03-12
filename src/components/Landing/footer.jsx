import { Twitter, Instagram, Github, LinkedinIcon, LucideLinkedin, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-gray-400 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-white text-xl font-semibold mb-2">Start your journey today!</h2>
                        <p className="text-sm text-white">Join over 3000+ users already growing with Brooch.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-1.5 text-sm text-white">Learn More</button>
                        <button className="px-4 py-1.5 text-sm bg-[#7C3AED] text-white rounded-md">Get Started</button>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-6 gap-8 pb-12 border-b border-gray-800 text-white">
                    {/* Logo Column */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="22"
                                viewBox="0 0 33 32"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.056 0.957947C9.51052 0.957947 7.15837 2.31596 5.88561 4.52045L1.31492 12.4371C0.0421632 14.6416 0.0421609 17.3576 1.31492 19.5621L5.88561 27.4788C7.15837 29.6833 9.51052 31.0413 12.056 31.0413H21.1974C23.7429 31.0413 26.0951 29.6833 27.3678 27.4788L31.9385 19.5621C33.2113 17.3576 33.2113 14.6416 31.9385 12.4371L27.3678 4.52045C26.0951 2.31597 23.7429 0.957947 21.1974 0.957947H12.056ZM21.1974 5.70795L15.4841 5.70795C14.5699 5.70795 13.9987 6.69744 14.4565 7.48871C15.8688 9.93005 17.2845 12.3696 18.6947 14.8121C19.119 15.5469 19.119 16.4523 18.6947 17.1871C17.2845 19.6297 15.8688 22.0692 14.4565 24.5105C13.9987 25.3018 14.5699 26.2913 15.4841 26.2913H21.1974C22.0459 26.2913 22.83 25.8386 23.2542 25.1038L27.8249 17.1871C28.2492 16.4523 28.2492 15.5469 27.8249 14.8121L23.2542 6.89545C22.83 6.16062 22.0459 5.70795 21.1974 5.70795Z"
                                    fill="white"
                                />
                            </svg>
                            <span className="text-white font-semibold">King'sCourt</span>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-4">Social</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    License
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-medium mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Newsletter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center pt-8 text-white">
                    <div className="text-sm">© 2024 Brooch. All rights reserved.</div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-white">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="#" className="hover:text-white">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">Linkedin</span>
                        </a>
                        <a href="#" className="hover:text-white">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

