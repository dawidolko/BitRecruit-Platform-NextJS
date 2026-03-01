import {
  getStaticJobOffers,
  getStaticTechnologies,
  getStaticCategories,
  type MockQueryResult,
  type Technology,
  type Category,
} from "@/data/mockData";

export const allowedGetJobOffersParams = [
  "page",
  "items",
  "sort",
  "order",
  "is_active",
  "is_interview_online",
  "is_ua_supported",
  "by_title",
  "by_category",
  "by_technology",
  "by_remote",
  "by_travelling",
  "by_city",
  "by_seniority",
  "by_currency",
  "by_employment",
  "by_language",
  "by_skill",
  "by_salary",
];

export const getJobOffers = (queryParams: URLSearchParams): MockQueryResult => {
  return getStaticJobOffers(queryParams);
};

export const getTechnologies = (): Technology[] => {
  return getStaticTechnologies();
};

export const getCategories = (): Category[] => {
  return getStaticCategories();
};
