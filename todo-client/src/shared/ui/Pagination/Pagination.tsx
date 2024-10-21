import { type FC, useEffect, useState } from "react";

import { PaginationButton, PaginationStyled } from "./PaginationStyled";

interface PaginationProps<T> {
  data: T[];
  onPageChange: (page: number) => void;
  taskPerPage: number;
  currentPage: number;
}

export const Pagination: FC<PaginationProps<unknown>> = <T,>({
  data,
  taskPerPage,
  onPageChange,
  currentPage,
}: PaginationProps<T>) => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const totalPages = Math.ceil(data.length / taskPerPage);
    setPages(Array.from({ length: totalPages }, (_, i) => i + 1));
  }, [data, taskPerPage]);

  return (
    <PaginationStyled>
      {pages.map((page) => (
        <PaginationButton
          key={page}
          $isActive={page === currentPage}
          disabled={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PaginationButton>
      ))}
    </PaginationStyled>
  );
};
