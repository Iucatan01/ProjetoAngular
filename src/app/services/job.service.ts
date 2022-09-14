import { Injectable } from '@angular/core';
import { IJob } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobs: IJob [] = [
    {
    title: 'Developer',
    description: 'Apoio aos clientes',
    img: 'https://dummyimage.com/700x350/212529/fff.jpg',
    },
    {
      title: 'Developer',
      description: 'Apoio aos clientes',
      img: 'https://dummyimage.com/700x350/212529/fff.jpg',
      }
  ];

  constructor() { }
  
  getAll() {
    return this.jobs;
  }
  addJob(job: IJob) {
    this.jobs.push(job);
  }
}
