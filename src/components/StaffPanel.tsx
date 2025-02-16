import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { backendUrl } from "@/Constants";
import axios from "axios";
import { Loader2 } from "lucide-react";

// Define the notice type interface
interface NoticeType {
  title: string;
  desc: string;
  link: string;
}

export default function StaffPanel() {
  const [notices, setNotices] = useState<NoticeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getNotices() {
      try {
        const response = await axios.get<NoticeType[]>(`${backendUrl}/notices`);
        
        //@ts-expect-error
        setNotices(response.data.response);
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getNotices();
  }, []);
return (
  <div className="w-full">
    <h1 className="mb-12 text-3xl text-center lg:text-start font-bold">
      Notices
    </h1>

    <div className="overflow-x-auto " >
      {isLoading ? (
        <div className="flex justify-center items-center h-[300px]">
          <Loader2 className="w-8 h-8 animate-spin text-slate-800" />
        </div>
      ) : (
        <div className="flex space-x-6 p-4">
          {notices.length > 0 ? (
            notices.map((notice, index) => (
              <CustomCard
                key={index}
                title={notice.title}
                desc={notice.desc}
                link={notice.link}
              />
            ))
          ) : (
            <div className="flex items-center justify-center w-full bg-slate-100 rounded-xl h-[300px]">
              <h1 className="text-3xl text-slate-400">No notices to display</h1>
            </div>
          )}
        </div>
      )}
    </div>
  </div>
);
};


// Define props for CustomCard component
interface CustomCardProps {
  title: string;
  desc: string;
  link: string;
}

function CustomCard({ title, desc, link }: CustomCardProps) {
  return (
    <Card className="h-[300px] w-[300px] flex-shrink-0 flex flex-col justify-between p-10">
      <h1 className="text-2xl font-semibold  ">{title}</h1>
      <p className="text-lg">{desc.slice(0,120)+"..."}</p>
      <Button className="bg-slate-800" onClick={() => window.open(link)}>
        Click Me
      </Button>
    </Card>
  );
}
