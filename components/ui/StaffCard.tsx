import type { StaffMember } from "@/types/university";

export default function StaffCard({ staff }: { staff: StaffMember }) {
  return (
    <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="text-sm font-bold tracking-widest uppercase text-brand-primary">
          Staff
        </div>
        <div className="text-lg font-serif font-bold text-brand-secondary mt-2">
          {staff.name}
        </div>
        <div className="text-sm text-gray-600 mt-1">{staff.title}</div>
      </div>
    </div>
  );
}
