// "use client"

// import { useState } from "react"

// export default function AccountType() {
//   const [selectedType, setSelectedType] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Selected account type:", selectedType)
//   }

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center px-4 py-8">
//       {/* Logo */}
//       <div className="flex items-center gap-2 text-xl font-semibold text-[#111827]">
//         <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
//           <path
//             fillRule="evenodd"
//             clipRule="evenodd"
//             d="M12.056 0.957947C9.51052 0.957947 7.15837 2.31596 5.88561 4.52045L1.31492 12.4371C0.0421632 14.6416 0.0421609 17.3576 1.31492 19.5621L5.88561 27.4788C7.15837 29.6833 9.51052 31.0413 12.056 31.0413H21.1974C23.7429 31.0413 26.0951 29.6833 27.3678 27.4788L31.9385 19.5621C33.2113 17.3576 33.2113 14.6416 31.9385 12.4371L27.3678 4.52045C26.0951 2.31597 23.7429 0.957947 21.1974 0.957947H12.056ZM21.1974 5.70795L15.4841 5.70795C14.5699 5.70795 13.9987 6.69744 14.4565 7.48871C15.8688 9.93005 17.2845 12.3696 18.6947 14.8121C19.119 15.5469 19.119 16.4523 18.6947 17.1871C17.2845 19.6297 15.8688 22.0692 14.4565 24.5105C13.9987 25.3018 14.5699 26.2913 15.4841 26.2913H21.1974C22.0459 26.2913 22.83 25.8386 23.2542 25.1038L27.8249 17.1871C28.2492 16.4523 28.2492 15.5469 27.8249 14.8121L23.2542 6.89545C22.83 6.16062 22.0459 5.70795 21.1974 5.70795Z"
//             fill="#7C3AED"
//           />
//         </svg>
//         <span>Brooch</span>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-[480px] w-full mt-12 flex flex-col items-center">
//         {/* Illustration */}
//         <div className="w-[240px] h-[160px] mb-8">
//           <svg width="240" height="160" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M116.879 86.5029C115.201 86.5029 113.834 87.8698 113.834 89.5484C113.834 91.227 115.201 92.5939 116.879 92.5939C118.558 92.5939 119.925 91.227 119.925 89.5484C119.925 87.8698 118.558 86.5029 116.879 86.5029Z"
//               fill="#E6E6E6"
//             />
//             <path
//               d="M148.212 58.3271H85.5474C84.0293 58.3271 82.5738 58.9341 81.4901 60.0178C80.4064 61.1015 79.7993 62.557 79.7993 64.0751V115.022C79.7993 116.54 80.4064 117.996 81.4901 119.079C82.5738 120.163 84.0293 120.77 85.5474 120.77H148.212C149.73 120.77 151.185 120.163 152.269 119.079C153.353 117.996 153.96 116.54 153.96 115.022V64.0751C153.96 62.557 153.353 61.1015 152.269 60.0178C151.185 58.9341 149.73 58.3271 148.212 58.3271Z"
//               fill="#E6E6E6"
//             />
//             <path
//               d="M147.936 61.5791H85.8239C84.8531 61.5791 83.9221 61.9626 83.2391 62.6456C82.5561 63.3286 82.1726 64.2596 82.1726 65.2304V113.867C82.1726 114.838 82.5561 115.769 83.2391 116.452C83.9221 117.135 84.8531 117.518 85.8239 117.518H147.936C148.907 117.518 149.838 117.135 150.521 116.452C151.204 115.769 151.587 114.838 151.587 113.867V65.2304C151.587 64.2596 151.204 63.3286 150.521 62.6456C149.838 61.9626 148.907 61.5791 147.936 61.5791Z"
//               fill="white"
//             />
//             <path
//               d="M142.188 71.0759H91.5717C91.0863 71.0759 90.6208 71.2676 90.2793 71.6091C89.9378 71.9506 89.7461 72.4161 89.7461 72.9015C89.7461 73.3869 89.9378 73.8524 90.2793 74.1939C90.6208 74.5354 91.0863 74.7271 91.5717 74.7271H142.188C142.674 74.7271 143.139 74.5354 143.481 74.1939C143.822 73.8524 144.014 73.3869 144.014 72.9015C144.014 72.4161 143.822 71.9506 143.481 71.6091C143.139 71.2676 142.674 71.0759 142.188 71.0759Z"
//               fill="#E6E6E6"
//             />
//             <path
//               d="M142.188 82.3989H91.5717C91.0863 82.3989 90.6208 82.5906 90.2793 82.9321C89.9378 83.2736 89.7461 83.7391 89.7461 84.2245C89.7461 84.7099 89.9378 85.1754 90.2793 85.5169C90.6208 85.8584 91.0863 86.0501 91.5717 86.0501H142.188C142.674 86.0501 143.139 85.8584 143.481 85.5169C143.822 85.1754 144.014 84.7099 144.014 84.2245C144.014 83.7391 143.822 83.2736 143.481 82.9321C143.139 82.5906 142.674 82.3989 142.188 82.3989Z"
//               fill="#E6E6E6"
//             />
//             <path
//               d="M142.188 93.7219H91.5717C91.0863 93.7219 90.6208 93.9136 90.2793 94.2551C89.9378 94.5966 89.7461 95.0621 89.7461 95.5475C89.7461 96.0329 89.9378 96.4984 90.2793 96.8399C90.6208 97.1814 91.0863 97.3731 91.5717 97.3731H142.188C142.674 97.3731 143.139 97.1814 143.481 96.8399C143.822 96.4984 144.014 96.0329 144.014 95.5475C144.014 95.0621 143.822 94.5966 143.481 94.2551C143.139 93.9136 142.674 93.7219 142.188 93.7219Z"
//               fill="#E6E6E6"
//             />
//             <path
//               d="M142.188 105.045H91.5717C91.0863 105.045 90.6208 105.237 90.2793 105.578C89.9378 105.92 89.7461 106.385 89.7461 106.871C89.7461 107.356 89.9378 107.821 90.2793 108.163C90.6208 108.504 91.0863 108.696 91.5717 108.696H142.188C142.674 108.696 143.139 108.504 143.481 108.163C143.822 107.821 144.014 107.356 144.014 106.871C144.014 106.385 143.822 105.92 143.481 105.578C143.139 105.237 142.674 105.045 142.188 105.045Z"
//               fill="#E6E6E6"
//             />
//             <path
//               d="M134.587 39.5337C134.587 39.5337 133.662 42.7355 132.43 46.8157C131.726 49.1648 130.917 51.8431 130.107 54.4741C129.665 55.9613 129.223 57.4294 128.794 58.8403C128.266 60.5741 127.755 62.2318 127.287 63.7375C126.387 66.6461 125.619 69.0994 125.1 70.4722C124.919 70.9902 124.764 71.4127 124.638 71.7299C124.609 71.8067 124.581 71.8789 124.554 71.9466C124.539 71.9851 124.525 72.0213 124.511 72.0552C124.503 72.0744 124.496 72.0926 124.489 72.1099L124.472 72.1453C124.441 72.2107 124.425 72.2434 124.425 72.2434C124.425 72.2434 122.391 70.9306 120.037 69.1276C119.556 68.7533 119.061 68.3621 118.557 67.9564C117.015 66.7372 115.397 65.3933 113.907 64.0517C112.417 62.7101 111.055 61.3708 109.97 60.1733C109.428 59.5746 108.953 59.0168 108.558 58.5181C107.132 56.8035 106.37 55.6241 106.37 55.6241C106.37 55.6241 106.881 55.4704 107.766 55.2394C107.99 55.1876 108.236 55.1313 108.502 55.0714C109.895 54.7669 111.823 54.3467 113.907 53.8826C114.595 53.7289 115.301 53.5697 116.015 53.4059C119.97 52.4771 124.21 51.3772 126.894 50.6731C127.27 50.5744 127.614 50.4825 127.924 50.3974C129.586 49.9563 130.107 49.7944 130.107 49.7944C130.107 49.7944 130.175 49.9827 130.293 50.3166C130.319 50.3947 130.347 50.4809 130.377 50.5744C130.547 50.9987 130.775 51.5674 131.047 52.2397C131.191 52.6121 131.346 53.0169 131.512 53.4472C132.558 55.8296 133.916 58.9211 135.166 62.0171C135.286 62.3077 135.405 62.5983 135.523 62.8889C136.056 64.2253 136.567 65.5578 137.033 66.8514C137.153 67.1443 137.272 67.4349 137.389 67.7232C138.483 70.4309 139.398 72.8957 139.917 74.7378C139.989 74.9767 140.054 75.2001 140.112 75.4081C140.405 76.4325 140.574 77.0357 140.574 77.0357L134.587 39.5337Z"
//               fill="#E6E6E6"
//             />
//             <path
//               d="M130.107 49.7944L124.425 72.2434C124.425 72.2434 122.391 70.9306 120.037 69.1276C119.556 68.7533 119.061 68.3621 118.557 67.9564C117.015 66.7372 115.397 65.3933 113.907 64.0517C112.417 62.7101 111.055 61.3708 109.97 60.1733C109.428 59.5746 108.953 59.0168 108.558 58.5181C107.132 56.8035 106.37 55.6241 106.37 55.6241C106.37 55.6241 106.881 55.4704 107.766 55.2394C107.99 55.1876 108.236 55.1313 108.502 55.0714C108.787 55.5083 109.127 55.9957 109.517 56.5231C109.702 56.7734 109.898 57.0328 110.104 57.3007C110.31 57.5686 110.527 57.8433 110.752 58.1248C111.203 58.6878 111.691 59.2783 112.211 59.8893C112.731 60.5003 113.283 61.1318 113.861 61.7769C114.439 62.422 115.043 63.0807 115.667 63.7443C115.979 64.0762 116.297 64.4104 116.619 64.7469C117.264 65.4193 117.924 66.0963 118.592 66.7733C119.26 67.4503 119.936 68.1273 120.612 68.7997C121.288 69.4721 121.964 70.1399 122.632 70.7891C123.3 71.4383 123.96 72.0689 124.602 72.6673C124.923 72.9669 125.241 73.2596 125.553 73.5432C126.195 74.1143 126.815 74.6558 127.405 75.1568C127.7 75.4081 127.987 75.6503 128.266 75.8834C129.223 76.6937 130.107 77.4016 130.893 77.9886C131.287 78.2819 131.659 78.5524 132.006 78.7992C132.353 79.046 132.676 79.2691 132.972 79.4659C133.416 79.7592 133.798 79.9993 134.105 80.1825C134.259 80.2741 134.395 80.352 134.511 80.4163C134.627 80.4806 134.724 80.5312 134.8 80.5682C134.952 80.6421 135.037 80.6768 135.037 80.6768C135.037 80.6768 134.952 80.6421 134.8 80.5682C134.724 80.5312 134.627 80.4806 134.511 80.4163C134.395 80.352 134.259 80.2741 134.105 80.1825C133.798 79.9993 133.416 79.7592 132.972 79.4659C132.676 79.2691 132.353 79.046 132.006 78.7992C131.659 78.5524 131.287 78.2819 130.893 77.9886C130.107 77.4016 129.223 76.6937 128.266 75.8834C127.987 75.6503 127.7 75.4081 127.405 75.1568C126.815 74.6558 126.195 74.1143 125.553 73.5432C125.241 73.2596 124.923 72.9669 124.602 72.6673C123.96 72.0689 123.3 71.4383 122.632 70.7891C121.964 70.1399 121.288 69.4721 120.612 68.7997C119.936 68.1273 119.26 67.4503 118.592 66.7733C117.924 66.0963 117.264 65.4193 116.619 64.7469C116.297 64.4104 115.979 64.0762 115.667 63.7443C115.043 63.0807 114.439 62.422 113.861 61.7769C113.283 61.1318 112.731 60.5003 112.211 59.8893C111.691 59.2783 111.203 58.6878 110.752 58.1248C110.527 57.8433 110.31 57.5686 110.104 57.3007C109.898 57.0328 109.702 56.7734 109.517 56.5231C109.127 55.9957 108.787 55.5083 108.502 55.0714C109.895 54.7669 111.823 54.3467 113.907 53.8826C114.595 53.7289 115.301 53.5697 116.015 53.4059C119.97 52.4771 124.21 51.3772 126.894 50.6731C127.27 50.5744 127.614 50.4825 127.924 50.3974C129.586 49.9563 130.107 49.7944 130.107 49.7944Z"
//               fill="#7C3AED"
//             />
//             <path
//               d="M135.523 62.8889C135.405 62.5983 135.286 62.3077 135.166 62.0171C133.916 58.9211 132.558 55.8296 131.512 53.4472C131.346 53.0169 131.191 52.6121 131.047 52.2397C130.775 51.5674 130.547 50.9987 130.377 50.5744C130.347 50.4809 130.319 50.3947 130.293 50.3166C130.175 49.9827 130.107 49.7944 130.107 49.7944C130.107 49.7944 129.586 49.9563 127.924 50.3974C127.614 50.4825 127.27 50.5744 126.894 50.6731C124.21 51.3772 119.97 52.4771 116.015 53.4059C115.301 53.5697 114.595 53.7289 113.907 53.8826C111.823 54.3467 109.895 54.7669 108.502 55.0714C108.236 55.1313 107.99 55.1876 107.766 55.2394C106.881 55.4704 106.37 55.6241 106.37 55.6241C106.37 55.6241 107.132 56.8035 108.558 58.5181C108.953 59.0168 109.428 59.5746 109.97 60.1733C111.055 61.3708 112.417 62.7101 113.907 64.0517C115.397 65.3933 117.015 66.7372 118.557 67.9564C119.061 68.3621 119.556 68.7533 120.037 69.1276C122.391 70.9306 124.425 72.2434 124.425 72.2434L124.472 72.1453L124.489 72.1099C124.496 72.0926 124.503 72.0744 124.511 72.0552C124.525 72.0213 124.539 71.9851 124.554 71.9466C124.581 71.8789 124.609 71.8067 124.638 71.7299C124.764 71.4127 124.919 70.9902 125.1 70.4722C125.619 69.0994 126.387 66.6461 127.287 63.7375C127.755 62.2318 128.266 60.5741 128.794 58.8403C129.223 57.4294 129.665 55.9613 130.107 54.4741C130.917 51.8431 131.726 49.1648 132.43 46.8157C133.662 42.7355 134.587 39.5337 134.587 39.5337L140.574 77.0357C140.574 77.0357 140.405 76.4325 140.112 75.4081C140.054 75.2001 139.989 74.9767 139.917 74.7378C139.398 72.8957 138.483 70.4309 137.389 67.7232C137.272 67.4349 137.153 67.1443 137.033 66.8514C136.567 65.5578 136.056 64.2253 135.523 62.8889Z"
//               fill="#7C3AED"
//             />
//           </svg>
//         </div>

