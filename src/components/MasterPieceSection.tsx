import React from "react";
import Button from "./Button";
import ArrowIcon from "./svg/ArrowIcon";
import { masterPieceData } from "../webData";
import MasterPieceCard from "./MasterPieceCard";

const MasterPieceSection: React.FC = () => {
  return (
    <section className="section1 p-10 container mx-auto flex gap-10 items-center">
      <div>
        <h2 className="font-bold text-4xl">
          Let's turn your vision into a masterpiece.
        </h2>

        <p className="font-medium text-lg mt-5">
          We understand that in the fast-paced world of digital, staying ahead
          of the curve is critical. That is why we are constantly researching
          new technologies, techniques, and strategies in order to provide our
          clients with innovative solutions that give them a competitive
          advantage. You are not just getting a service; you are getting
          a partner who is committed to your business's growth and success.
        </p>

        <Button classes="bg-[#DC1D13] text-white flex items-center gap-3 mt-8">
          <span>Get Started</span>
          <ArrowIcon color="white" />
        </Button>
      </div>
      <div className="flex gap-5">
        {masterPieceData.map((data) => (
          <MasterPieceCard
            Icon={data.icon}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MasterPieceSection;
