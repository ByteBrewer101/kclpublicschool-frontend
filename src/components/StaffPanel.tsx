import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function StaffPanel() {
  return (
    <div className="mx-40  ">
      <h1 className="mb-12 text-3xl font-bold ">Notices</h1>
      <div className="overflow-x-scroll space-x-10 flex p-10 ">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
}



function CustomCard(){
    return (
      <Card className="h-[300px] w-[300px] overflow-hidden flex-shrink-0 flex flex-col justify-around p-4 ">
        <h1 className="text-2xl font-semibold" >Title</h1>
        <h1 className="text-lg " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cupiditate.</h1>
        <Button className="bg-slate-800" >Click Me</Button>
      </Card>
    );
}