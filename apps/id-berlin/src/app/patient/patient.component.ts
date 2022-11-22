import { Component, OnInit } from '@angular/core';
import { Patient } from 'fhir/r4';
import { catchError, Observable, throwError } from 'rxjs';
import { PatientService } from './patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'id-berlin-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  public patient$!: Observable<Patient>;
  public error?: string;

  constructor(private patientService: PatientService,  private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.patient$ = this.patientService.getPatient(params['id']).pipe(
        catchError((err) => {
          console.log(err);
          this.error = err.message;
          return throwError(err)
        })
      )
    })
  }
}
