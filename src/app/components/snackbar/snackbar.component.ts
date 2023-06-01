import {Component} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Snack-bar with configurable position
 */
@Component({
  selector: 'snack-bar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['snackbar.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatButtonModule, MatSnackBarModule],
})
export class SnackBar {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    let snackBarRef = this._snackBar.open('Building well added to the database', 'confirmed', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  snackBarRef.onAction().subscribe(() => {
    window.location.reload();
  });
}

  openSnackBarError() {
    this._snackBar.open('Building has not been added', 'ERROR', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  deleteSnackBar() {
    let snackBarRef = this._snackBar.open('Building removed successfully', 'confirmed', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    snackBarRef.onAction().subscribe(() => {
      window.location.reload();
    });
  }
  updateSnackBar() {
    let snackBarRef = this._snackBar.open('Building updated successfully', 'confirmed', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    snackBarRef.onAction().subscribe(() => {
      window.location.reload();
    });
  }
}
