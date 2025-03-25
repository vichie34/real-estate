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
            <div className="m-1 flex items-center">
                <svg width="52" height="42" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="16,4 28,8 28,24 16,28 4,24 4,8" fill="#FFFFFF" />
                    <text x="50%" y="50%" text-anchor="middle" fill="#A03433" font-size="4" dy=".3em">MdN</text>
                </svg>
                <span className="ml-2">Medallion</span>
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

