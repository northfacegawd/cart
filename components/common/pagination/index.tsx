import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Page, PageList } from './index.style';

interface PaginatinProps {
  currentPage: number;
  totalCount: number;
  pageCount: number;
  limit: number;
}

export default function Pagination({
  currentPage,
  limit,
  pageCount,
  totalCount,
}: PaginatinProps) {
  const { pathname } = useRouter();

  const totalPage = Math.ceil(totalCount / limit);
  const pageGroup = Math.ceil(currentPage / pageCount);

  const lastPage = (() => {
    let lastNumber = pageGroup * pageCount;
    if (lastNumber > totalPage) {
      lastNumber = totalPage;
    }
    return lastNumber;
  })();

  const firstPage = lastPage - (pageCount - 1);

  const pages = Array.from({ length: lastPage }, (_, i) => i + 1).slice(
    firstPage - 2,
    lastPage,
  );

  return (
    <PageList>
      <Page disabled={currentPage <= 1}>&lt;</Page>
      {pages.map((page) => (
        <Link key={page} href={{ pathname, query: { page } }}>
          <Page active={page === +currentPage}>{page}</Page>
        </Link>
      ))}
      <Page disabled={currentPage >= totalPage}>&gt;</Page>
    </PageList>
  );
}
