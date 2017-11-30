export class FormData {
    street: string = '';
    city: string = '';
    state: string = '';
    countryId:string='';
    zip: string = '';
    permanentAddress: string ='';
    communicationAddress: string ='';
    firstName: string = '';
    middleName: string = '';
    lastName: string = '';
    mobile:string = '';
    email: string = '';
    addressId: any ='';
    profileId: any ='';
    userId: any ='';

    attendance: string = '';
    books: string = '';
    class: string = '';
    drawing: string = '';
    news: string = '';
    notes: string = '';
    notify: string = '';
    subject: string = '';
    timetable: string = '';
    test: string = '';
    video: string = '';
    userDesc: string='';
    Password: string='';
   // userImage: any;  
    profileName: string = '';
    profileImage : any;
    profileType: string = '';
    achievment: string = '';
    extraActivities: string = '';
    
    clear() {
        this.userId = '';
        this.addressId = '';
        this.profileId = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.countryId='';
        this.permanentAddress ='';
        this.communicationAddress ='';
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.mobile = '';
        this.email = '';
        this.userDesc='';
        this.Password='';
        //this.userImage = File;  
        this.profileName = '';
        this.profileImage = '';
        this.profileType = '';
        this.achievment = '';
        this.extraActivities = '';
        this.attendance= '';
        this.books= '';
        this.class= '';
        this.drawing= '';
        this.news = '';
        this.notes = '';
        this.notify = '';
        this.subject = '';
        this.timetable = '';
        this.test = '';
        this.video = '';
    }
}
export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    countryId: string='';
    permanentAddress: string ='';
    communicationAddress: string='';
}
export class User{
    userDesc: string= '';
    Password: string='';
    firstName: string = '';
    middleName: string = '';
    lastName: string = '';
    mobile:string = '';
    email: string = '';
    // userImage: any;   
    attendance: string = '';
    books: string = '';
    class: string = '';
    drawing: string = '';
    news: string = '';
    notes: string = '';
    notify: string = '';
    subject: string = '';
    timetable: string = '';
    test: string = '';
    video: string = '';
    addressId: any ='';
    profileId: any ='';
    userId: any ='';
}
export class Profile {
    profileName: string = '';
    profileImage : any;
    profileType: string = '';
    achievment: string = '';
    extraActivities: string = '';
}
