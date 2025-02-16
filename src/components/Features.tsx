import { Marquee } from "./magicui/marquee";
import StaffCard from "./StaffCard";
import { photo1 } from "@/Constants";

const staffMembers = [
  {
    id: 1,
    imageUrl: photo1,
    title: "John Doe",
    description: "Senior Web Developer with 5+ years of experience.",
  },
  {
    id: 2,
    imageUrl: "/images/staff2.jpg",
    title: "Jane Smith",
    description: "UI/UX Designer specializing in modern web interfaces.",
  },
  {
    id: 3,
    imageUrl: "/images/staff3.jpg",
    title: "Michael Brown",
    description: "Mobile App Developer focused on React Native solutions.",
  },
  {
    id: 4,
    imageUrl: "/images/staff4.jpg",
    title: "Emily White",
    description: "Project Manager ensuring seamless workflow and success.",
  },
];

export function Features() {
  return (
    <div className="flex flex-col w-full mt-12" id="about">
     
     
        <h1 className="font-bold text-3xl mb-6 text-center lg:text-start">Meet Our Esteemed Staff</h1>
     
     
      <div className="w-full overflow-hidden">
        <Marquee pauseOnHover className="py-8">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="w-[300px] h-[400px] mx-4">
              <StaffCard
                title={staff.title}
                description={staff.description}
                imageUrl={photo1}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
