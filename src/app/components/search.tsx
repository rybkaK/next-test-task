'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from 'react';

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term: string) {
      const params = new URLSearchParams(searchParams);
      if (term && term.trim() !== '') {
        params.set("query", term);
      } else {
        params.delete("query");
      }

       replace(`${pathname}?${params.toString()}`);
    }
    return (
      <div className="flex flex-1 flex-shrink-0 z-1">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Search product"
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
    );
};

export default Search;