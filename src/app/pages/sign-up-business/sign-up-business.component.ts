import { Component, OnInit } from '@angular/core';
import { CommonModule, getLocaleMonthNames } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up-business',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up-business.component.html',
  styleUrls: ['./sign-up-business.component.scss'],
})
export class SignUpBusinessComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
