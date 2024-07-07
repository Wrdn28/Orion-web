import { Suspense } from "react";
import TeamList from "./TeamList";
import Loading from "../loading";

const Team = () => {
  return (
    <>
      <div className="team w-full py-24 bg-[#f6f8fd]">
        <div className="container mx-auto">
          <h1 className="p-4 font-semibold text-base md:text-xl lg:text-2xl">
            Our team is very enthusiast about the Android project, if you want to be part of us,{" "}
            <a href="https://forms.gle/YBT9uCKhwtkfTJg17" target="_blank">
              join now!
            </a>
          </h1>
          <Suspense fallback={<Loading/>}>
            <TeamList />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Team;