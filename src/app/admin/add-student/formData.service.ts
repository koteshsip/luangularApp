import { Injectable }                        from '@angular/core';

import { FormData, MyUser,Profile, Address }       from './formData.model';
import { StudentWorkflowService }                   from './workflow.service';
import { STEPS }                             from './workflow.model';

@Injectable()
export class StudentDataService {

    private formData: FormData = new FormData();
    // private isPersonalFormValid: boolean = false;
    private isUserFormValid: boolean = false;
    // private isWorkFormValid: boolean = false;
    private isProfileFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: StudentWorkflowService) { 
    }
getUser(): MyUser {
        // Return the Personal data
      var user: MyUser = {
      userId: this.formData.userId, 
      emailId:this.formData.emailId,
      firstName:this.formData.firstName,
      middleName:this.formData.middleName,
      lastName:this.formData.lastName,
      dateOfBirth:this.formData.dateOfBirth,
      mobilePhone:this.formData.mobilePhone,
      alterPhone:this.formData.alterPhone,
      classId:this.formData.classId,
      classTeacher:this.formData.classTeacher,
      academicYear:this.formData.academicYear,
      gradeObtained:this.formData.gradeObtained,
      isPromoted:this.formData.isPromoted,
      academicReview:this.formData.academicReview,
      gender:this.formData.gender
        };
        return user;
    }
    setUser(data: MyUser) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isUserFormValid = true;
        this.formData.userId=data.userId, 
        this.formData.emailId=data.emailId,
        this.formData.firstName=data.firstName,
        this.formData.middleName=data.middleName,
        this.formData.lastName=data.lastName,
        this.formData.dateOfBirth=data.dateOfBirth,
        this.formData.mobilePhone=data.mobilePhone,
        this.formData.alterPhone=data.alterPhone,
        this.formData.classId=data.classId,
        this.formData.classTeacher=data.classTeacher,
        this.formData.academicYear=data.academicYear,
        this.formData.gradeObtained=data.gradeObtained,
        this.formData.isPromoted=data.isPromoted,
        this.formData.academicReview=data.academicReview,
        this.formData.gender=data.gender;
        this.workflowService.validateStep(STEPS.user);
    }

    getProfile(): Profile {
           var profile: Profile = {
            fatherFirstName: this.formData.fatherFirstName,//profile data
            fatherMiddleName: this.formData.fatherMiddleName,
            fatherLastName:this.formData.fatherLastName,
            motherFirstName: this.formData.motherFirstName,
            motherMiddleName: this.formData.motherMiddleName,
            motherLastName: this.formData.motherLastName,
            guardianFirstName: this.formData.guardianFirstName,
            guardianMiddleName: this.formData.guardianMiddleName,
            guardianLastName: this.formData.guardianLastName,
            fatherContact: this.formData.fatherContact,
            motherContact: this.formData.motherContact,
            guardianContact: this.formData.guardianContact,
            admissionDate:this.formData.admissionDate,
            previousSchool: this.formData.previousSchool
        };
        return profile;
    }
    setProfile(data: Profile) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isProfileFormValid = true;
        this.formData.fatherFirstName=data.fatherFirstName,//profile data
        this.formData.fatherMiddleName=data.fatherMiddleName,
        this.formData.fatherLastName=data.fatherLastName,
        this.formData.motherFirstName=data.motherFirstName,
        this.formData.motherMiddleName=data.motherMiddleName,
        this.formData.motherLastName=data.motherLastName,
        this.formData.guardianFirstName=data.guardianFirstName,
        this.formData.guardianMiddleName=data.guardianMiddleName,
        this.formData.guardianLastName=data.guardianLastName,
        this.formData.fatherContact=data.fatherContact,
        this.formData.motherContact=data.motherContact,
        this.formData.guardianContact=data.guardianContact,
        this.formData.admissionDate=data.admissionDate,
        this.formData.previousSchool=data.previousSchool
        this.workflowService.validateStep(STEPS.user);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
      correspondenceAddress1: this.formData.correspondenceAddress1, //address data
      correspondenceAddress2: this.formData.correspondenceAddress2,
      correspondenceAddress3: this.formData.correspondenceAddress3,
      correspondenceCity: this.formData.correspondenceCity,
      correspondenceState: this.formData.correspondenceState,
      permanentZip: this.formData.permanentZip,
      correspondenceZip: this.formData.correspondenceZip,
      userOrganisationId: this.formData.userOrganisationId,
      currentPassword: this.formData.currentPassword,
      studentId: this.formData.studentId,
      permanentAddressLine1: this.formData.permanentAddressLine1,
      permanentAddressLine2: this.formData.permanentAddressLine2,
      permanentAddressLine3: this.formData.permanentAddressLine3,
      permanentCity: this.formData.permanentCity,
      permanentState: this.formData.permanentCity
        };
        return address;
    }
    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        // Validate Address Step in Workflow
      this.formData.correspondenceAddress1= data.correspondenceAddress1, //address data
      this.formData.correspondenceAddress2= data.correspondenceAddress2,
      this.formData.correspondenceAddress3= data.correspondenceAddress3,
      this.formData.correspondenceCity= data.correspondenceCity,
      this.formData.correspondenceState= data.correspondenceState,
      this.formData.permanentZip= data.permanentZip,
      this.formData.correspondenceZip= data.correspondenceZip,
      this.formData.userOrganisationId= data.userOrganisationId,
      this.formData.currentPassword= data.currentPassword,
      this.formData.studentId= data.studentId,
      this.formData.permanentAddressLine1= data.permanentAddressLine1,
      this.formData.permanentAddressLine2= data.permanentAddressLine2,
      this.formData.permanentAddressLine3= data.permanentAddressLine3,
      this.formData.permanentCity= data.permanentCity,
      this.formData.permanentState= data.permanentCity
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