export class   Inventory   {
  constructor(
	public inventoryId:any,
	public inventoryName:any,
	public inventoryDescription:any,
	public bookName:any,
	public stockOnHand:any,
	public reorderLevel:any,
	public issuedQuantity:any,
	public stockType:any,
	public stockDate:any
  ) {  }
}