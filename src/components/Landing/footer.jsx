import { Twitter, Instagram, Github, LinkedinIcon, LucideLinkedin, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-gray-400 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Top Section */}
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-white text-xl font-semibold mb-2">Start your journey today!</h2>
                        <p className="text-sm text-white">Join over 3000+ users already growing with Medallion.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-1.5 text-sm text-white">Learn More</button>
                        <button className="px-4 py-1.5 text-sm bg-[#4682B4] text-white rounded-md">Get Started</button>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-6 gap-8 pb-12 border-b border-gray-800 text-white">
                    {/* Logo Column */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="16,4 28,8 28,24 16,28 4,24 4,8" fill="#FFFFFF" />
                                <text x="50%" y="50%" text-anchor="middle" fill="#A03433" font-size="4" dy=".3em">MdN</text>
                            </svg>
                            <span className="text-white font-semibold">Medallion</span>
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
                    <div className="text-sm">© 2024 Medallion. All rights reserved.</div>
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

