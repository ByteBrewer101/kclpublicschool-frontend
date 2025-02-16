import { Marquee } from "./magicui/marquee";
import StaffCard from "./StaffCard";
import { photo3,photo4,photo5,photo1,photo2 } from "@/Constants";

const staffMembers = [
  {
    id: 1,
    imageUrl: photo3,
    title: "Chhote Lal Yadav",
    description: "Senior Web Developer with 5+ years of experience.",
  },
  {
    id: 2,
    imageUrl: photo4,
    title: "Krishna Yadav",
    description: "UI/UX Designer specializing in modern web interfaces.",
  },
  {
    id: 3,
    imageUrl: photo5,
    title: "Pankaj Kumar Yadav",
    description: "Mobile App Developer focused on React Native solutions.",
  },
  {
    id: 4,
    imageUrl: photo1,
    title: "Deepak Kumar Yadav",
    description: "Project Manager ensuring seamless workflow and success.",
  },
  {
    id: 5,
    imageUrl: photo2,
    title: "Neeraj Kumar Yadav",
    description: "Project Manager ensuring seamless workflow and success.",
  },
];

export function Features() {
  return (
    <div className="flex flex-col w-full mt-12" id="about">
     
     
        <h1 className="font-bold text-3xl mb-6 text-center lg:text-start">Meet Our Esteemed Administration</h1>
     
     
      <div className="w-full overflow-hidden">
        <Marquee pauseOnHover className="py-8">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="w-[300px] h-[400px] mx-4">
              <StaffCard
                title={staff.title}
                description={staff.description}
                imageUrl={staff.imageUrl}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
