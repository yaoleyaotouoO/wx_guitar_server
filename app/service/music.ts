import { Service } from 'egg';

/**
 * Music Service
 */
export default class MusicService extends Service {
  public async getMusicList() {
    const { app } = this;

    const result = await (app as any).mysql.select('music');
    return result;
  }
}
