/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-16 00:34:36
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-05-08 01:19:57
 */

import { defineComponent, onMounted, ref } from 'vue';
import style from './index.module.less';
import digital from '@/assets/image/Digital tide toy.png';
// import i250x340px1 from '@/assets/image/250x340px (1).png';
// import i250x340pxw from '@/assets/image/250x340px (2).png';
// import i2250x340px1 from '@/assets/image/250x340px (3).png';
// import i2250x340px12 from '@/assets/image/250x340px (4).png';
import BUT1448x675px from '@/assets/image/BUT-1-448x675px.png';
import BUT2407x148pxfrom from '@/assets/image/BUT-2-407x148px.png';
import BUT3407x94px from '@/assets/image/BUT-3-407x94px.png';
import BUT478x132px from '@/assets/image/BUT-4-78x132px.png';
import EAST1448x675px from '@/assets/image/EAST-1-448x675px.png';
import EAST2144x361px from '@/assets/image/EAST-2-144x361px.png';
import EAST3171x331px from '@/assets/image/EAST-3-171x331px.png';
import EAST4209x275px from '@/assets/image/EAST-4-209x275px.png';
import LIPS2166x351px from '@/assets/image/LIPS-2-166x351px.png';
import LIPS3214x258px from '@/assets/image/LIPS-3-214x258px.png';
import LIPS4197x297px from '@/assets/image/LIPS-4-197x297px.png';
import i262x324px1 from '@/assets/image/262x324px-1.png';
import i19x280px from '@/assets/image/19x280px.png';
import i262x324px2 from '@/assets/image/262x324px-2.png';
import i262x324px3 from '@/assets/image/262x324px-3.png';
import i262x324px4 from '@/assets/image/262x324px-4.png';
import LIPS1591x365px from '@/assets/image/LIPS-1-591x365px.png';

