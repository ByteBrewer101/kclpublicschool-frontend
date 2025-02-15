import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function StaffPanel() {
  return (
    <div className="w-full">
      <h1 className="mb-12 text-3xl text-center lg:text-start font-bold">
        Notices
      </h1>

      <div className="overflow-x-auto">
        <div className="flex space-x-6 p-4">
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>
    </div>
  );
}

function CustomCard() {
  return (
    <Card className="h-[300px] w-[300px] flex-shrink-0 flex flex-col justify-around p-4">
      <h1 className="text-2xl font-semibold">Title</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        cupiditate.
      </p>
      <Button className="bg-slate-800">Click Me</Button>
    </Card>
  );
}
