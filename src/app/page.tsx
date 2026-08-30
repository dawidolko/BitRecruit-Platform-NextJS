"use client";

import React, { Suspense } from "react";
import { Loader } from "@mantine/core";

import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import JobOffersPagination from "@/components/JobOffersPagination";
import JobOffersHeader from "@/components/JobOffersHeader";
import JobOffers from "@/components/JobOffers";

import { getJobOffers } from "@/services/jobOffersService";
import { useJobOffers, JobOffersProvider } from "@/providers/JobOffersContext";

import s from "./styles.module.scss";

export default function Page() {
  return (
    /*
      The landmark and the page heading sit outside <Suspense> on purpose. The
      whole page is a client component, so anything inside the boundary is
      replaced by the fallback in the prerendered HTML — a crawler (and a
      screen reader before hydration) saw a spinner and no <main> or <h1> at
      all. Keeping them here puts both in the static export.
    */
    <main id="main-content" tabIndex={-1} className={s.pageMain}>
      <h1 className="visually-hidden">
        BitRecruit — IT job offers for developers
      </h1>
      <Suspense
        fallback={
          <div className={s.offersLoader}>
            <Loader />
          </div>
        }>
        <PageContent />
      </Suspense>
    </main>
  );
}

function PageContent() {
  return (
    <JobOffersProvider>
      <div className={`container-lg ${s.pageContent}`}>
        <Hero />
        <div className={`${s.main}`}>
          <Filters />
          <div className={s.offers}>
            <JobOffersHeader />
            <JobOffersContent />
          </div>
        </div>
      </div>
    </JobOffersProvider>
  );
}

function JobOffersContent() {
  const { page, sort, filters } = useJobOffers();

  // Build query params from context state directly (not from URL)
  const queryParams = new URLSearchParams();
  if (sort) queryParams.set("sort", sort);
  if (page > 1) queryParams.set("page", String(page));
  filters.technologies.forEach((t) => queryParams.append("by_technology[]", t));
  filters.categories.forEach((c) => queryParams.append("by_category[]", c));
  filters.seniorities.forEach((s) =>
    queryParams.append("by_seniority[]", String(s)),
  );
  if (filters.salary.from)
    queryParams.set("by_salary[from]", String(filters.salary.from));
  if (filters.salary.to)
    queryParams.set("by_salary[to]", String(filters.salary.to));

  const { data, pages, currentPage } = getJobOffers(queryParams);

  if (!data || data.length === 0) {
    return (
      <div className={s.offersLoader}>
        <p style={{ color: "#78716c" }}>
          No offers found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <>
      <JobOffers data={data} />
      <JobOffersPagination pages={pages} currentPage={currentPage} />
    </>
  );
}
