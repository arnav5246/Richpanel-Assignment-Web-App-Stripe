import {  useState } from "react";



export default function Dashboard() {
    const [planSelected, setPlanSelected] = useState({
        duration: "Monthly",
        plan: "Mobile",
        price: "₹ 100"

    });

    return (
        <div className="w-screen p-4 flex flex-col gap-2 bg-white">
            <h1 className={`font-medium text-2xl text-center text-neutral-700 font-inter`}>
                Choose the right plan for you
            </h1>

            <section className="mx-auto">
                <section className="flex justify-center">
                    <section className="flex lg:flex-row sm:flex-col">
                        {/* Duration selection */}
                        <div className="flex flex-col">
                            <section className="flex gap-4 rounded-full bg-primaryBlue p-3 w-fit my-8">
                                <button
                                    className={`rounded-full font-inter transition-all p-4 ${planSelected.duration === "Monthly"
                                        ? "bg-white text-primaryBlue outline-none font-medium"
                                        : "text-white bg-primaryBlue font-light"
                                        }`}
                                    onClick={() =>
                                        setPlanSelected({ ...planSelected, duration: "Monthly" })
                                    }
                                >
                                    Monthly
                                </button>

                                <button
                                    className={` rounded-full font-inter transition-all p-4 ${planSelected.duration === "Yearly"
                                        ? "bg-white text-primaryBlue outline-none font-medium"
                                        : "text-white bg-primaryBlue font-light"
                                        }`}
                                    onClick={() =>
                                        setPlanSelected({ ...planSelected, duration: "Yearly" })
                                    }
                                >
                                    Yearly
                                </button>
                            </section>
                            <section className="flex flex-col divide-y-2 font-inter text-neutral-600 w-full my-8 mr-20">
                                <p className="py-4">Monthly Price</p>
                                <p className="py-4">Video Quality</p>
                                <p className="py-4">Resolution</p>
                                <p className="py-4">Devices you can use to watch</p>
                            </section>
                        </div>
                        {/* Plan selection */}
                        <section className="flex lg:flex-row sm:flex-col basis-2/3">
                        
                        {/* Mobile */}
                        <section className="h-full flex flex-col ">
                                            <button
                                                className={`${planSelected.plan === "Mobile"
                                                    ? "bg-primaryBlue after:w-0 after:h-0 after:border-l-2 after:border-t-4 after:border-r-2 after:border-transparent after:border-t-primaryBlue"
                                                    : "bg-primaryLightBlue"
                                                    } bottom-2 font-medium text-white w-36 mx-4 h-36 transition-all rounded-md`}
                                                onClick={() =>
                                                    setPlanSelected({ ...planSelected, plan: "Mobile", price: planSelected.duration === "Monthly" ? "₹ 100" : "₹ 1000" })
                                                }
                                            >
                                                <span className=" text-xl font-medium">Mobile</span>
                                            </button>
                                            {planSelected.plan === "Mobile" && (
                                                <div className="border-solid mx-auto border-t-primaryBlue w-1 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                                            )}

                                            <section className={`flex flex-col divide-y-2 font-inter ${planSelected.plan === "Mobile"
                                                ? "text-primaryBlue font-semibold my-6"
                                                : "text-neutral-600 font-light my-8"
                                                }  w-full text-center transition-all `}>
                                                <p className="py-4">{planSelected.duration === "Monthly" ? "₹ 100" : "₹ 1000" }</p>
                                                <p className="py-4">Good</p>
                                                <p className="py-4">480p</p>
                                                <section className="flex flex-col gap-6 py-4">
                                                   <span>Phone</span>
                                                   <span>Tablet</span>
                                                </section>
                                            </section>
                        </section>
                        {/* Basic */}
                        <section className="h-full flex flex-col ">
                                            <button
                                                className={`${planSelected.plan === "Basic"
                                                    ? "bg-primaryBlue after:w-0 after:h-0 after:border-l-2 after:border-t-4 after:border-r-2 after:border-transparent after:border-t-primaryBlue"
                                                    : "bg-primaryLightBlue"
                                                    } bottom-2 font-medium text-white w-36 mx-4 h-36 transition-all rounded-md`}
                                                onClick={() =>
                                                    setPlanSelected({ ...planSelected, plan: "Basic", price: planSelected.duration === "Monthly" ? "₹ 200" : "₹ 2000" })
                                                }
                                            >
                                                <span className=" text-xl font-medium">Basic</span>
                                            </button>
                                            {planSelected.plan === "Basic" && (
                                                <div className="border-solid mx-auto border-t-primaryBlue w-1 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                                            )}

                                            <section className={`flex flex-col divide-y-2 font-inter ${planSelected.plan === "Basic"
                                                ? "text-primaryBlue font-semibold my-6"
                                                : "text-neutral-600 font-light my-8"
                                                }  w-full text-center transition-all `}>
                                                <p className="py-4">{planSelected.duration === "Monthly" ? "₹ 200" : "₹ 2000" }</p>
                                                <p className="py-4">Good</p>
                                                <p className="py-4">480p</p>
                                                <section className="flex flex-col gap-6 py-4">
                                                   <span>Phone</span>
                                                   <span>Tablet</span>
                                                   <span>Computer</span>
                                                   <span>TV</span>

                                                </section>
                                            </section>
                        </section>
                        {/* Standard */}
                        <section className="h-full flex flex-col ">
                                            <button
                                                className={`${planSelected.plan === "Standard"
                                                    ? "bg-primaryBlue after:w-0 after:h-0 after:border-l-2 after:border-t-4 after:border-r-2 after:border-transparent after:border-t-primaryBlue"
                                                    : "bg-primaryLightBlue"
                                                    } bottom-2 font-medium text-white w-36 mx-4 h-36 transition-all rounded-md`}
                                                onClick={() =>
                                                    setPlanSelected({ ...planSelected, plan: "Standard", price: planSelected.duration === "Monthly" ? "₹ 500" : "₹ 5000" })
                                                }
                                            >
                                                <span className=" text-xl font-medium">Standard</span>
                                            </button>
                                            {planSelected.plan === "Standard" && (
                                                <div className="border-solid mx-auto border-t-primaryBlue w-1 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                                            )}

                                            <section className={`flex flex-col divide-y-2 font-inter ${planSelected.plan === "Standard"
                                                ? "text-primaryBlue font-semibold my-6"
                                                : "text-neutral-600 font-light my-8"
                                                }  w-full text-center transition-all `}>
                                                <p className="py-4">{planSelected.duration === "Monthly" ? "₹ 500" : "₹ 5000" }</p>
                                                <p className="py-4">Better</p>
                                                <p className="py-4">1080p</p>
                                                <section className="flex flex-col gap-6 py-4">
                                                    <span>Phone</span>
                                                    <span>Tablet</span>
                                                    <span>Computer</span>
                                                    <span>TV</span>
                                                </section>
                                            </section>
                        </section>
                        {/* Premium */}
                        <section className="h-full flex flex-col ">
                                            <button
                                                className={`${planSelected.plan === "Premium"
                                                    ? "bg-primaryBlue after:w-0 after:h-0 after:border-l-2 after:border-t-4 after:border-r-2 after:border-transparent after:border-t-primaryBlue"
                                                    : "bg-primaryLightBlue"
                                                    } bottom-2 font-medium text-white w-36 mx-4 h-36 transition-all rounded-md`}
                                                onClick={() =>
                                                    setPlanSelected({ ...planSelected, plan: "Premium", price: planSelected.duration === "Monthly" ? "₹ 700" : "₹ 7000" })
                                                }
                                            >
                                                <span className=" text-xl font-medium">Premium</span>
                                            </button>
                                            {planSelected.plan === "Premium" && (
                                                <div className="border-solid mx-auto border-t-primaryBlue w-1 border-t-8 border-x-transparent border-x-8 border-b-0"></div>
                                            )}

                                            <section className={`flex flex-col divide-y-2 font-inter ${planSelected.plan === "Premium"
                                                ? "text-primaryBlue font-semibold my-6"
                                                : "text-neutral-600 font-light my-8"
                                                }  w-full text-center transition-all `}>
                                                <p className="py-4">{planSelected.duration === "Monthly" ? "₹ 700" : "₹ 7000" }</p>
                                                <p className="py-4">Best</p>
                                                <p className="py-4">4K+HDR</p>
                                                <section className="flex flex-col gap-6 py-4">
                                                        <span>Phone</span>
                                                        <span>Tablet</span>
                                                        <span>Computer</span>
                                                        <span>TV</span>
                                                </section>
                                            </section>
                        </section>
                        </section>
                    </section>
                </section>
            </section>

            <button 
                className="bg-primaryBlue text-center hover:bg-opacity-90 transition-all rounded-md text-white py-3 text-lg w-1/3 mx-auto"
            >
                Next
            </button>

        </div>
    );
}