import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { IJob } from './interfaces/job';
import { JobService } from './services/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jobs: IJob[] = [];
  formContent: FormGroup;
  title = 'projetoangular';
  constructor(private jobService: JobService) {
    this.jobs = jobService.getAll();
    this.formContent = this.cleanForm();
  }

cleanForm() { 
  return new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })
}

createJob() {
  this.jobService.addJob({
    title: this.formContent.value.title,
    description: this.formContent.get('description')?.value,
    img: 'https://dummyimage.com/700x350/212529/fff.jpg'
  })
  this.formContent = this.cleanForm(); 
}
}
