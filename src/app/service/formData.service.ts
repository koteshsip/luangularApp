import { Injectable }                        from '@angular/core';

import { FormData, User,Profile, Address }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    // private isPersonalFormValid: boolean = false;
    private isUserFormValid: boolean = false;
    // private isWorkFormValid: boolean = false;
    private isProfileFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }
getUser(): User {
        // Return the Personal data
           var user: User = {
            firstName: this.formData.firstName,
            middleName: this.formData.middleName,
            lastName: this.formData.lastName,
            mobile:this.formData.mobile,
            email: this.formData.email,
            userImage: this.formData.userImage
        };
        return user;
    }
    setUser(data: User) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isUserFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.middleName = data.middleName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.formData.mobile = data.mobile;
        this.formData.userImage=data.userImage;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.user);
    }

    getProfile(): Profile {
        // Return the Personal data
           var profile: Profile = {
            profileName: this.formData.profileName,
            profileImage: this.formData.profileImage,
            profileType: this.formData.profileType,
            achievment:this.formData.achievment,
            extraActivities: this.formData.extraActivities
        };
        return profile;
    }
    setProfile(data: Profile) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isProfileFormValid = true;
        this.formData.profileName = data.profileName;
        this.formData.profileImage = data.profileImage;
        this.formData.profileType = data.profileType;
        this.formData.achievment = data.achievment;
        this.formData.extraActivities = data.extraActivities;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.user);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip,
            permanentAddress: this.formData.permanentAddress,
            communicationAddress:this.formData.communicationAddress
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        this.formData.permanentAddress = data.permanentAddress;
        this.formData.communicationAddress=data.communicationAddress;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isUserFormValid = this.isProfileFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isUserFormValid &&
                this.isProfileFormValid && 
                this.isAddressFormValid;
    }
}