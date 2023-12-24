import NavbarComponent from "@/components/misc/navbar";
import PricingTableComponent from "@/components/pricing table/table";

export default function Pricing() {
  return (
    <div>
      <NavbarComponent />
      <h1 className="text-4xl font-bold text-center mt-10">Pricing</h1>
      <h2 className="text-2xl font-bold text-center mt-5">
        Choose the best plan for you
      </h2>
      <PricingTableComponent />
    </div>
  );
}
