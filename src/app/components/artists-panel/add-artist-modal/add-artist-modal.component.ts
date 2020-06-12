import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-artist-modal',
  templateUrl: './add-artist-modal.component.html',
  styleUrls: ['./add-artist-modal.component.scss']
})
export class AddArtistModalComponent implements OnInit {
  closeResult: string;
  editArtistForm: FormGroup;
  file = { name: '' };
  @Output()
  newArtist: EventEmitter<object> = new EventEmitter<object>();
  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.editArtistForm = this.fb.group({
      name: new FormControl('', Validators.required),
      genres: new FormControl('', Validators.required),
      members: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      imageInput: new FormControl('', Validators.required)
    });
  }

  onFileChange($event) {
    this.file = $event.target.files[0];
    this.editArtistForm.controls['imageInput'].setValue(this.file ? this.file.name : '');
  }

  openModal(targetModal) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

    this.editArtistForm.controls['name'].setValue('');
    this.editArtistForm.controls['genres'].setValue('');
    this.editArtistForm.controls['members'].setValue('');
    this.editArtistForm.controls['website'].setValue('');
    this.editArtistForm.controls['imageInput'].setValue('');
  }

  onSubmit() {
    this.modalService.dismissAll();
    let parseArtist = this.editArtistForm.getRawValue();
    parseArtist['imgFile'] = this.file;
    this.newArtist.emit(parseArtist);
  }
}