// import BUT1591x365px2 from '@/assets/image/BLUEANDWHITEPOCELAIN273x512px.png';
// import SKYLAND273x512px from '@/assets/image/SKYLAND273x512px.png';
// import NATIONAL273x512px from '@/assets/image/NATIONALMAI273x512px.png';
import black from '@/assets/image/future/goblin/black.gif';
import blackthum from '@/assets/image/future/goblin/blackthum.png';
import green from '@/assets/image/future/goblin/green.gif';
import greenthum from '@/assets/image/future/goblin/greenthum.png';
import light from '@/assets/image/future/goblin/light.gif';
import lightthum from '@/assets/image/future/goblin/lightthum.png';
import pinBlue from '@/assets/image/future/goblin/pinBlue.gif';
import pinBluethum from '@/assets/image/future/goblin/pinBluethum.png';
import redYellow from '@/assets/image/future/goblin/redYellow.gif';
import redYellowthum from '@/assets/image/future/goblin/redYellowthum.png';
import white from '@/assets/image/future/goblin/white.gif';
import whitethum from '@/assets/image/future/goblin/whitethum.png';
import whiteBlue from '@/assets/image/future/goblin/whiteBlue.gif';
import whiteBluethum from '@/assets/image/future/goblin/whiteBluethum.png';
import whiteSky from '@/assets/image/future/goblin/whiteSkyBlue.gif';
import whiteSkythum from '@/assets/image/future/goblin/whiteSkyBluethum.png';
import w264x523px from '@/assets/image/WechatIMG255.png';
import w458x665px from '@/assets/image/458x665px.12b8c5f5.png';
const data = [
  {
    thum: greenthum,
    baseImage: green,
    title: '民族少女',
    content: '《民族少女》是一位具有个性和战斗力的女孩子，她从出生开始便肩负起守护自己的民族使命。在蹉跎岁月中，她战功累累，但脸上却看不见岁月的痕迹，有着不老的容颜，人们亲切地称她为“民族少女”。',
  },
  {
    thum: whiteSkythum,
    baseImage: whiteSky,
    title: '天空之境',
    content:
      '《天空之境》是自由的化身，她向往无拘无束和自由，她喜欢穿梭在风里、阳光下、森林中.....她有着深邃无限延伸的想象，充满着梦幻的期待。透过她能感受到“心外无物，闲看庭前花开花落；去留无意，漫随天外云卷云舒”的万物静好。',
  },
  {
    thum: whiteBluethum,
    baseImage: whiteBlue,
    title: '意境青花瓷',
    content:
      '《意境青花瓷》是一位古典美人，她喜青白两色，华美端庄却拨弄人的心弦，她给人一种淡淡的美感，她的身上有着蓝色交织的错杂之美，又有着梦回古代的神秘之感，她淡雅脱俗，温婉神秘，她的步步摇曳都会让人陶醉其中。',
  },
  {
    thum: whitethum,
    baseImage: white,
    title: '未来几何姬',
    content:
      '《未来几何姬》以水泥白为底色，辅以火、金色的炙热色系围绕，既有着纯洁无畏和超脱凡尘，又散发着强大的内生能量。《未来几何姬》犹如一位初入人间、不谙世事的小少女。自下凡以来，她带着对世界的好奇和探索之心，在跌跌撞撞中感受世间森罗万象和世间美好。这期间她经历了许多，期间有幸福的瞬间，有悲欢离合的别离，也有坎坷。但一路走来，她逐渐养成了强大的内心力量。不管顺境还是逆境，她永远保持着一份高傲和不羁，从来不被定义和枷锁捆绑。在成长道路中，她一直保持着最初的那份初心，坚持着纯粹的原生力量，在她的身上，有未来的无限种可能性。 ',
  },
  {
    thum: pinBluethum,
    baseImage: pinBlue,
    title: '浪漫之神',
    content:
      '《浪漫之神》有着多重人格，她本身有着极强的神秘感，给人一种距离感，但其实她的内心深处有着美好的纯真和温柔细腻。在不断见证世人的浪漫后，她逐渐懂得了什么才是真正地悦己爱TA，她逐渐也开始不以距离感示人，而是露出自己的小女孩一面。 ',
  },
  {
    thum: redYellowthum,
    baseImage: redYellow,
    title: '英伦玫瑰',
    content:
      '《英伦玫瑰》有着激情四射的活力和创造力，从小她便有着超强的想象力和动手能力，可以称之为“小天才”，而现在的她，依旧如初，对生活对工作有着更加激昂的斗志，无时无刻都能感受到她的正能量和对生活的热爱。 ',
  },
  {
    thum: blackthum,
    baseImage: black,
    title: '未来妖精',
    content:
      '日新月异的未来旅途里，要知道奔赴远方的你，路会为你敞开，花会为你绽放，夜色的微凉敌不过晨曦的暖光。努力保持热爱的你，终会有不凡的担当，终会好在朝朝暮暮。未来的下一个序章，交由你去遐想，未来就在你的手中。',
  },
  {
    thum: lightthum,
    baseImage: light,
    title: '宇宙幻蝶',
    content: '无论你是宇宙的微光，还是凡尘里的星星，在广袤的时空中，散落在宇宙之中的你本身就是浪漫，整个宇宙的光芒闪耀着你的美好。宇宙能给予你心有满天繁星，不曾，你才是那灿烂的星河，宇宙只为你永恒。',
  },
];

