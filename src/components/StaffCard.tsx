import { Card } from "./ui/card";
//@ts-expect-error
export default function StaffCard({ imageUrl, title, description }) {
  return (
    <Card className="overflow-hidden  transition-all ease-in-out duration-200 hover:shadow-xl ">
      {/* Image at the top */}
      <div className="aspect-square overflow-hidden ">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover rounded-t-lg aspect-content"
        />
      </div>

      {/* Content container */}
      <div className="p-4">
        {/* Title in bold */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {/* Description */}
        {/* <p className="text-gray-600 text-base">{description}</p> */}
      </div>
    </Card>
  );
}
