import OfferCarousel from "./OfferCarousel";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import DealOfTheWeek from "./DealOfTheWeek";
import QuickBrowse from "./QuickBrowse";
import TopReviews from "./TopReviews";
import WhyGardenUp from "./WhyGardenUp";

export default function Home() {
  return (
    <>
      <OfferCarousel />

      <div className="container">
        <QuickBrowse />
        <BestSellers />
        <NewArrivals />
        <DealOfTheWeek />
      </div>

      <WhyGardenUp />
    </>
  );
}
