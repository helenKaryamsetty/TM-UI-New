/*
 * AMRIT � Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */

import { Component, OnInit, Inject, DoCheck } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SetLanguageComponent } from '../../core/components/set-language.component';
import { HttpServiceService } from '../../core/services/http-service.service';

@Component({
  selector: 'app-case-sheet-print-page-select',
  templateUrl: './print-page-select.component.html',
  styleUrls: ['./print-page-select.component.css'],
})
export class PrintPageSelectComponent implements OnInit, DoCheck {
  printPagePreviewSelect = {
    caseSheetANC: true,
    caseSheetPNC: true,
    caseSheetHistory: true,
    caseSheetExamination: true,
    caseSheetPrescription: true,
    caseSheetDiagnosis: true,
    caseSheetInvestigations: true,
    caseSheetExtInvestigation: true,
    caseSheetCurrentVitals: true,
    caseSheetChiefComplaints: true,
    caseSheetClinicalObservations: true,
    caseSheetFindings: true,
    cancerCaseSheetObservations: true,
    caseSheetCovidVaccinationDetails: true,
  };

  visitCategory: any;
  currentLanguageSet: any;
  isCovidVaccinationStatusVisible = false;

  constructor(
    public dialogRef: MatDialogRef<PrintPageSelectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public httpServiceService: HttpServiceService,
  ) {}

  ngOnInit() {
    if (this.data) {
      this.visitCategory = this.data.visitCategory;
      this.printPagePreviewSelect.caseSheetANC =
        this.data.printPagePreviewSelect.caseSheetANC;
      this.printPagePreviewSelect.caseSheetPNC =
        this.data.printPagePreviewSelect.caseSheetPNC;
      this.printPagePreviewSelect.caseSheetHistory =
        this.data.printPagePreviewSelect.caseSheetHistory;
      this.printPagePreviewSelect.caseSheetExamination =
        this.data.printPagePreviewSelect.caseSheetExamination;
      this.printPagePreviewSelect.caseSheetPrescription =
        this.data.printPagePreviewSelect.caseSheetPrescription;
      this.printPagePreviewSelect.caseSheetDiagnosis =
        this.data.printPagePreviewSelect.caseSheetDiagnosis;
      this.printPagePreviewSelect.caseSheetInvestigations =
        this.data.printPagePreviewSelect.caseSheetInvestigations;
      this.printPagePreviewSelect.caseSheetExtInvestigation =
        this.data.printPagePreviewSelect.caseSheetExtInvestigation;
      this.printPagePreviewSelect.caseSheetCurrentVitals =
        this.data.printPagePreviewSelect.caseSheetCurrentVitals;
      this.printPagePreviewSelect.caseSheetChiefComplaints =
        this.data.printPagePreviewSelect.caseSheetChiefComplaints;
      this.printPagePreviewSelect.caseSheetClinicalObservations =
        this.data.printPagePreviewSelect.caseSheetClinicalObservations;
      this.printPagePreviewSelect.caseSheetFindings =
        this.data.printPagePreviewSelect.caseSheetFindings;
      this.printPagePreviewSelect.cancerCaseSheetObservations =
        this.data.printPagePreviewSelect.cancerCaseSheetObservations;
      this.printPagePreviewSelect.caseSheetCovidVaccinationDetails =
        this.data.printPagePreviewSelect.caseSheetCovidVaccinationDetails;
    }
    this.assignSelectedLanguage();
  }
  ngDoCheck() {
    this.assignSelectedLanguage();
  }
  assignSelectedLanguage() {
    const getLanguageJson = new SetLanguageComponent(this.httpServiceService);
    getLanguageJson.setLanguage();
    this.currentLanguageSet = getLanguageJson.currentLanguageObject;
  }
}
