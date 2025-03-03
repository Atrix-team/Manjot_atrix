import React from 'react'

const AdminSidebar = () => {
    return (


        <div>
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
            <div className="bg-(--black)"></div>
            <div className="bg-(--black)">
                <div className="flex-col flex">

                    <div className="flex ">
                        <div className="bg-(--black) lg:flex md:w-64 md:flex-col hidden h-screen">
                            <div className="flex-col pt-5 flex overflow-y-auto">
                                <div className="h-full flex-col justify-between px-4 flex">
                                    <div className="space-y-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <a
                                                href="#"
                                                className="font-medium text-sm items-center rounded-lg  px-4 py-2.5 flex
               transition-all duration-200 hover:bg-(--blue) group cursor-pointer"
                                            >
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                                <svg
                                                                    className="flex-shrink-0 w-5 h-5 mr-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewbox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                    stroke-width="2"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1
                         1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Dashboard</span>
                                            </a>


                                        </div>
                                        <div>
                                            <p className="px-4 font-bold text-md tracking-widest  uppercase">
                                                Component
                                            </p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">


                                                <a
                                                    href="#"
                                                    className="font-medium text-sm items-center rounded-lg  px-4 py-2.5 flex
                 transition-all duration-200 hover:bg-(--blue) group cursor-pointer"
                                                >
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="justify-center items-center flex">
                                                                <span className="items-center justify-center flex">
                                                                    <svg
                                                                        className="flex-shrink-0 w-5 h-5 mr-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewbox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2
                           2 0 00-2 2v12a2 2 0 002 2z"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span>Technology</span>
                                                    {/* <span
                                                        className="px-2 py-0.5 items-center font-semibold text-xs ml-auto bg-indigo-50 text-indigo-600
                   rounded-full uppercase border border-indigo-300 inline-flex"
                                                    >
                                                        New
                                                    </span> */}
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="px-4 font-semibold text-md tracking-widest  uppercase">
                                                Pages
                                            </p>
                                            <div className="mt-4 bg-top bg-cover space-y-1">
                                                <a
                                                    href="#"
                                                    className="font-medium text-sm items-center rounded-lg  px-4 py-2.5 flex
                 transition-all duration-200 hover:bg-(--blue) group cursor-pointer"
                                                >
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="justify-center items-center flex">
                                                                <span className="items-center justify-center flex">
                                                                    <svg
                                                                        className="flex-shrink-0 w-5 h-5 mr-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewbox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2
                           2 0 00-2 2v12a2 2 0 002 2z"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span>Login</span>
                                                </a>


                                                <a
                                                    href="#"
                                                    className="font-medium text-sm items-center rounded-lg  px-4 py-2.5 flex
                 transition-all duration-200 hover:bg-(--blue) group cursor-pointer"
                                                >
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="justify-center items-center flex">
                                                                <span className="items-center justify-center flex">
                                                                    <svg
                                                                        className="flex-shrink-0 w-5 h-5 mr-4"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewbox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                        stroke-width="2"
                                                                    >
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2
                           2 0 00-2 2v12a2 2 0 002 2z"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span>Signup </span>
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
