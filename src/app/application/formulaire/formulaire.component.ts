import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../crud/models/user';
import { UserService } from '../crud/services/user.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', Validators.required),
    emailOffers: new FormControl('', Validators.required),
    interfaceStyle: new FormControl('', Validators.required),
    subscriptionType: new FormControl('', Validators.required),
    notes: new FormControl('', Validators.required),
  });

  user: User;
  validMessage: string = '';

  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {}

  get formCreate() {
    return this.userForm.controls;
  }

  createUser() {
    if (this.userForm.valid) {
      this.service.save(this.userForm.value).subscribe(
        () => {
          this.userForm.reset();
          this.router.navigateByUrl('/crud');
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.validMessage = 'Veuillez vérifier le formulaire';
    }
  }
}
