import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div >
      <Banner/>

      <Featured/>
      <Steps></Steps>
      <Pricing></Pricing>
    </div>
  );
}
