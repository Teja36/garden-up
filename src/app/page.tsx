import OfferCarousel from "./OfferCarousel";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import DealOfTheWeek from "./DealOfTheWeek";
import QuickBrowse from "./QuickBrowse";
import WhyGardenUp from "./WhyGardenUp";

export default function Home() {
  return (
    <>
      <div id="modal-container"></div>
      <main>
        <OfferCarousel />

        <div className="container">
          <QuickBrowse />
          <BestSellers />
          <NewArrivals />
          <DealOfTheWeek />
        </div>

        <WhyGardenUp />
      </main>
    </>
  );
}
