/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-08 22:27:30
 * @modify date 2018-01-08 22:27:30
 * @desc 头部
*/

import React, { Component } from 'react';

export default class Sider extends Component {
	render() {
		return (
            <div id="sidebar">
                <div className="panel">
                    <div className="inner">
                        <p>CNode：Node.js专业中文社区</p>
                        <div>
                            您可以
                            <a href="/signin">登录</a>
                            或
                            <a href="/signup">注册</a>
                            , 也可以
                            <a href="/auth/github">
                                <span className="span-info">
                                    通过 GitHub 登录
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <div className="inner ads">
                        <a href="https://alinode.aliyun.com/?ref=cnode" className="banner sponsor_outlink" data-label="alinode">
                            <img src="//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="" />
                        </a>
                        <div className="sep10"></div>
                        <a href="http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc&amp;utm_campaign=multicloud&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" className="banner sponsor_outlink" data-label="ucloud-banner">
                            <img src="//dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG" alt="" />
                        </a>
                        <div className="sep10"></div>
                        <a href="https://0x7.me/UDyj" className="banner sponsor_outlink" data-label="qiniu-sidebar">
                            <img src="//dn-cnode.qbox.me/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O" alt="" />
                        </a>
                    </div>
                </div>
                <div className="panel">
                    <div className="header">
                        <span className="col_fade">无人回复的话题</span>
                    </div>
                    <div className="inner">
                        <ul className="unstyled">
                            <li>
                                <div>
                                    <a className="dark topic_title" href="/topic/5a533acd99d207fa49f5cd11" title="node exec win乱码">node exec win乱码</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a className="dark topic_title" href="/topic/5a53180d99d207fa49f5ccfc" title="有没有人有兴趣写个运行docker容器的CLI">有没有人有兴趣写个运行docker容器的CLI</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a className="dark topic_title" href="/topic/5a5204a4afa0a121784a8a0e" title="教你用纯JavaScript实现微信跳一跳自动刷分">教你用纯JavaScript实现微信跳一跳自动刷分</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="panel">
                    <div className="header">
                        <span className="col_fade">积分榜</span>
                        &nbsp;
                        <a className="dark" href="/users/top100">TOP 100 &gt;&gt;</a>
                    </div>
                    <div className="inner">
                        <ol>
                            <li>
                                <span className="top_score">20660</span>
                                <span className="user_name"><a href="/user/i5ting">i5ting</a></span>
                            </li>
                            <li>
                                <span className="top_score">14760</span>
                                <span className="user_name"><a href="/user/alsotang">alsotang</a></span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="panel">
                    <div className="header">
                        <span className="col_fade">友情社区</span>
                    </div>
                    <div className="inner">
                        <ol className="friendship-community">
                            <li>
                                <a href="https://ruby-china.org/" target="_blank">
                                    <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" alt="" />
                                </a>
                            </li>
                            <div className="sep10"></div>
                            <li>
                                <a href="http://golangtc.com/" target="_blank">
                                    <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png" alt="" />
                                </a>
                            </li>
                            <div className="sep10"></div>
                            <li>
                                <a href="http://phphub.org/" target="_blank">
                                    <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png" alt="" />
                                </a>
                            </li>
                            <div className="sep10"></div>
                            <li>
                                <a href="https://testerhome.com/" target="_blank">
                                    <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="" />
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="panel">
                    <div className="header">
                        <span className="col_fade">客户端二维码</span>
                    </div>
                    <div className="inner cnode-app-download">
                        <img width="200" src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" />
                        <br />
                        <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
                    </div>
                </div>
            </div>
		);
	}
}