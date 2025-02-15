import { photo1 } from "@/Constants";
import StaffCard from "./StaffCard";

export default function StaffPanel() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <StaffCard
          title={"Dr. Sarah Johnson"}
          description="Cardiothoracic Surgeon with 15+ years experience"
          imageUrl={photo1}
        />
        <StaffCard
          title={"Dr. Michael Chen"}
          description="Neurology Specialist, PhD in Cognitive Science"
          imageUrl={photo1}
        />
        <StaffCard
          title={"Dr. Emma Wilson"}
          description="Pediatric Care Expert, Child Health Advocate"
          imageUrl={photo1}
        />
        <StaffCard
          title={"Dr. James Rodriguez"}
          description="Orthopedic Surgeon, Sports Medicine"
          imageUrl={photo1}
        />
        <StaffCard
          title={"Dr. James Rodriguez"}
          description="Orthopedic Surgeon, Sports Medicine"
          imageUrl={photo1}
        />
        <StaffCard
          title={"Dr. James Rodriguez"}
          description="Orthopedic Surgeon, Sports Medicine"
          imageUrl={photo1}
        />
      </div>
    </div>
  );
}
