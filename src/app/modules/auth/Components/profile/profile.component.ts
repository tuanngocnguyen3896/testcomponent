import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public deviceInfo = null;
  public isMobile: boolean = false;
  public isTablet: boolean = false;
  public isDesktopDevice: boolean = false;

  constructor(private deviceService: DeviceDetectorService) {
    this.epicFunction();
  }

  ngOnInit() {
    this.epicFunction();
  }

  ngOnChanges() {
    this.epicFunction();
  }

  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet); // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.

    this.isMobile = isMobile;
    this.isTablet = isTablet;
    this.isDesktopDevice = isDesktopDevice;
  }
}
