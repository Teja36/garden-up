import prisma from "../../utils/db";
import TopReviewCarousel from "@/components/TopReviewCarousel";

const TopReviews = async () => {
  const topReviews = await prisma.review.findMany({
    where: {
      rating: 5,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
    take: 5,
  });

  return (
    <div className="w-full mx-auto text-center mt-12">
      <h2 className="text-3xl font-medium mb-2">From Happy Customers</h2>
      <TopReviewCarousel reviews={topReviews} />
    </div>
  );
};

export default TopReviews;
