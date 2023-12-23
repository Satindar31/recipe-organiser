import * as React from "react";
import { currentUser } from "@clerk/nextjs";
import Script from "next/script";

export default async function PricingTableComponent() {
  const user = await currentUser()
  return (
    <>
      <Script strategy="afterInteractive" src="https://js.stripe.com/v3/pricing-table.js" />
      <stripe-pricing-table
        pricing-table-id={process.env.STRIPE_PRICING_TABLE}
        publishable-key={process.env.STRIPE_PK}
        customer-email={user?.emailAddresses[0]?.emailAddress}
      />
    </>
  );
}


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": any;
    }
  }
}
