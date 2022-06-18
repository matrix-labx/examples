import { Controller, Get, Query, Inject } from 'matrix-web';
import IndexService from '../service/IndexService';

@Controller()
export default class IndexController {
  @Inject()
  private indexService!: IndexService;

  @Get('/', {
    name: '首页',
    description: '这是一个首页',
    middleware: [],
  })
  async getIndexHtml(@Query('name') name: string, @Query('age') age: number) {
    console.log(name, age);
  }
}
