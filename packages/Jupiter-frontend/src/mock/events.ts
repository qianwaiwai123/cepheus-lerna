import coffee from '../../assets/coffee.jpeg';
import camping from '../../assets/camping.jpeg';
import social from '../../assets/social.png';
import basketballCourt from '../../assets/basketball-court.jpeg';
import bazzar from '../../assets/bazzar.png';
import majiang from '../../assets/majiang.jpeg';

const Events = [
  {
    id: '1',
    title: '宁波咖啡节',
    description: '每年一度的宁波咖啡节又来了!快来集合广场参加吧',
    address: '宁波鄞州区集合广场',
    category: 'market',
    start_datetime: new Date('5.2'),
    end_datetime: new Date('5.3'),
    tags: ['集市', '咖啡'],
    image_url: coffee,
    coordinate: [121.53778, 29.81762],
    distance: '10'
  },
  {
    id: '2',
    title: '东钱湖露营',
    description: '周末去东钱湖露营呀',
    address: '宁波鄞州区东钱湖',
    category: 'camping',
    start_datetime: new Date('5.10'),
    end_datetime: new Date('5.13'),
    tags: ['露营', '户外'],
    image_url: camping,
    coordinate: [121.53998, 29.81704],
    distance: '15'
  },
  {
    id: '3',
    title: '周末剧本杀',
    description: '周末去剧本杀呀',
    address: '宁波鄞州区天一广场',
    category: 'social',
    start_datetime: new Date('5.2'),
    end_datetime: new Date('5.10'),
    tags: ['剧本杀', '社交'],
    image_url: social,
    coordinate: [121.53734, 29.81474],
    distance: '17'
  },
  {
    id: '4',
    title: '东论篮球赛',
    description: '篮球赛',
    address: '宁波鄞州区东论体育馆',
    category: 'sports',
    start_datetime: new Date('5.20'),
    end_datetime: new Date('5.21'),
    tags: ['运动', '篮球'],
    image_url: basketballCourt,
    coordinate: [121.53817, 29.81183],
    distance: '3'
  },
  {
    id: '5',
    title: '万象城快闪集市',
    description: '快闪夜市',
    address: '宁波海曙区万象城1楼',
    category: 'market',
    start_datetime: new Date('5.20'),
    end_datetime: new Date('5.25'),
    tags: ['集市', '休闲'],
    image_url: bazzar,
    coordinate: [121.54215, 29.81407],
    distance: '7'
  },
  {
    id: '6',
    title: '麻将活动',
    description: '麻将',
    address: '宁波鄞州区棋牌室',
    category: 'social',
    start_datetime: new Date('6.1'),
    end_datetime: new Date('6.3'),
    tags: ['麻将', '休闲'],
    image_url: majiang,
    coordinate: [121.54009, 29.81833],
    distance: '23'
  },
]

export default Events;