export default defineComponent({
  name: 'Fashion',
  setup() {
    const txt = [data[0].title];
    let content = data[0].content;
    onMounted(() => {
      //打字机
      const text = document.querySelector('.text') as HTMLElement;
      let index = 0;
      let xiaBiao = 0;
      let huan = true;
      setInterval(function () {
        if (huan) {
          text.innerHTML = txt[xiaBiao].slice(0, ++index);
        } else {
          text.innerHTML = txt[xiaBiao].slice(0, index--);
        }
        if (index == txt[xiaBiao].length + 3) {
          huan = false;
        } else if (index < 0) {
          index = 0;
          huan = true;
          xiaBiao++;
          if (xiaBiao >= txt.length) {
            xiaBiao = 0;
          }
        }
      }, 200);

      //监听页面滚动
      window.addEventListener('scroll', function () {
        // .scroll
        const scroll = document.querySelector('.scroll') as HTMLElement;
        // 获取他在页面中的位置
        const scrollTop = scroll.getBoundingClientRect().top;

        //页面滚动到他的位置时，让他逐渐显示
        if (scrollTop < 500) {
          scroll.style.opacity = '1';
          //动画
          scroll.style.transition = 'all 1s';
        } else {
          scroll.style.opacity = '0';
          //动画
          scroll.style.transition = 'all 1s';
        }
      });
    });

    //切换
    const image = ref(data[0].baseImage);
    const change = (item: any) => {
      image.value = item.baseImage;
      txt[0] = item.title;
      content = item.content;
    };
    return () => {
      return (
        <div>
          <div class={style.nav}></div>
          <div class={style.bgi}></div>
          <div class={style.banner}>
            <div>
              <h1>
                <img src={digital} alt="" />
                {/* <div>COSELF Dimension Show - Virtual couture series</div> */}
              </h1>
              <div>
                <h2>虚拟时装</h2>
              </div>
              <div>
                <div>
                  <div>蝶生万物</div>
                  <div>
                    <span>时装特点:</span> 星光头冠、星光珍珠链、镭射蝶翼短裙、半透明蝶翼披风、七彩镭射、仿生金属蝴蝶、幻彩荧光头饰
                  </div>
                  <div>
                    <span>时装简介:</span>{' '}
                    整体以异能感蝴蝶造型和充满机械感的设计为主，薄如蝉翼的双翅焕发未来感光泽，彩色的不规则服饰轻柔如丝飘逸风中。将未来感的光和仿生元素重构组合，展现蝶生万物的宇宙重开之美。
                  </div>
                  <div>
                    <img src={BUT2407x148pxfrom} alt="" />
                    <img src={BUT478x132px} alt="" />
                    <img src={BUT3407x94px} alt="" />
                  </div>
                </div>
                <img src={BUT1448x675px} alt="" />
              </div>
              <div>
                <img src={EAST1448x675px} alt="" />
                <div>
                  <div>龙悦东方</div>
                  <div>
                    <span>时装特点: </span>磨砂感皮质大衣、双边高开叉无袖龙鳞旗袍、龙形玉佩，仿生龙骨骼胸衣、液体金属龙骨
                  </div>
                  <div>
                    <span>时装简介:</span>服饰融合赛博新中式和废土机械风格，摆脱了新中式传统的东方温婉感，注入了赛博朋克的重金属机械风，让性感多了一种“机械味道”，体现一种0性别的自由反叛精神。
                  </div>
                </div>
                <div>
                  <img src={EAST2144x361px} alt="" />
                  <img src={EAST3171x331px} alt="" />
                  <img src={EAST4209x275px} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <img src={LIPS1591x365px} alt="" />
                  <div>
                    <h1>口红机械师</h1>
                    <div>
                      <span>时装特点：</span> 机能废土、街头潮玩、亮银色镭射幻彩反光背心、PU彩虹面挺括外套、恶魔角雷锋帽，透明PU棒球帽檐、充气塑料小挂饰、骷髅恶魔腰带扣、磨砂半透明恶魔玩偶
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <span>时装简介：</span>{' '}
                    身着亮银色镭射幻彩反光背心、PU彩虹面挺括外套、恶魔脚雷锋帽等元素，将街头文化和时尚拼接，还原出最酷的街头原力潮流感。张扬和明艳的色彩表达激情而躁动的情绪，不羁感展现属于率性街头girls的多元化审美风格。
                  </div>
                  <div>
                    <img src={LIPS2166x351px} alt="" />
                    <img src={LIPS3214x258px} alt="" />
                    <img src={LIPS4197x297px} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <h2>未来宇宙魔女</h2>
                <div>
                  <img src={w264x523px} alt="" />
                  <div>
                    <div>
                      <span>时装特点：</span> 发光纤维皮革+可降解实时生成空气羽绒、仿生水晶羽毛、粉宝石饰品、星空变色缎面流光裙
                    </div>
                    <div>
                      <span>时装简介：</span>{' '}
                      该服饰秉持将过旧循环出新时尚，使用可降解实时生成空气羽绒、仿生水晶羽毛、粉宝石饰品、星空变色缎面流光裙的可持续材质，配合大胆的色彩勾勒未来女王，完美诠释忠于自我的力量感。在虚实交错的元宇宙时空，致敬经典绅士美，探寻可持续的未来时尚。
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>高光赛车手</div>
                  <div>
                    <span>时装特点:</span> CYBERPUNK、浮空猫耳耳机、红色皮革裙，外层半透明渐变蓝pvc、积木模型风格长靴，耳机、透明渐变几何切面外套
                  </div>
                  <div>
                    <span>时装简介:</span>{' '}
                    服饰融合像素、电子、霓虹等未来机能感元素，给每一位着衣女孩打造了一个次元秀场和真实秀场在时空交错中融合共生的新生舞台，见证对未来生命和女性美的探索，以及对于美的新期待。
                  </div>
                </div>
                <img src={w458x665px} alt="" />
              </div>
              <h2>数字潮玩</h2>
              <div>
                <img src={image.value} alt="" />
                <div>
                  <div>
                    <p class="text"></p>
                  </div>
                  <div class="scroll">{content}</div>
                </div>
              </div>
              <div>
                {data.map((item) => {
                  return (
                    <div onClick={() => change(item)} class="img-hover">
                      <img src={item.thum} alt="" />
                      <div>{item.title}</div>
                    </div>
                  );
                })}
              </div>
              <h2>白衬E数字时装节--四大时刻</h2>
              <div>
                <div>
                  <img src={i262x324px1} alt="" />
                  <div>
                    <img src={i19x280px} alt="" />
                    <div>
                      <h2>职场时刻</h2>
                      <div>你不用一直聪明，适当的 “笨”更加分；你不用一直高能，适当“摆烂”更健康，撸撸猫、看看剧、喝喝快乐水，更能满血复活。</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={i262x324px2} alt="" />
                  <div>
                    <img src={i19x280px} alt="" />
                    <div>
                      <h2>精致时刻</h2>
                      <div>奥黛丽-赫本说：“我认为， 每一天，你至少得过一个精致时刻〞，任凭，时光荏苒，潮流不断。。每一个心安于当下的时刻，都是属于你的精致时刻。</div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={i262x324px3} alt="" />
                  <div>
                    <img src={i19x280px} alt="" />
                    <div>
                      <h2>闪耀时刻</h2>
                      <div>
                        人生里的光，少有得天独厚的万种聚焦，多是一步一步的沿途仔细收集能量与耐心努力付出，做耐心的生活旅人，把注意力Al in
                        热爱，迎着难，迎着光，凡过去，宽心释怀，给过去一点时间，过去都会过去；凡未来，耐心静候，给未来一点时间，末来都会过来； 足够燃烧的人生，自然会有属于你的高光时刻。
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={i262x324px4} alt="" />
                  <div>
                    <img src={i19x280px} alt="" />
                    <div>
                      <h2>未来时刻</h2>
                      <div>
                        无论你选择将毕生精力投入做什么，无论你的兴趣要带你去向哪种未来，拿起自己所获的力量，将它用在正确的地方，找到自己无畏的一面，让它找到你要的末来，敢创，末来时刻就是现在时刻，从现在，开始相信，开始幸运，开始自由，开始平等，开始非同凡响！
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  },
});
