using my.bookshop as my from '../db/data-model';

service CatalogService {
    entity Employees as projection on my.Employees;
    entity WorkflowList as projection on my.WorkflowList;
}
