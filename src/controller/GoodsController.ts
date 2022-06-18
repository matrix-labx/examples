import { Controller, Get, Post, Query } from 'matrix-web';

@Controller()
export default class GoodsController {
  @Get('/', {
    name: '获取商品详情',
    description: '这是一个获取商品详情接口',
    middleware: [],
  })
  async getGoodsDetail(@Query('alias') alias: string) {}

  @Post('/goods', {
    name: '创建商品',
    description: '这是一个创建商品接口',
  })
  async createGoods() {}
}
