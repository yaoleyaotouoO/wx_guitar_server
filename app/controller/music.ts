import { Controller } from 'egg';

export default class MusicController extends Controller {
  public async getMusicList() {
    const { ctx } = this;
    const result = await ctx.service.music.getMusicList();

    ctx.body = result;
    ctx.status = 200;
  }
}
