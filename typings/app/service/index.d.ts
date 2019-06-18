// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMusic from '../../../app/service/music';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    music: ExportMusic;
    test: ExportTest;
  }
}
