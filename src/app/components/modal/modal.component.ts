import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalOverlay: HTMLElement;
  close: HTMLElement;
  modalTitle: string;

  constructor() { }

  ngOnInit() {
    this.modalOverlay = <HTMLElement>document.querySelector('.modal-overlay');
    this.close = <HTMLElement>document.querySelector('.close');
  }

  openModal(): void {
    this.modalOverlay.setAttribute('style', 'display: flex');
    this.modalTitle = 'Modal Title';
  }

  closeClick() {
    this.modalOverlay.setAttribute('style', 'display: none');
  }

  outsideClick(e) {
    if (e.target == this.modalOverlay) {
      this.modalOverlay.setAttribute('style', 'display: none');
    }
  }

}
