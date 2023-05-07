/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-15 00:15:11
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-05-08 00:37:00
 */
import cart1 from '@/assets/image/card-1-1200x380px.png';
import { defineComponent, onMounted } from 'vue';
import style from './index.module.less';
import coself from '@/assets/image/metavers-1150x140px.png';
import i150260px from '@/assets/image/110x220px.png';
import i110x220px from '@/assets/image/110x220px (7).png';
import i110x220px2 from '@/assets/image/110x220px (1).png';
import i110x220px3 from '@/assets/image/110x220px (2).png';
import i110x220px5 from '@/assets/image/110x220px (5).png';
import i110x220px6 from '@/assets/image/110x220px (6).png';
import i110x220px36 from '@/assets/image/110x220px (3).png';
import i538x1077px from '@/assets/image/538x1077px.png';
import logo from '@/assets/image/logo-220x60px.png';
import i65x65px from '@/assets/image/65x65px.png';
import i386x170px from '@/assets/image/386x170px (1).png';
import i386x170px2 from '@/assets/image/23.png';
import i386x170px3 from '@/assets/image/3.png';
import i386x170px4 from '@/assets/image/4.png';
import i767x293px from '@/assets/image/767x293px.png';
import i234x176px from '@/assets/image/234x176px (1).png';
import i234x176px2 from '@/assets/image/234x176px (2).png';
import i234x176px3 from '@/assets/image/234x176px (3).png';
import i234x176px4 from '@/assets/image/234x176px (4).png';
import i299x364px from '@/assets/image/299x364px.png';
import cart from '@/assets/image/coself/items/cart.png';
import gile from '@/assets/image/coself/items/gile.png';
import police from '@/assets/image/coself/items/police.png';
import rich from '@/assets/image/coself/items/rich.png';
import steave from '@/assets/image/coself/items/steave.png';
import tea from '@/assets/image/coself/items/tea.png';
import work from '@/assets/image/coself/items/work.png';
import coself1 from '@/assets/image/coself/coself1.png';
//@ts-ignore
import coselfVideo from '@/assets/video/coself.mp4';
import { ref } from 'vue';
export default defineComponent({
  name: 'Series',
  setup() {
    const imageActive = ref(0);
    const imageBase = ref(i538x1077px);
    const imageClick = (index: number, image: any) => {
      imageActive.value = index;
      imageBase.value = image;
    };

    onMounted(() => {
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
        }
      });
    });
    return () => {
      return (
        <div class={style.series}>
          <img src={coself} alt="" />
          <iframe scrolling="no" src="http://39.105.140.152:81/" frameborder="0" margin-top="1px"></iframe>
          <div class={style.metavers}>
            <div>
              <h1>COSELF</h1>
              <h2>次元秀场</h2>
              <p>
                <p>
                  新春伊始，万象更生，时空交错中一键打破2023新次元，碰撞新锐的数字时尚，彰显新的美学时尚和先锋态度。2月17-21日，以打造WBE3.0虚实共生IP的美妆妖精COSELF品牌将带着新一季作品「COSELF次元秀场-数字高定系列」亮相本季伦敦时装周官方日程。
                </p>
                <p>
                  “COSELF 次元秀场-数字高定系列」是由专注虚拟时尚、美学输出、新潮流艺术的潮流艺术家、跨媒介创作者&策展人吴子珺BUZHIWU设计师打造。据BUZHIWU介绍，该系列是选自美妆妖精COSELF
                  次元秀场潮玩系列视觉延展而来的虚实时尚单品，延续品牌“致敬未来”的可持续时尚发展理念，以超现实的未来主义和潮流街头风格为灵感，用全新大胆的配色和设计赋予了虚拟时尚更多的活力姿态。 SIS
                </p>
              </p>
            </div>
          </div>

          <div class={style.box}>
            <div>
              <h1>BLND BOX</h1>
              <h2>一一盲盒系列</h2>
              <div>
                <div>
                  <div>
                    <img onClick={() => imageClick(0, cart)} class={imageActive.value === 0 ? 'img-click' : ''} src={i150260px} alt="" />
                  </div>
                  <img onClick={() => imageClick(1, gile)} class={imageActive.value === 1 ? 'img-click' : ''} src={i110x220px} alt="" />
                  <img onClick={() => imageClick(2, work)} class={imageActive.value === 2 ? 'img-click' : ''} src={i110x220px2} alt="" />
                  <img onClick={() => imageClick(3, rich)} class={imageActive.value === 3 ? 'img-click' : ''} src={i110x220px3} alt="" />
                  <img onClick={() => imageClick(4, steave)} class={imageActive.value === 4 ? 'img-click' : ''} src={i110x220px5} alt="" />
                  <img onClick={() => imageClick(6, police)} class={imageActive.value === 6 ? 'img-click' : ''} src={i110x220px6} alt="" />
                  <img onClick={() => imageClick(7, tea)} class={imageActive.value === 7 ? 'img-click' : ''} src={i110x220px36} alt="" />
                </div>
                <img class="scroll" src={imageBase.value} alt="" />
              </div>
            </div>
          </div>
          <div class={style.news}>
            {/* <div>Made In China | Introducing the MUA National Fashion Models</div> */}
            {/*<div class="img-hover">*/}
            {/*  <img src={i540x760px} alt="" />*/}
            {/*  <div>Quintessence of Chinese high tide play art</div>*/}
            {/*</div>*/}
            {/*<div class="img-hover">*/}
            {/*  <iframe class="img-hover" scrolling="no" src="http://39.105.140.152:81/" frameborder="0" margin-top="1px"></iframe>*/}
            {/*  <div>展讯</div>*/}
            {/*</div>*/}
            <div>
              <div>
                <video controls>
                  <source src={coselfVideo} type="audio/mpeg" />
                </video>
              </div>
              <div onClick={() => (window.location.href = 'https://mp.weixin.qq.com/s/2E4InmOdEAorCLrirkA14A')}>
                <img src={coself1} />
                <div>盲盒潮玩一一凤翔九天</div>
                <span>每个女人都是一个自由、自信的个体，像凤凰一样美丽。她们的力量与她们的柔情并存，绽放着女性特有的光芒。</span>
              </div>
            </div>
          </div>
          <div class={style.fall}>
            <div>礼赞中国 系列盲盒</div>
            <div>
              <img src={cart1} />
              <div>
                <p>重塑末来，传承经典</p>
                <p>致敬经典国宝，用育盒讲述山河和民族的绝美。</p>
                <p>即将推出的系列包括6个潮玩。</p>
                {/* <span>*Only one model is currently presented on the webpage.</span> */}
              </div>
            </div>
          </div>
          <div class={style.joint}>
            <div>品牌联动</div>
            <div>authorization</div>
            <div>
              <div>
                <div>
                  <img src={logo} alt="" />
                  <img src={i65x65px} alt="" />
                  <div>NOIR</div>
                </div>
                <div>
                  <img src={i386x170px} alt="" />
                  <img src={i386x170px2} alt="" />
                  <img src={i386x170px3} alt="" />
                  <img src={i386x170px4} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <img src={logo} alt="" />
                  <img src={i65x65px} alt="" />
                  <div>COSELF FASHION</div>
                </div>
                <div>
                  <img src={i767x293px} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <img src={logo} alt="" />
                  <img src={i65x65px} alt="" />
                  <div>MUA</div>
                </div>
                <div>
                  <div>
                    <img src={i234x176px} alt="" />
                    <img src={i234x176px2} alt="" />
                    <img src={i234x176px3} alt="" />
                    <img src={i234x176px4} alt="" />
                  </div>
                  <img src={i299x364px} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  },
});
