import OfferCarousel from "./OfferCarousel";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import DealOfTheWeek from "./DealOfTheWeek";

export default function Home() {
  return (
    <main>
      <OfferCarousel />
      <div className="container">
        <BestSellers />
        <NewArrivals />
        <DealOfTheWeek />
      </div>
    </main>
  );
}
