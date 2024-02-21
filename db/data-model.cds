namespace my.bookshop;

entity Employees {
  key EmpID : String;
  EmpPassword: String;
  EmpName  : String;
  EmpEmail  : String;
  EmpJob: String;
  Emp_Workflow_id: String;
  Workflow: Association to many WorkflowList on Workflow.WflID = $self.Emp_Workflow_id;
}

entity WorkflowList {
  key WflID : String;
  WflName  : String;
  Employee : Association to many Employees on Employee.Emp_Workflow_id = $self.WflID;
}
