import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SongsService } from '../../../service/songs.service'

@Component({
  selector: 'app-add-song-modal',
  templateUrl: './add-song-modal.component.html',
  styleUrls: ['./add-song-modal.component.scss']
})
export class AddSongModalComponent implements OnInit {
  closeResult: string;
  editSongForm: FormGroup;
  fileImg = { name: '' };
  fileSong = { name: '' };
  @Output()
  newSong: EventEmitter<object> = new EventEmitter<object>();

  constructor(private fb: FormBuilder, private modalService: NgbModal, private songsService: SongsService) { }

  ngOnInit(): void {
    this.editSongForm = this.fb.group({
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      releaseYear: new FormControl('', Validators.required),
      album: new FormControl('', Validators.required),
      imageInput: new FormControl('', Validators.required),
      songInput: new FormControl('', Validators.required)
    });
  }

  onFileChangeImg($event) {
    this.fileImg = $event.target.files[0];
    this.editSongForm.controls['imageInput'].setValue(this.fileImg ? this.fileImg.name : '');
  }

  onFileChangeSong($event) {
    this.fileSong = $event.target.files[0];
    this.editSongForm.controls['songInput'].setValue(this.fileSong ? this.fileSong.name : '');
  }

  openModal(targetModal) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

    this.editSongForm.controls['title'].setValue('');
    this.editSongForm.controls['genre'].setValue('');
    this.editSongForm.controls['releaseYear'].setValue('');
    this.editSongForm.controls['album'].setValue('');
    this.editSongForm.controls['imageInput'].setValue('');
    this.editSongForm.controls['songInput'].setValue('');
  }

  onSubmit() {
    this.modalService.dismissAll();
    let parseArtist = this.editSongForm.getRawValue();
    parseArtist['imgFile'] = this.fileImg;
    parseArtist['songFile'] = this.fileSong;
    parseArtist['lenght'] = '2';
    this.newSong.emit(parseArtist)
  }
}
