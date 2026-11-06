'use client';

import { Pagination } from '@mantine/core';

import { useJobOffers } from '@/providers/JobOffersContext';

import s from './styles.module.scss';

const controlLabels = {
  first: 'First page',
  previous: 'Previous page',
  next: 'Next page',
  last: 'Last page',
};

export default function JobOffersPagination({ pages, currentPage }: { pages: number; currentPage: number }) {
  const { setPage } = useJobOffers();

  return (
    <div className={s.pagination}>
      <Pagination
        total={pages}
        value={currentPage}
        onChange={setPage}
        withEdges
        getControlProps={(control) => ({ 'aria-label': controlLabels[control] })}
      />
    </div>
  );
}
