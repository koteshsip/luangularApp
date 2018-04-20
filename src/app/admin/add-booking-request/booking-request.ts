export class  LibraryTransaction   {
  constructor(
	public requestId:any,
	public library:any,
	public inventory:any,
	public bookingDate:any,
	public numberOfDaysToReturn:any,
	public actualReturnDate:any,
	public reasonForDelay:any,
	public fineAmountPerDay:any,
	public user:any,
	public libraryBookIssuedDate:any,
	public advanceBooking:any,
	public bookIssuedBy:any	
  ) {  }
}