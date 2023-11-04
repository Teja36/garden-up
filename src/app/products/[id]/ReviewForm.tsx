import RatingInput from "@/components/RatingInput";

const ReviewForm = ({ isActive = false }: { isActive: boolean }) => {
  async function postReview(formData: FormData) {
    "use server";
    console.log(formData);
  }

  return (
    <>
      {isActive && (
        <form
          action={postReview}
          className="flex flex-col gap-y-4 border-t border-gray-200 py-3"
        >
          <div className="flex flex-col ">
            <label htmlFor="name" className="font-medium text-sm">
              Name
            </label>
            <input
              name="customer-name"
              type="text"
              id="name"
              placeholder="Enter your name (public)"
              required
              className="border border-gray-300 text-xs px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium text-sm">
              Email
            </label>
            <input
              name="customer-email"
              type="email"
              placeholder="Enter your email (private)"
              required
              className="border border-gray-300 text-xs px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-medium text-sm">
              Rating
            </label>
            <RatingInput />
          </div>

          <div className="flex flex-col">
            <label htmlFor="title" className="font-medium text-sm">
              Review Title
            </label>
            <input
              name="review-title"
              type="text"
              placeholder="Give your review a title"
              required
              className="border border-gray-300 text-xs px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="desc" className="font-medium text-sm">
              Review
            </label>
            <textarea
              name="review-desc"
              id="desc"
              placeholder="Write your comments here"
              className="border border-gray-300 text-xs px-2 py-1"
            ></textarea>
          </div>

          <button
            type="submit"
            className="justify-self-start max-w-xs text-white uppercase bg-green-600 p-2 text-sm hover:bg-green-700 transition ease-in-out duration-100"
          >
            Submit Review
          </button>
        </form>
      )}
    </>
  );
};

export default ReviewForm;
