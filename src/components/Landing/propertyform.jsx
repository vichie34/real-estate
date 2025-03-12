"use client"

import { useState } from "react"

export default function PropertyForm() {
    const [answer, setAnswer] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Selected answer:", answer)
    }

    return (
        <div className="min-h-screen bg-[#ccc] p-8">
            {/* Logo */}
            <div className="mx-2 my-1 flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.5596 0C9.13205 0 6.89632 1.28573 5.68394 3.39562L1.31366 10.9371C0.101278 13.047 0.101276 15.6185 1.31366 17.7284L5.68394 25.2699C6.89632 27.3798 9.13205 28.6655 11.5596 28.6655H20.2961C22.7237 28.6655 24.9594 27.3798 26.1718 25.2699L30.5421 17.7284C31.7544 15.6185 31.7544 13.047 30.5421 10.9371L26.1718 3.39562C24.9594 1.28573 22.7237 0 20.2961 0H11.5596ZM20.2961 4.41008H14.8382C13.9621 4.41008 13.4153 5.35104 13.8533 6.10506C15.2021 8.44027 16.5542 10.7737 17.9009 13.1101C18.3068 13.8114 18.3068 14.6755 17.9009 15.3768C16.5542 17.7133 15.2021 20.0467 13.8533 22.3819C13.4153 23.1359 13.9621 24.0769 14.8382 24.0769H20.2961C21.1089 24.0769 21.8602 23.6432 22.2661 22.9419L26.6364 15.4004C27.0423 14.6991 27.0423 13.835 26.6364 13.1337L22.2661 5.59222C21.8602 4.89092 21.1089 4.41008 20.2961 4.41008Z"
                        fill="#000"
                    />
                </svg>
                <span className="ml-2">Brooch</span>
            </div>
            {/*  Main-content */}
            <div className="flex justify-center">
                <div className="w-full max-w-[620px] bg-white p-6 flex flex-col items-center justify-center rounded-lg shadow-sm border border-[#E5E7EB] text-center">
                    {/* Illustration */}
                    <div className="mb-6 flex justify-center">
                        <img src="/src/assets/25182811_7061501 1.png" alt="" />
                    </div>

                    {/* Question */}
                    <h1 className="text-[#111827] text-xl font-semibold mb-2">Are You Looking to List Your Property?</h1>
                    <p className="text-[#111827]">Are you looking to list your property?
                        if you’d like to list your property, hit Yes! if you just want to see what’s going on here, hit No</p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3 mt-6">
                        <div className="flex items-center gap-x-4">
                            {/* Yes Option */}
                            <label className="flex items-center justify-center p-4  cursor-pointer rounded-lg border border-[#E5E7EB] hover:border-[#6366F1] transition-colors">
                                <input
                                    type="radio"
                                    name="property"
                                    value="yes"
                                    className="sr-only peer"
                                    checked={answer === "yes"}
                                    onChange={(e) => setAnswer(e.target.value)}
                                />
                                <span className="w-5 h-5 mr-3 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center peer-checked:border-[#6366F1]">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] hidden peer-checked:block"></span>
                                </span>
                                <span className="font-medium text-[#111827]">YES</span>
                            </label>

                            {/* No Option */}
                            <label className="flex items-center justify-center p-4 cursor-pointer rounded-lg border border-[#E5E7EB] hover:border-[#6366F1] transition-colors">
                                <input
                                    type="radio"
                                    name="property"
                                    value="no"
                                    className="sr-only peer"
                                    checked={answer === "no"}
                                    onChange={(e) => setAnswer(e.target.value)}
                                />
                                <span className="w-5 h-5 mr-3 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center peer-checked:border-[#6366F1]">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] hidden peer-checked:block"></span>
                                </span>
                                <span className="font-medium text-[#111827]">NO</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!answer}
                            className="mt-6 w-full py-2 px-4 bg-[#6366F1] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4F46E5] transition-colors"
                        >
                            Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

