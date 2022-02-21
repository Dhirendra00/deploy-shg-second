import { MainLayout } from "@/layout/MainLayout";
import withAuth from "@/shared/withAuth";
import { Badge, DoctorBadge, HFBadge } from "@/components/Badge";
import { TickCircle, CloseCircle } from "iconsax-react";
import { UserCircle } from "phosphor-react";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="flex justify-around">
        <div className="shadow-E500 bg-white rounded-sm p-4 grid grid-rows-3 grid-flow-col gap-4">
          <span className="row-span-3 mt-4">
            <UserCircle size={40} color="#03a5ef" className="ml-3" />
          </span>
          <span className="row-span-3 mt-2">
            <HFBadge number="85" title="Total patient"></HFBadge>
          </span>
        </div>
        <div className="shadow-E500 bg-white rounded-sm p-4 grid grid-rows-3 grid-flow-col gap-4">
          <span className="row-span-3 mt-4">
            <UserCircle size={40} color="#03a5ef" className="ml-3" />
          </span>
          <span className="row-span-3 mt-2">
            <HFBadge number="5" title="Available Doctor"></HFBadge>
          </span>
        </div>
        <div className="shadow-E500 bg-white rounded-sm p-4 grid grid-rows-3 grid-flow-col gap-4">
          <span className="row-span-3 mt-4">
            <UserCircle size={40} color="#03a5ef" className="ml-3" />
          </span>
          <span className="row-span-3 mt-2">
            <HFBadge number="25" title="Remaining Patient"></HFBadge>
          </span>
        </div>
        <div className="shadow-E500 bg-white rounded-sm p-4 grid grid-rows-3 grid-flow-col gap-4">
          <span className="row-span-3 mt-4">
            <UserCircle size={40} color="#03a5ef" className="ml-3" />
          </span>
          <span className="row-span-3 mt-2">
            <HFBadge number="2" title="In-Queue patient"></HFBadge>
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default withAuth(Dashboard);
