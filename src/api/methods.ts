import { AxiosResponse } from 'axios';
import { ApiResponse, CompanyData, FetchProps } from './types';
import { fetch } from './fetch';

export const getAllCards = ({ offset, limit }: FetchProps): Promise<CompanyData[]> =>
  fetch({
    url: 'mobileapp/getAllCompanies',
    method: 'post',
    data: {
      offset,
      limit,
    },
  }).then(({ data }: AxiosResponse<ApiResponse>) => data.companies);

export const getAllCardsIdeal = ({ offset, limit }: FetchProps): Promise<CompanyData[]> =>
  fetch({
    url: 'mobileapp/getAllCompaniesIdeal',
    method: 'post',
    data: {
      offset,
      limit,
    },
  }).then(({ data }: AxiosResponse<ApiResponse>) => data.companies);

export const getAllCardsLong = ({ offset, limit }: FetchProps): Promise<CompanyData[]> =>
  fetch({
    url: 'mobileapp/getAllCompaniesLong',
    method: 'post',
    data: {
      offset,
      limit,
    },
  }).then(({ data }: AxiosResponse<ApiResponse>) => data.companies);

export const getAllCardsError = ({ offset, limit }: FetchProps): Promise<CompanyData[]> =>
  fetch({
    url: 'mobileapp/getAllCompaniesError',
    method: 'post',
    data: {
      offset,
      limit,
    },
  }).then(({ data }: AxiosResponse<ApiResponse>) => data.companies);
