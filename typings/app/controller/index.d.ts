// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportMusic from '../../../app/controller/music';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    music: ExportMusic;
  }
}
