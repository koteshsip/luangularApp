export class FormData {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    permanentAddress: string ='';
    communicationAddress: string ='';
    firstName: string = '';
    middleName: string = '';
    lastName: string = '';
    mobile:string = '';
    email: string = '';
    userImage: any;  
    profileName: string = '';
    profileImage : any;
    profileType: string = '';
    achievment: string = '';
    extraActivities: string = '';
    clear() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.permanentAddress ='';
        this.communicationAddress ='';
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.mobile = '';
        this.email = '';
        //this.userImage = File;  
        this.profileName = '';
        this.profileImage = '';
        this.profileType = '';
        this.achievment = '';
        this.extraActivities = ''; 
    }
}
export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    permanentAddress: string ='';
    communicationAddress: string='';
}
export class User{
    firstName: string = '';
    middleName: string = '';
    lastName: string = '';
    mobile:string = '';
    email: string = '';
    userImage: any;   
}
export class Profile {
    profileName: string = '';
    profileImage : any;
    profileType: string = '';
    achievment: string = '';
    extraActivities: string = '';
}
