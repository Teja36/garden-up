"use client";

import { usePathname, useRouter } from "next/navigation";

const ClearAllFiltersButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClear = () => {
    router.replace(pathname, {
      scroll: false,
    });
  };
  return (
    <button
      onClick={handleClear}
      className="text-sm font-medium uppercase underline"
    >
      Clear All
    </button>
  );
};

export default ClearAllFiltersButton;
