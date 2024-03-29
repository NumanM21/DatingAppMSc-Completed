export interface Pagination {
  // Same as the pagination header in postman 
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export class ResultPaginated<T> {
  result?: T; // T is list of whatever we are returning
  pagination?: Pagination;
  // Get response back form api, look at header, get pagination info, and create new pagination result class and populate the pagination property in this class and send result to list of items
}
