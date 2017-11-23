import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      { icon: 'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png', title: '智能财务', content: '智能记账，业务财务实时一体化。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: '财务预警', content: '基于企业财务指标构建财务预警体系，平台级的财务分析及风险预警。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: '库存管理', content: '采购、生产、销售等核心业务流程全覆盖，支持安全库存量实时监控。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: '现金管理', content: '采用图形界面反应现金流入流出状况，监控应收帐款应付账款情况' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png', title: '融资服务', content: '连接金融机构，综合企业信息，便利融资服务。' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png', title: '绩效评价', content: '综合传统单个企业财务绩效评价与供应链协调绩效评价与供应链整体绩效评价。' },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, x: '+=10', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className="img"
          key="img"
        >
          <img src={item.icon} width="100%" />
        </TweenOne>
        <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
             踏上云端，链动未来
          </TweenOne>
          <TweenOne
            key="p"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-titleContent`}
          >
            Update to cloud, Upgrade to future
          </TweenOne>
          <QueueAnim
            key="ul"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
