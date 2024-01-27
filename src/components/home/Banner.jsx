/** @format */

import { useRouter } from "next/navigation";
import Button from "../general/Button";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa6";

const options = [
  { link: "oneTimeDonation", name: "One Time" },
  { link: "monthlyDonation", name: "Monthly" },
];

function Banner() {
  const router = useRouter();
  // const [type, setType] = useState("oneTimeDonation");
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="HomeImage flex flex-col justify-center relative">
      <div className="bg_gradient_black h-full w-full absolute top-0 left-0">
      </div>
        <div className="flex z-10 home_content h-full place-items-center py-8 lg:py-0 container ">
          <div className="grid margin_top lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="space-y-5 fade-in-bottom text-white">
              <h1 className="sm:text-[45px] sm:leading-[52px] text-[23px] leading-[28px]  font-semibold">
                Expedition Orange: Riding for Awareness, Honoring Vietnam
                Veterans
              </h1>
              <div className="-translate-y-2 sm:translate-y-0">
                <Button
                  name={"Learn More"}
                  className={"sm:text-base opacity-100 text-sm"}
                  handleClick={() => router.push("/journal")}
                />
              </div>
            </div>
            <div>
              <div className="bg_gradient_brown_new lg:mx-auto rounded-md sm:w-[372px] w-auto lg:p-7 sm:p-5 p-4 fade-in-right">
                <h2 className="text-center sm:text-[30px] text-[21px] text-white font-semibold sm:mb-5 mb-3">
                  DONATE
                </h2>
                {/*  */}
                <div className="sm:mb-5 mb-2.5">
                  {/* <label className="text-white sm:text-base text-sm">
                    Donation Category
                  </label>
                  <select
                    id="selectOption"
                    name="selectOption"
                    className=" w-full border-[1px]  bg-white px-5 md:py-3 py-2 rounded focus:outline-none"
                    onChange={(e) => setType(e?.target?.value)}
                  >
                    <option value="oneTimeDonation">One Time</option>
                    <option value="monthlyDonation">Monthly</option>
                  </select> */}
                  <label className="text-white sm:text-base text-sm">
                    Donation Category
                  </label>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full rounded bg-white py-2 pl-4 cursor-pointer pr-10 text-left shadow-md focus:outline-none  focus-visible:ring-white/75">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                          <FaAngleDown className="h-4 w-4 text-primaryBrown" />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {options.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                  active
                                    ? "bg_gradient_brown text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={person}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>

                <button
                  className="w-full bg-white text-primaryBrown rounded bg-primary hover:bg-gray-200 px-5 py-2 text-center text-[13px] font-semibold md:text-[15px] xl:px-6 xl:py-3"
                  onClick={() => router.push(`/donation/${selected.link}`)}
                >
                  DONATE NOW
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Banner;
