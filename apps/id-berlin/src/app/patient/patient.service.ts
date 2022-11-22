import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from 'fhir/r4';

@Injectable({
  providedIn: 'root'
})
export class PatientService{

  constructor(private httpClient: HttpClient) { }



  public getPatient(id: string): Observable<Patient> {
    return this.httpClient.get<Patient>(`https://hapi.fhir.org/baseR4/Patient/${id}`);
  }
}
