import { WarpBackground } from "@/components/ui/warp-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";

export default function WarpBg() {
  return (
    <div className="bg-black w-full py-8 px-8">
        <WarpBackground>
        <Card className="max-w-[400px] mx-auto">

            <CardContent className="">
            <CardTitle className="text-center my-auto py-4 ">Nos encantan los nuevos desafíos,
                <br></br> queremos escucharte</CardTitle>
            
            </CardContent>
        </Card>
        </WarpBackground>
    </div>
  );
}
