/*
 * @Descripttion:
 * @version:
 * @Author: dekun lu
 * @Email: 1364978779@qq.com
 * @Date: 2023-02-12 23:34:48
 * @LastEditors: dekun lu
 * @LastEditTime: 2023-05-08 00:09:58
 */

import {defineComponent} from 'vue';
// import cart1 from '@/assets/image/card-1-1200x380px.png';
import style from './index.module.less';
import human from '@/assets/image/Head picture-330x400px.png';
import card from '@/assets/image/card-2.2-250x326px.png';
// import square from '@/assets/image/square-22x80px.png';
import router from '@/router';
import Lipstick from '@/assets/image/Lipstick Mechanic.png';
import Dragon from '@/assets/image/Dragon lady of the east.png';
import Butterflies from '@/assets/image/Butterflies create everything.png';
import Geometric from '@/assets/image/Geometric mirohime.png';
import National from '@/assets/image/National maiden.png';
import Sky from '@/assets/image/Sky land.png';
//@ts-ignore
import vedio from '@/assets/video/home.mp4'
    export default defineComponent({
        name: 'Index',
        setup() {
            const toPath = (path: string) => {
                window.location.href = path;
            };
            const toUrl = (url: string) => {
                router.push(url);
            };
            return () => (
              <div class={style.index}>
                <div>
                  <video controls>
                    <source src={vedio} type="video/mp4" />
                  </video>
                  <div>
                    <div>
                      <div>
                        <span>关于</span>
                        <span>吴不知</span>
                      </div>
                      <div>BUZHIWU</div>
                      <div>元潮牌IP的第N种可能性</div>
                      <div>THE NTH POSSIBILITY OF THE METABRAND IP</div>
                    </div>
                    <div class="img-hover" onClick={() => toPath('https://muselink.cc/MeleterWoo')}>
                      <img src={human} alt="" />
                      <div>
                        <p>脑回路文化&美妆妖精主理人</p>
                        <p>2021年底创立WEB3.0跨界潮玩品牌美妆妖精COSELF</p>
                      </div>
                    </div>
                  </div>

                  <div class={style.guangdong}>
                    {/* <img src={square} alt="" /> */}
                    <div class={style.text}>
                      {/* <h2>COSELF Metaverse </h2> */}
                      <h2>COSELF 次元秀场-数字高定系列</h2>
                    </div>
                  </div>
                  <div class={style.moment}>
                    <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
                      <img src={Lipstick} alt="" />
                      <div>口红机械师</div>
                    </div>
                    <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
                      <img src={Dragon} alt="" />
                      <div>龙悦东方</div>
                    </div>
                    <div onClick={() => toUrl('/fashion')} class={[style.item, 'img-hover']}>
                      <img src={Butterflies} alt="" />
                      <div>蝶生万物</div>
                    </div>
                  </div>
                  <div class={style.digtal}>
                    <h2>未来时尚-数字潮玩</h2>
                    <div>
                      <div class={[style.item, 'img-hover']}>
                        <img src={card} alt="" />
                        <div>浪浸漫之神</div>
                      </div>
                      <div class={[style.item, 'img-hover']}>
                        <img src={Geometric} alt="" />
                        <div>几何未来姬</div>
                      </div>
                      <div class={[style.item, 'img-hover']}>
                        <img src={National} alt="" />
                        <div>民族少女</div>
                      </div>
                      <div class={[style.item, 'img-hover']}>
                        <img src={Sky} alt="" />
                        <div>天空之境</div>
                      </div>
                    </div>
                  </div>
                  <div onClick={() => toUrl('/fashion')} class={style.seeallthe}>
                    浏览更多数字潮玩
                  </div>

                  <div class={style.coself}>
                    <div>
                      <h1>COSELF</h1>
                      <div>
                        {/* <p>BORAD</p> */}
                        <p>品牌介绍与合作</p>
                      </div>
                      <div onClick={() => toUrl('/creator')} class={style.button}>
                        前往查看
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
        },
    });