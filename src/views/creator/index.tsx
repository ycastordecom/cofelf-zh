/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-16 22:31:04
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-05-08 01:26:40
 */
import {defineComponent} from 'vue';
import i499x210px from '@/assets/image/499x210px.png';
import style from './index.module.less';
import LOGO1184x160px from '@/assets/image/LOGO-1-184x160px.png';
import LOGO2364x165px from '@/assets/image/LOGO-2-364x165px.png';
import LOGO3157157px from '@/assets/image/LOGO-3-157x157px.png';
import news1 from '@/assets/image/news (2).png';
import news2 from '@/assets/image/news (3).png';
import news3 from '@/assets/image/news (4).png';
import news4 from '@/assets/image/news/news1.png';
import news5 from '@/assets/image/news/news2.png';
import news6 from '@/assets/image/news/news3.png';
import insImage from '@/assets/image/creator/ins.png'
import wbImage from '@/assets/image/creator/wb.png'
import hongImage from '@/assets/image/creator/hong.png'
export default defineComponent({
    name: 'Creator',
    setup() {
        const toPath = (path: string) => {
            window.location.href = path;
        };
        return () => (
          <div class={style.creator}>
            <div class={style.nav}></div>
            <div>
              <div>
                <div>潮流艺术家</div>
                <img src={i499x210px} alt="" />
                <div>--数字孪生缔造者</div>
              </div>
            </div>
            <div>
              <h2>官方合作伙伴</h2>
              <div>
                <img src={LOGO1184x160px} alt="" />
                <img src={LOGO2364x165px} alt="" />
                <img src={LOGO3157157px} alt="" />
              </div>
            </div>
            <div>
              <h3>联系我们</h3>
              <div>Braincircuits@163.com</div>
              <div>
                <img onClick={() => toPath('https://weibo.com/u/7387967060')} src={wbImage} alt="" />
                <img onClick={() => toPath('https://www.xiaohongshu.com/user/profile/604cd1a1000000000100ae69?xhsshare=CopyLink&appuid=6180ff6800000000020')} src={hongImage} alt="" />
                <img onClick={() => toPath('https://instagram.com/buzhiwuiiiiiiii?igshid=YmMyMTA2M2Y=')} src={insImage} alt="" />
              </div>
            </div>
            <div>
              <h2>新闻</h2>
              <div>
                <div onClick={() => toPath('https://mp.weixin.qq.com/s/yZnMgqylYkt8czjrCu9WZQ')} class={[style.item, 'img-hover']}>
                  <img src={news1} alt="" />
                  <div>
                    <div>QUEEN POWER 系列专访</div>
                    <div>吴子珺：用“妖精“打破偏见。为自己打开另一扇观察世界的窗， 构建一份新的认知</div>
                  </div>
                </div>
                <div
                  onClick={() => toPath('https://www.digitaljournal.com/pr/news/london-fashion-week-2023-fashion-scout-china-a-leading-international-platform-and-consultancy-for-designers')}
                  class={[style.item, 'img-hover']}
                >
                  <img src={news2} alt="" />
                  <div>
                    <div>美妆妖精•虚拟精灵</div>
                    <div>美妆妖精系列3D数字藏品已售罄！</div>
                  </div>
                </div>
                <div onClick={() => toPath('https://mp.weixin.qq.com/s/wRqtEVmgbsMooAya42oY5w')} class={[style.item, 'img-hover']}>
                  <img src={news3} alt="" />
                  <div>
                    <div>藏品首发--四大时刻</div>
                    <div>白衬E数字时装节“四大时刻”，第一波限量来袭</div>
                    <div>首款数字白村衣藏品，纪念女士白村衣第一个百年</div>
                  </div>
                </div>
                <div onClick={() => toPath('http://www.52hrtt.com/ar/n/w/info/fifm202302232111325405371')} class={[style.item, 'img-hover']}>
                  <img src={news4} alt="" />
                  <div>
                    <div>伦敦时装周上创意多元势不可挡的中华新锐</div>
                    <div>十六名中国设计师亮相，令国际四大之一的伦敦时装周创下其历史上中国品牌数量纪录</div>
                  </div>
                </div>
                <div
                  onClick={() => toPath('https://www.digitaljournal.com/pr/news/london-fashion-week-2023-fashion-scout-china-a-leading-international-platform-and-consultancy-for-designers')}
                  class={[style.item, 'img-hover']}
                >
                  <img src={news5} alt="" />
                  <div>
                    <div>伦敦时装周2023</div>
                    <div>ICOSELF次元秀场-数字高定系列」亮相本季伦敦时装周官方日程</div>
                  </div>
                </div>
                <div
                  onClick={() =>
                    toPath(
                      'https://3w.huanqiu.com/a/de583b/4BrkXiGe2hC?agt=%C3%83%C6%92%C3%86%E2%80%99%C3%83%E2%80%9A%C3%82%C2%AF%C3%83%C6%92%C3%A2%E2%82%AC%C5%A1%C3%83%E2%80%9A%C3%82%C2%BC%C3%83%C6%92%C3%A2%E2%82%AC%C2%B9%C3%83%E2%80%A6%C3%A2%E2%82%AC%C5%93'
                    )
                  }
                  class={[style.item, 'img-hover']}
                >
                  <img src={news6} alt="" />
                  <div>
                    <div>伦敦时装周强势归来！</div>
                    <div>广为人知的成熟品牌、初出茅庐的业内新秀，都在2月17日至2月21日汇集于2023年秋冬伦敦时装周的舞台，展示着时尚界对秋冬着装新趋势的理解。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    },
});
