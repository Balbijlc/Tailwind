import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-1-tailwind',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tailwind.component.html',
  styleUrls: ['./1-tailwind.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TailwindComponent { }
