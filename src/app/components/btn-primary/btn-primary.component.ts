import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type buttonVariants = "primary" | "secondary"

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("button-text") buttonText: string = ""
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() variant: buttonVariants = "primary"

  @Output("submit") onSubmit = new EventEmitter()

  submit(){
    this.onSubmit.emit()
  }
}