//         {/* Heading */}
//         <h1 className="text-[#111827] text-2xl font-semibold mb-2">Account Type</h1>
//         <p className="text-[#6B7280] text-center mb-8 text-sm">
//           Choose the account type that fits your needs.
//           <br />
//           Each has a different set of tools and features.
//         </p>

//         {/* Account Type Selection Form */}
//         <form onSubmit={handleSubmit} className="w-full space-y-4">
//           <div className="space-y-3">
//             {/* Buyer/Planner Option */}
//             <label className="relative flex p-4 cursor-pointer rounded-lg border border-[#E5E7EB] hover:border-[#7C3AED] transition-colors">
//               <input
//                 type="radio"
//                 name="accountType"
//                 value="buyer"
//                 className="peer sr-only"
//                 checked={selectedType === "buyer"}
//                 onChange={(e) => setSelectedType(e.target.value)}
//               />
//               <div className="flex items-start gap-3">
//                 <div className="w-5 h-5 mt-0.5 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center peer-checked:border-[#7C3AED]">
//                   <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] hidden peer-checked:block"></div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-[#111827]">Buyer/Planner</div>
//                   <div className="text-sm text-[#6B7280]">Find the perfect item for your listing</div>
//                 </div>
//               </div>
//             </label>

//             {/* Developer Option */}
//             <label className="relative flex p-4 cursor-pointer rounded-lg border border-[#E5E7EB] hover:border-[#7C3AED] transition-colors">
//               <input
//                 type="radio"
//                 name="accountType"
//                 value="developer"
//                 className="peer sr-only"
//                 checked={selectedType === "developer"}
//                 onChange={(e) => setSelectedType(e.target.value)}
//               />
//               <div className="flex items-start gap-3">
//                 <div className="w-5 h-5 mt-0.5 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center peer-checked:border-[#7C3AED]">
//                   <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] hidden peer-checked:block"></div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-[#111827]">Developer</div>
//                   <div className="text-sm text-[#6B7280]">Build applications & manage listings</div>
//                 </div>
//               </div>
//             </label>

