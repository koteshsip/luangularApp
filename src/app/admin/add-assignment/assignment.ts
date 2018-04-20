export class   Assignment   {
  constructor(
	public assignmentId:any,
	public loginId:any,
	// public tblClass:String,
	public assignmentNumber:any,
	public assignmentType:any,
	public assignmentDueDate:any,
	public assignmentIssuedDate:any,
	public assignmentSubject:String,
	public reviewComments:String,
	public assignmentMarks:any,
	public assignmentAttachment:any,
  ) {  }
}