import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../core/user.service';
import { TeamService } from '../../core/teams.service';
import { ToastrService } from 'ngx-toastr';
import { ResGeneric } from '../../models/resGeneric';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  
  public createTeamForm: FormGroup;
  public teamName: AbstractControl;
  public teamDescription: AbstractControl;
  
  public currentlyLoggedUserId: number;
  public currentlyLoggedUserEmail: string;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private teamService: TeamService, private toastr: ToastrService) { }

  ngOnInit() {
    this.initCreateTeamForm();
    this.currentlyLoggedUserId = this.userService.getCurrentLoggedUserId();
    this.currentlyLoggedUserEmail = this.userService.getCurrentLoggedUserEmail();
  }

  initCreateTeamForm() {
    this.createTeamForm = this.formBuilder.group({
      'teamName': ['', [Validators.required]],
      'teamDescription': [''],
    });

    this.teamName = this.createTeamForm.controls['teamName'];
    this.teamDescription = this.createTeamForm.controls['teamDescription'];
  }

  onSubmit() {
    if (this.createTeamForm.valid) {
      const teamToCreate = {
        name: this.teamName.value,
        description: this.teamDescription.value,
        teamLeaderId: this.currentlyLoggedUserId,
      };

     this.teamService.createTeam(teamToCreate).subscribe((resData: ResGeneric<string>) => {
      if(resData.error) {
        this.toastr.error(resData.error, '', {closeButton:true});
     //   console.log(resData.error);
      } else {
        this.toastr.success('Team was created!', '', {closeButton:true});
      };
    }, 
    (err) => {
   //   console.log(err);
      this.toastr.error('Server Error, Please, try again or later!','', {closeButton:true});
    //  console.log('Server Error, Please, try again or later!');
    });
    }
  }

}
