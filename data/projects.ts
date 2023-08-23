import {Project} from '../ui/components/project-card';
import {Images} from '../core/libs/images';

export const projects: Project[] = [
  {
    name: '特浦乐餐厅小程序',
    description: '特浦乐快餐主打“出餐快，吃的香”，坚持用新鲜的食材认真做好每一道菜，让顾客在享受美食的同时也能享受便捷的服务。',
    headerImg: Images.topleRestaurant,
    sortServices: ['微信小程序', '前端'],
    sortTechnologies: ['uni-app', 'vue', 'UnoCss'],
  },
];
