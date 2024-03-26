"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterSidebarInput = ({
  attributeValue,
  attributeId,
}: {
  attributeValue: string;
  attributeId: number;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);

  const handleChange = () => {
    if (!isChecked) {
      newSearchParams.append("custom.filter", attributeId.toString());
      router.replace(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });
    } else {
      newSearchParams.delete("custom.filter", attributeId.toString());
      router.replace(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });
    }
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (searchParams.has("custom.filter", attributeId.toString())) {
      setIsChecked(true);
    }
  }, [searchParams]);

  return (
    <input
      type="checkbox"
      name="air-plants"
      id={attributeValue}
      checked={isChecked}
      className="w-5 h-5 accent-green-700"
      onChange={handleChange}
    />
  );
};

export default FilterSidebarInput;
