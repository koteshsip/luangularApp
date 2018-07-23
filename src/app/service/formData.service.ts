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
            employeeId: this.formData.employeeId,
            firstName: this.formData.firstName,
            middleName: this.formData.middleName,
            lastName: this.formData.lastName,
            dateOfBirth: this.formData.dateOfBirth,
            dateOfJoining: this.formData.dateOfJoining,
            dateOfLeaving: this.formData.dateOfLeaving,
            gender: this.formData.gender,
            profilePic: this.formData.profilePic,
            mobilePhone: this.formData.mobilePhone,
            alternatePhone: this.formData.alternatePhone,
            qulaificationDegree: this.formData.qulaificationDegree,
            degreeOfSpecilization: this.formData.degreeOfSpecilization,
            univFrom: this.formData.univFrom,
            deg_pass_year: this.formData.deg_pass_year
        };
        return user;
    }
    setUser(data: User) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isUserFormValid = true;
        this.formData.employeeId=this.formData.employeeId,
        this.formData.firstName= data.firstName,
        this.formData.middleName= data.middleName,
        this.formData.lastName= data.lastName,
        this.formData.dateOfBirth= data.dateOfBirth,
        this.formData.dateOfJoining= data.dateOfJoining,
        this.formData.dateOfLeaving= data.dateOfLeaving,
        this.formData.gender= data.gender,
        this.formData.profilePic= data.profilePic,
        this.formData.mobilePhone= data.mobilePhone,
        this.formData.alternatePhone= data.alternatePhone,
        this.formData.qulaificationDegree= data.qulaificationDegree,
        this.formData.degreeOfSpecilization= data.degreeOfSpecilization,
        this.formData.univFrom= data.univFrom,
        this.formData.deg_pass_year= data.deg_pass_year
        this.formData.firstName = data.firstName;
        this.workflowService.validateStep(STEPS.user);
    }

    getProfile(): Profile {
           var profile: Profile = {
            insertedTime: this.formData.insertedTime,
            updatedBy: this.formData.updatedBy,
            updatedTime: this.formData.updatedTime,
            role: this.formData.role,
            user: this.formData.user,
            userOrganisationId: this.formData.userOrganisationId,
            emailId: this.formData.emailId,
            currentPassword: this.formData.currentPassword,
            passwordLastChangeDate: this.formData.passwordLastChangeDate,
            previousChange1: this.formData.previousChange1,
            previousChange2: this.formData.previousChange2,
            previousChange3: this.formData.previousChange3,
            previousChange4: this.formData.previousChange4,
            previousChange5: this.formData.previousChange5,
            alterPhone: this.formData.alterPhone,
            correspondenceAddress1: this.formData.correspondenceAddress1,
            correspondenceAddress2: this.formData.correspondenceAddress2,
            correspondenceAddress3: this.formData.correspondenceAddress3,
            correspondenceCity: this.formData.correspondenceCity,
            correspondenceState: this.formData.correspondenceState,
            permanentZip: this.formData.permanentZip,
            correspondenceZip: this.formData.correspondenceZip
        };
        return profile;
    }
    setProfile(data: Profile) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isProfileFormValid = true;
        this.formData.insertedTime=data.insertedTime;
        this.formData.updatedBy=data.updatedBy;
        this.formData.updatedTime=data.updatedTime;
        this.formData.role=data.role;
        this.formData.userOrganisationId=data.userOrganisationId;
        this.formData.emailId=data.emailId;
        this.formData.currentPassword=data.currentPassword;
        this.formData.passwordLastChangeDate=data.passwordLastChangeDate;
        this.formData.previousChange1=data.previousChange1;
        this.formData.previousChange2=data.previousChange2;
        this.formData.previousChange3=data.previousChange3;
        this.formData.previousChange4=data.previousChange4;
        this.formData.previousChange5=data.previousChange5;
        this.formData.alterPhone=data.alterPhone;
        this.formData.correspondenceAddress1=data.correspondenceAddress1;
        this.formData.correspondenceAddress2=data.correspondenceAddress2;
        this.formData.correspondenceAddress3=data.correspondenceAddress3;
        this.formData.correspondenceCity=data.correspondenceCity;
        this.formData.correspondenceState=data.correspondenceState;
        this.formData.permanentZip=data.permanentZip;
        this.formData.correspondenceZip=data.correspondenceZip;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.user);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
addressLine1: this.formData.addressLine1,
addressLine2: this.formData.addressLine2,
addressLine3: this.formData.addressLine3,	
perCity: this.formData.perCity,
perState: this.formData.perState,
perZip: this.formData.perZip,
crspAdd1: this.formData.crspAdd1,
crspAdd2: this.formData.crspAdd2,
crspAdd3: this.formData.crspAdd3,
crspCity: this.formData.crspCity,
crspState: this.formData.crspState,
crspZip: this.formData.crspZip,
country: this.formData.country,
fatherFirstName: this.formData.fatherFirstName,
fatherMiddleName: this.formData.fatherMiddleName,
fatherLastName: this.formData.fatherLastName,
motheFirstName: this.formData.motheFirstName,
motherMiddleName: this.formData.motherMiddleName,
motherLastname: this.formData.motherLastname,
fatherContact: this.formData.fatherContact,
motherContact: this.formData.motherContact,
useField1: this.formData.useField1,
useField2: this.formData.useField2,
useField3: this.formData.useField3,
useField4: this.formData.useField4,
useField5: this.formData.useField5,
useField6: this.formData.useField6,
insertedBy: this.formData.insertedBy
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.addressLine1= data.addressLine1,
        this.formData.addressLine2= data.addressLine2,
        this.formData.addressLine3= data.addressLine3,	
        this.formData.perCity= data.perCity,
        this.formData.perState= data.perState,
        this.formData.perZip= data.perZip,
        this.formData.crspAdd1= data.crspAdd1,
        this.formData.crspAdd2= data.crspAdd2,
        this.formData.crspAdd3= data.crspAdd3,
        this.formData.crspCity= data.crspCity,
        this.formData.crspState= data.crspState,
        this.formData.crspZip= data.crspZip,
        this.formData.country= data.country,
        this.formData.fatherFirstName= data.fatherFirstName,
        this.formData.fatherMiddleName= data.fatherMiddleName,
        this.formData.fatherLastName= data.fatherLastName,
        this.formData.motheFirstName= data.motheFirstName,
        this.formData.motherMiddleName= data.motherMiddleName,
        this.formData.motherLastname= data.motherLastname,
        this.formData.fatherContact= data.fatherContact,
        this.formData.motherContact= data.motherContact,
        this.formData.useField1= data.useField1,
        this.formData.useField2= data.useField2,
        this.formData.useField3= data.useField3,
        this.formData.useField4= data.useField4,
        this.formData.useField5= data.useField5,
        this.formData.useField6= data.useField6,
        this.formData.insertedBy= data.insertedBy
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