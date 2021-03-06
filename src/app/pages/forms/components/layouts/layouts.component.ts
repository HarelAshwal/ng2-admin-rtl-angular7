import {Component} from '@angular/core';
import { UploadInput } from 'ngx-uploader';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.html',
})
export class Layouts {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/klipa.png'
  };
  public uploaderOptions = {
    // url: 'http://website.com/upload'
    
    url: '',
  };

  public fileUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
  
  constructor() {
  }

  ngOnInit() {
  }
}
