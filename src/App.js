import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Apps extends Component {
  render() {
    return (
      <div className="Child-one">
        <div className='imgBx'>
          <img src='./images/timg.jpg'/>
        </div>
      </div>
    );
  }
}
class Project extends Component {
  render() {
    return (
      <div className="Project">
        <div className='ProBx'>
          <ul>
            <li className='left'>
              <div className='Mu-bx'>
                <div className='M-img-bx'>
                  <img src='./images/bao1.jpg'/>
                </div>
                <p>技能培训</p>
              </div>
            </li>
            <li className='left'>
              <div className='Mu-bx'>
                <div className='M-img-bx'>
                  <img src='./images/bao2.jpg'/>
                </div>
                <p>兑换好礼</p>
              </div>
            </li>
            <li className='left'>
              <div className='Mu-bx'>
                <div className='M-img-bx'>
                  <img src='./images/bao3.jpg'/>
                </div>
                <p>投保演示</p>
              </div>
            </li>
            <li className='left'>
              <div className='Mu-bx'>
                <div className='M-img-bx'>
                  <img src='./images/bao4.jpg'/>
                </div>
                <p>邀请豪礼</p>
              </div>
            </li>
            <div className='clear'></div>
          </ul>
        </div>
      </div>
    );
  }
}
class GreyBx extends Component {
  render() {
    return (
      <div className="GreyBx">
      </div>
    );
  }
}
class MtLists extends Component {
  render() {
    return (
      <div className="MtLists">
        <div className='ImgBx'>
          <p >"西瑞士"女性方案{this.props.name}</p>
        </div>
        <div className='listBx'>
          <ul>
            <li className='left'>
              <div className='price'>
                <p>￥{this.props.pri}元起</p>
              </div>
            </li>
            <li className='left'>
              <div className='ggao'>
                <div className='ggbx'>
                  <div>
                    <div className='t left'>推广奖励</div>
                    <div className='z left'>最高{this.props.Rebate}%</div>
                    <div className='clear'></div>
                  </div>
                </div>
              </div>
            </li>
            <div className='clear'></div>
          </ul>
        </div>
      </div>
    );
  }
}
class BigList extends Component {
  render() {
    return (
      <div className="BigList">
        <MtLists name={"A"} pri={18} Rebate={13} />
        <MtLists name={"B"} pri={51} Rebate={24} />
        <MtLists name={"C"} pri={29} Rebate={66} />
      </div>
    );
  }
}
class SafeLists extends Component {
  render() {
    return (
      <div className="SafeLists">
        <div className='Safebx'>
          <div className ='left img-Safe'>
            <div className='SafeL'>
               <img src={this.props.imgurl}/>   
            </div>
          </div>
          <div className ='left text-Safe'>
            <div className='SafeR'>
              <p className= 'Safetitle'>{this.props.title}</p>
              <p className= 'Safecont'>{this.props.context}</p>
              <div className='safePrice'>
                <ul>
                  <li className='left L'>
                    <div className=''>
                        <p>￥{this.props.price}元起</p>
                    </div>
                  </li>
                  <li className='left R'>
                    <div className=''>
                      <div className='RRbx'>
                        <div>
                          <div className='t left'>推广奖励</div>
                          <div className='z left'>最高{this.props.Rebate}%</div>
                          <div className='clear'></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className='clear'></div>
                </ul>
              </div>
            </div>
          </div>
          <div className ='clear'></div>
        </div>
      </div>
    );
  }
}
class Safe extends Component {
  render() {
    return (
      <div className="Safe">
        <SafeLists imgurl={'./images/timg.jpg'} title={"“智护30”成人重疾保险”"} context={"“夹心族”健康保障计划，涵盖110种疾病，确认机赔礼”"} price={840} Rebate={51}/>
        <SafeLists imgurl={'./images/timg2.jpg'} title={"“加朵白”成人重疾保险”"} context={"“夹心族”健康保障计划，涵盖110种疾病，确认机赔礼”"} price={100} Rebate={25}/>
        <SafeLists imgurl={'./images/timg3.jpg'} title={"“奥享无忧”成人重疾保险”"} context={"“夹心族”健康保障计划，涵盖110种疾病，确认机赔礼”"} price={3} Rebate={35}/>
        <SafeLists imgurl={'./images/timg.jpg'} title={"“守护30”成人重疾保险”"} context={"“夹心族”健康保障计划，涵盖110种疾病，确认机赔礼”"} price={440} Rebate={51}/>
        <SafeLists imgurl={'./images/timg2.jpg'} title={"“新家成无忧意外险”"} context={"“夹心族”健康保障计划，涵盖110种疾病，确认机赔礼”"} price={168} Rebate={34}/>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="Parent">
        <div className='Title'>
          <p>泰康在线</p>
        </div>
        <Apps/>
        <Project/>
        <GreyBx/>
        <BigList/>
        <GreyBx/>
        <Safe/>
        <GreyBx/>
        <div className='Bottom'>
          <img src='./images/timg4.jpg'/>
        </div>
      </div>
    );
  }
}


export default App;