//             {/* Vendor Option */}
//             <label className="relative flex p-4 cursor-pointer rounded-lg border border-[#E5E7EB] hover:border-[#7C3AED] transition-colors">
//               <input
//                 type="radio"
//                 name="accountType"
//                 value="vendor"
//                 className="peer sr-only"
//                 checked={selectedType === "vendor"}
//                 onChange={(e) => setSelectedType(e.target.value)}
//               />
//               <div className="flex items-start gap-3">
//                 <div className="w-5 h-5 mt-0.5 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center peer-checked:border-[#7C3AED]">
//                   <div className="w-2.5 h-2.5 rounded-full bg-[#7C3AED] hidden peer-checked:block"></div>
//                 </div>
//                 <div>
//                   <div className="font-medium text-[#111827]">Vendor</div>
//                   <div className="text-sm text-[#6B7280]">Manage accounts from multiple locations</div>
//                 </div>
//               </div>
//             </label>
//           </div>

//           {/* Next Button */}
//           <button
//             type="submit"
//             disabled={!selectedType}
//             className="w-full py-2 px-4 bg-[#7C3AED] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6D28D9] transition-colors"
//           >
//             Next
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"

export default function AccountType() {
    const [selectedType, setSelectedType] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Selected account type:", selectedType)
    }
    return (
        <div className="min-h-screen bg-[#ccc] px-4 py-8">
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

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-[850px] flex flex-col items-center justify-center bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-6">
                    {/* Illustration */}
                    <div className="w-[240px] h-[160px] flex text-center justify-center my-4">
                        <img className="flex items-center m-0" src="/src/assets/OBJECTS.png" alt="" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-[#111827] text-xl font-semibold mb-2 text-center">Account Type</h1>
                    <p className="text-[#6B7280] text-center mb-6 text-sm">Choose the account type that fits your needs.</p>

                    {/* Account Type Selection Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex items-center">
                            {/* Buyer/Planner Option */}
                            <label className="flex items-center p-4 cursor-pointer rounded-lg border border-[#E5E7EB] hover:border-[#6366F1] transition-colors mr-4">
                                <input
                                    type="radio"
                                    name="accountType"
                                    value="buyer"
                                    className="sr-only peer"
                                    checked={selectedType === "buyer"}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                />
                                <span className="w-5 h-5 mr-4 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center peer-checked:border-[#6366F1]">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] hidden peer-checked:block"></span>
                                </span>
                                <div>
                                    <div className="font-medium text-[#111827]">Buyer/Planner</div>
                                    <div className="text-sm text-[#6B7280]">Find the perfect item for your listing</div>
                                </div>
                            </label>

                            {/* Developer Option */}
                            <label className="flex items-center p-4 cursor-pointer rounded-lg border border-[#E5E7EB] hover:border-[#6366F1] transition-colors  mr-4">
                                <input
                                    type="radio"
                                    name="accountType"
                                    value="developer"
                                    className="sr-only peer"
                                    checked={selectedType === "developer"}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                />
                                <span className="w-5 h-5 mr-4 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center peer-checked:border-[#6366F1] ">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] hidden peer-checked:block"></span>
                                </span>
                                <div>
                                    <div className="font-medium text-[#111827]">Developer</div>
                                    <div className="text-sm text-[#6B7280]">Build applications & manage listings</div>
                                </div>
                            </label>

                            {/* Vendor Option */}
                            <label className="flex items-center p-4 cursor-pointer rounded-lg border border-[#E5E7EB] hover:border-[#6366F1] transition-colors">
                                <input
                                    type="radio"
                                    name="accountType"
                                    value="vendor"
                                    className="sr-only peer"
                                    checked={selectedType === "vendor"}
                                    onChange={(e) => setSelectedType(e.target.value)}
                                />
                                <span className="w-5 h-5 mr-4 border-2 border-[#D1D5DB] rounded-full flex items-center justify-center peer-checked:border-[#6366F1]">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] hidden peer-checked:block"></span>
                                </span>
                                <div>
                                    <div className="font-medium text-[#111827]">Vendor</div>
                                    <div className="text-sm text-[#6B7280]">Manage accounts from multiple locations</div>
                                </div>
                            </label>

                        </div>
                        <div className="flex justify-center">

                            {/* Next Button */}
                            <button
                                type="submit"
                                disabled={!selectedType}
                                className="w-[145px] flex flex-col items-center justify-center mt-5 py-2 px-4 bg-[#6366F1] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4F46E5] transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

