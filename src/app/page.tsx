import OfferCarousel from "./OfferCarousel";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import DealOfTheWeek from "./DealOfTheWeek";

export default function Home() {
  return (
    <main>
      <OfferCarousel />
      <BestSellers />
      <NewArrivals />
      <DealOfTheWeek />
    </main>
  );
}
