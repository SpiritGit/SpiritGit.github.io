---
title: 基于时空伴随交通流特征的车险保费厘定研究
date: 2022-06-08
cover: https://raw.githubusercontent.com/SpiritGit/SpiritGit.github.io/main/src/images/covers/car_insurance.jpeg
tags: ["UBI车险", "交通流", "时空伴随", "保费厘定", "TFUBI车险"]
---

<center>王鑫之，胡昕宇</center>
<center>（南京感动科技有限公司 智慧交通研究中心，江苏省 南京市210004）</center>


**摘要**：商业车险是财产保险公司营收的重要险种，亦是人民社会生活中的重要组成部分，然而车辆行驶过程中的风险因素众多，难以精确度量，因此商业车险费率定价一直以来是多方关注的重点问题。传统车险费率厘定主要考虑驾驶人的年龄与驾龄、性别等个人因素，以及车型、车龄、用途等车辆因素，而忽略了驾驶人的行为因素。UBI车险根据驾驶人的行为习惯计算得到调整系数，对基本费率进行修正，一定程度优化了费率定价。本文在此基础上，进一步考虑了交通流对驾驶人行为的影响，即认为驾驶行为会受交通流状况的影响。本文从若干交通流指标中提取会影响驾驶行为并最终影响车辆出险风险的三个交通流风险评价指标，进而给出其计算公式，并通过熵权法推导各风险指标的权重。进一步通过历史观测法确定保险实操中的单车交通流风险评价指标的计算方式，最终，本文计算得到单车的交通流风险指标及交通流调整系数，并基于此对UBI费率进行调整得到TFUBI费率，即基于交通流及实际使用的保险，从而帮助保险公司以一种客观全面的风险衡量方式，对其保险产品做出更精准的定价，最终达成保险公司与客户的双赢。

**关键词**：UBI车险，交通流，时空伴随，保费厘定，TFUBI车险

# Research on Vehicle Insurance Premium Determination Based on the Characteristics of Space-time Accompanying Traffic Flow

<center>Xinzhi Wang, Xinyu Hu</center>
<center>（Research Center of Intelligent Transportation，Nanjing Microvideo Technology Co. Ltd., Nanjing City 210004, P.R.China）</center>

**Abstract**: Commercial vehicle insurance is an important type of insurance for property insurance companies' revenue, and it is also an important part of people's social life. However, there are many risk factors in the process of vehicle driving, which are difficult to measure accurately. Therefore, the pricing of commercial vehicle insurance rates has always been the focus of attention from many parties. The traditional vehicle insurance rate determination mainly considers the driver's age, driving experience, gender and other personal factors, as well as vehicle factors such as vehicle type, vehicle age, and purpose of usage, while ignoring the driver's behavior. UBI vehicle insurance calculates the adjustment coefficient according to the driver's behavior habits, and corrects the basic rate, which optimizes the rate pricing to a certain extent. On this basis, this paper further considers the influence of traffic flow on driver behavior, that is, it is believed that driving behavior will be affected by traffic flow conditions. In this paper, three traffic flow risk evaluation indicators that will affect driving behavior and ultimately affect the risk of vehicle accident are extracted from several traffic flow indicators, and their calculation formulas are given, then deduce the weight of each risk indicator through the entropy weight method. Further, the single-vehicle traffic flow risk evaluation indicators in insurance practice are determined by historical observation method. Finally, this paper calculates the traffic flow risk indicator and traffic flow adjustment coefficient of single-vehicle, and adjusts the UBI rate based on this to obtain TFUBI, that is, insurance based on traffic flow and actual usage, thus helping insurance companies to make more accurate pricing of their insurance products in an objective and comprehensive risk measurement method, and finally achieve a win-win situation between insurance companies and customers.

**Key Words**: UBI vehicle insurance, traffic flow, space-time accompanying, premium determination, TFUBI vehicle insurance


# 引言

保险，作为社会生活中规避风险的重要工具，已成为我国金融与社会保障体系的重要组成部分。随着我国经济的不断发展，乘用车市场也稳步扩大，截至2020年，我国的汽车保有量已达2.8亿辆，这也使得车险成为保险体系中十分重要的组成部分。

发展初期，由于扩张迅速而又缺乏监管，我国的车险市场经历了一段野蛮生长时期，截至1988年，我国的车险保费收入首次超过20亿元。2001年到至今，随着车险改革的不断深化，车险数据的真实性问题，中介乱象问题，打价格战扰乱市场等问题逐渐浮出水面。随着这些问题的不断解决与修正，我国车险市场稳步扩张，孟晗（2022）<sup>[3]</sup>的研究显示，截至2020年，我国车险保费收入达8245亿元。

然而，当前我国车险市场及相关产品仍存在若干问题。

从保险公司角度看，随着车险费率改革的深化，保险公司不断推出以“降价、增保、提质”为导向的车险产品。然而，一方面，各保险公司以不断降低车险产品的利润空间，以价格战，送赠品等方式吸引客户的行为愈演愈烈，销售成本费用不断提高；另一方面，由于无法准确甄别投保人的出险概率，从而导致保险公司利益受损。从投保人角度看，大量的投保人事故率极低，导致这部分消费者以不低的保费投入承担大量高风险车主的索赔额，使其投入与收益不相匹配。

以上问题的产生的主要缘由是当前大部分车险产品只考虑了相对静态的因素，即驾驶人的年龄与驾龄、性别等个人因素，以及车型、车龄、用途等车辆因素，而忽略了关键的动态因素，即驾驶行为偏好、路况及交通流特征等。UBI（Usage Based Insurance）车险在一定程度上解决了此问题，其思想是基于驾驶人行为偏好对基础费率进行调整。

2020年9月开始的新一轮的车险综合改革，为上述问题提供了进一步优化的渠道，改革的主旨是鼓励科技赋能车险市场，利用大数据等新兴技术，对车辆、驾驶人行为，对路况及交通流特征进行更为精致的刻画，从而优化车险产品定价策略。因此，本文着重考虑基于交通大数据刻画时空伴随的交通流特征，并计算得出调整系数以优化UBI车险。


# 1  UBI车险介绍

本节主要介绍UBI（Usage Based Insurance，基于实际行为的保险），该险种通过在传统车险费率基础上，加入了用户或被保险人的驾驶行为影响因子，从而实现保费的定制化与精准化。下面对UBI车险做简单介绍。

UBI车险基于驾驶员在实际驾驶行为中的偏好进行费率修正，即通过收集各驾驶员的行为进行驾驶员出险风险分析，对传统的基准费率进行修正，得到UBI费率。当前驾驶员行为数据的常见采集工具主要有安装在汽车上的前装数据记录设备、OBD（车上诊断系统）、手机等。主要采集的信息有车辆的周期驾驶里程，连续驾驶里程、时长，行车速度偏好等。UBI车险的目标是实现一人一价的差异化定价，最终达成风险较高的车主支付较高的保费，而低风险车主支付较低保费，以实现客户与保险公司的双赢。

UBI车险已有一些成熟的应用，尤其在西方已经产生了相对成熟的保险模式。2004年，美国GMAC保险公司基于导航设备的记录历程数对低里程车主收取相对较低的保费<sup>[5]</sup>。2011年，StateFarm公司推出一种Drive Safe & Save产品，其策略为收取较低的首年保费，条件为需要安装其车载设备，进而根据车载设备记录进行后续保费的调整<sup>[4]</sup>。2016年，我国平安保险基于其平安好车主APP，实现对用户行为偏好的建模，从而推出其UBI车险产品<sup>[2]</sup>。

总的来说，UBI车险弥补了传统车险的不足，一定程度上实现了保险公司与驾驶人的双赢，同时对规范驾驶人行为起到了积极作用，因为其定价策略主要为提高高风险行为偏好者的保费。

![](https://raw.githubusercontent.com/SpiritGit/Research/main/Paper/TFUBI/pics/UBI.jpg)
<center>图1: UBI费率厘定流程</center>


# 2  基于交通流的风险评价指标构建

如前文所述，UBI车险通过分析驾驶员的行为偏好，一定程度上实现了一人一价的差异化定价策略。

然而，本文认为当前UBI车险仍存在不足，原因在于，驾驶行为不仅受驾驶员本身的影响，更受其所在交通流状况的影响，即驾驶员会根据车辆所在交通流的特征作出对应的驾驶行为，如常处于高密度交通流的车辆，其出险风险通常高于处于低密度交通流的车辆，因为其所面临的交通流不确定性更多，所以交通流特征会对车辆安全性，即索赔风险产生一定的影响。

本节基于交通大数据进行交通流风险评价指标构建，提取综合拥堵指数、车流交织指数、大型车辆指数三个评价指标，为后续量化每辆车所面临的交通流风险做准备。


## 2.1  综合拥堵指数
SánchezGonzález,S.等（2021）<sup>[8]</sup>对拥堵与事故的关系进行了相关研究，其基于拉美十个城市的2019年观测数据，得出拥堵对事故数量有正向的非线性影响，其结论表明，减少10%的拥堵会减少3.4%的事故次数，针对圣保罗，其效果尤为明显，事故次数减少了5.4%。由此表明，拥堵会对事故并最终对车辆出险造成一定影响。下面给出交通流综合拥堵指数计算方式，参见王殿海等（2013）<sup>[6]</sup>。

## 2.1.1  车流速度拥堵指数
车流速度是用于衡量车流整体的行驶状态指标之一，具体实践中主要采用点测速及区间测速的方式获取单车速度，进而提取同一时空范围内所有车辆的速度中位数或平均数，用于表征该股车流的速度。

观测周期$T_J$内，该股车流速度计算公式如下，

$$
\begin{equation}\label{speed}
v = \frac{\sum^n_{i=1}v_i}{Q}, \tag{1}
\end{equation}
$$

其中Q表示观测周期$T_J$内观测到的车辆数，$v_i$表示第$i$辆车的速度。

由此，基于式($\ref{speed}$)，车流速度拥堵指数为


$$
\begin{equation}\label{speed_con}
J_v = 1 - \frac{v}{v_f}, \tag{2}
\end{equation}
$$

其中$v_f$表示自由流速度，$v$表示交通流速度，此处交通流速度采用所有观测车辆车速的均值。

## 2.1.2  时间占有率拥堵指数
时间占有率指在观测周期$T_J$内，所观测断面被车辆占用的时间与$T_J$之比，对于m车道公路，其时间占有率如下：

$$
\begin{equation}\label{time_occ}
\overline{o} = \frac{1}{m} \sum^m_{i=1} o_i, \tag{3} 
\end{equation}
$$

其中，$o_i$表示第$i$条车道的时间占有率，

$$
\begin{equation}
o_i = \frac{\sum^{N_i}_{n=1}t_n}{T_J},
\end{equation} \nonumber
$$

其中，$t_n$表示第n辆车通过观测断面所需时间，$N_i$表示第$i$条车道在观测时间内通过该断面的总车辆数，$T_J$表示观测时间。

基于上述时间占有率（式$\ref{time_occ}$），进一步得出时间占有率拥堵指数为
$$
\begin{equation}\label{time_con}
J_o = \frac{\overline{o}}{o_{max}}. \tag{4}
\end{equation}
$$

## 2.1.3  综合拥堵指数
基于上述车流速度拥堵指数（式$\ref{speed_con}$）及时间占有率拥堵指数（式$\ref{time_con}$），可进一步得出综合拥堵指数如下
$$
\begin{equation}\label{con}
J = \lambda J_v + (1-\lambda) J_o, \tag{5}
\end{equation}
$$
其中$\lambda\in[0,1]$为指标权重系数，可根据实际情况进行调整，综合拥堵指数$J$取值范围为$[0,1]$。


## 2.2  车流交织指数
车流交织指数旨在刻画交通流在交织区的分流合流模式，交织区指交通控制设施的道路分叉或合并区域，如常见的枢纽匝道汇入汇出口等。车流交织会造成交通流紊乱，车速放缓等危险因素。Tang H和Mao X.H（2020）<sup>[9]</sup>研究了交织区对交通事故的影响，其以西安为例，结果表明由于交通流的交织，上游汇流区和中间交织区易发生侧面碰撞和追尾事故，下游分流区则易发生翻车和与护栏碰撞是的事故。Wang, F.等（2022）<sup>[10]</sup>基于VISSIM模拟尝试对交织区进行优化，结果表明，经过优化的交织区长度可以显著减少车辆排队长度。

下面，本文给出计算公式。对于汇入或汇出口，在观测周期$T_I$内，
$$
\begin{equation}\label{inter_index}
I=\frac{Q_r}{Q_t}, \tag{6}
\end{equation}
$$
其中$I\in[0,1]$表示车流交织指数，$Q_r$表示观测周期$T_I$内从匝道汇入或汇出的车辆数，$Q_t$表示观测周期$T_I$内总车辆数。


## 2.3  大型车辆指数
近年来，随着物流需求的不断攀升，我国高速路网中的大型车辆占比平均可达25%。孔德文（2018）<sup>[1]</sup>，张功（2018）<sup>[7]</sup> 进行了大型车辆对高速公路交通运行的影响研究，结果表明，大型车辆对交通流运行存在着明显的移动瓶颈效应和屏障效应。

大型车辆指数指观测时间$T_L$内收费车型为大型客车及大型货车车辆数占总车辆数的比例，其中，大型车辆指额定荷载参数大于7吨的车辆。计算公式为
$$
\begin{equation}\label{large_car_index}
L = \frac{Q_l}{Q_t}, \tag{7}
\end{equation}
$$
其中$P\in[0,1]$为大型车辆指数，$Q_l$为观测周期$T_L$内大型车辆数，$Q_t$为观测周期$T_L$内总车辆数。


# 3  TFUBI车险浮动费率厘定研究
基于第一节中介绍的UBI车险及第二节交通流风险评价指标，本文提出一种TFUBI（Traffic Flow and Usage Based Insurance），即基于交通流及实际使用的保险，旨在弥补UBI车险在感知路况、交通流特征等方面的不足，从而更全面的刻画被保车辆的所面临的风险，实现实现更精准的保险费率定价。

该险种的核心思想是在UBI费率的基础上，加入基于时空伴随交通流特征提取的修正系数，进而得到TFUBI费率。其中，时空伴随是关键控制条件，指给定时间段内与关注车辆（被保车辆）处于同一观测断面或区间。本文认为，对于任一被保车辆，其时空伴随的交通流风险与其驾驶员行为习惯对其出险风险共同造成影响，因此，本文提出一种基于历史时空伴随交通流特征提取被保车辆交通流修正系数，并修正UBI最终得到TFUBI的方法。具体思路参见图2。

![](https://raw.githubusercontent.com/SpiritGit/Research/main/Paper/TFUBI/pics/TFUBI.jpg)
<center>图2: TFUBI费率厘定流程</center>

与UBI车险费率相比，计算TFUBI费率的核心技术点在于交通流调整系数的计算，计算思路为，

1）	计算出被保车辆的若干交通流风险评价指标（参见第二节）；

2）	确定各交通流风险评价指标的权重；

3）	根据加权平均法计算得到被保车辆的交通流风险指数；

4）	根据若干被保车辆的交通流风险指数获取基准交通流风险指数；

5）	最终得到该被保车辆的交通流调整系数。

## 3.1  单车各交通流风险评价指标计算

现给出在保险实操中单车（给定的被保险车辆）的各交通流风险评价指标计算方式。核心思想是基于若干次历史观测的风险评价指标取均值，得到经验的单车各交通流风险评价指数。

### 3.1.1  单车综合拥堵指数
假设观测该被保车辆$N$次，每次观测周期为$T_J$，对于每一次观测，根据式（$\ref{con}$），计算得出其当前观测的综合拥堵指数，其中$\lambda$取经验参数0.5，最后计算其平均观测综合拥堵指数，具体公式如下，
$$
\begin{equation}\label{s_con}
J_s = \frac{\sum^N_{i=1}J_i}{N},\tag{8}
\end{equation}
$$
其中，$J_i$指第$i$次观测该车时的综合拥堵指数，$N$表示观测次数。

### 3.1.2  单车车流交织指数
假设观测该被保车辆经过车流交织区$M$次，每次观测周期为$T_I$，对于每一次观测，根据式（$\ref{inter_index}$），计算得出其当前观测的车流交织指数，最后计算其平均观测车流交织指数，具体公式如下，
$$
\begin{equation}\label{s_inter}
I_s = \frac{\sum^M_{i=1}I_i}{M}, \tag{9}
\end{equation}
$$
其中，$I_i$指第$i$次观测该车时的车流交织指数，$M$表示观测次数。

### 3.1.3  单车大型车辆指数
假设观测该被保车辆$P$次，每次观测周期为$T_L$，对于每一次观测，根据式（$\ref{large_car_index}$），计算得出其当前观测的大型车辆指数，最后计算其平均观测大型车辆指数，具体公式如下，
$$
\begin{equation}\label{s_large}
L_s = \frac{\sum^P_{i=1}L_i}{P}, \tag{10}
\end{equation}
$$
其中，$L_i$指第$i$次观测该车时的大型车辆指数，$P$表示观测次数。



## 3.2  各交通流风险评价指标权重分析
下面根据熵权法计算各交通流风险评价指标在实际出险风险分析中的权重。

熵是对事物不确定性的一种定量描述，由香农引入信息论领域，目前已经在金融、风险控制、工程技术等多个领域被广泛应用。熵权法的基本思想是根据各指标变异程度来客观的确定各指标的权重大小。信息熵与变异程度及信息量存在联系，总的来说，若某个指标的信息熵越小，表明其变异程度越大，提供的信息量越多，在综合评价中所能起到的作用也越大，其权重也就越大，反之则权重越小，参见Zhu, Y.X.等（2020）<sup>[11]</sup>。

其中，信息量计算公式为，
$$
\begin{equation}
I_i = log_2(\frac{1}{p_i}) = -log_2(p_i).
\end{equation}\nonumber
$$

信息熵为信息量的期望，其计算公式如下，
$$
\begin{equation}
H(X) = \sum_{i=1}^n p_i\cdot I_i.
\end{equation}\nonumber
$$

基于此，下面计算第二节中各交通流风险评价指标权重。

**Step 1.  数据标准化**

对于综合拥堵指数$J$，车流交织指数$I$，大型车辆指数$L$，其指标集为
$$
\begin{equation}
\{J,I,L\},
\end{equation}\nonumber
$$
其中，
$$
\begin{equation}
J=\{J_1,...J_x\}, \qquad I=\{I_1,...I_y\}, \qquad L=\{L_1,...L_z\}.
\end{equation}\nonumber
$$
假设各指标数据标准化后的值为
$$
\begin{equation}
\{J_{norm}, S_{norm}, L_{norm}\},
\end{equation}\nonumber
$$

其中，
$$
\begin{equation}
J_{norm}=\{J_{norm_1},...J_{norm_x}\}, \qquad I_{norm}=\{I_{norm_1},...I_{norm_y}\}, \qquad L_{norm}=\{L_{norm_1},...L_{norm_z}\}.
\end{equation}\nonumber
$$

则
$$
\begin{equation}
J_{norm_i} = \frac{J_i - min(J)}{max(J) - min(J)}, \quad i = 1,....x,
\end{equation}\nonumber
$$

$$
\begin{equation}
I_{norm_i} = \frac{I_i - min(I)}{max(I) - min(I)}, \quad i = 1,....y,
\end{equation}\nonumber
$$

$$
\begin{equation}
L_{norm_i} = \frac{L_i - min(L)}{max(L) - min(L)}, \quad i = 1,....z.
\end{equation}\nonumber
$$

**Step 2.  计算各指标下各样本的比重**

$$
\begin{equation}
p_{J_i} = \frac{J_{norm_i}}{\sum_{i=1}^x{J_{norm_i}}}, \quad i = 1,....x,
\end{equation}\nonumber
$$

$$
\begin{equation}
p_{I_i} = \frac{I_{norm_i}}{\sum_{i=1}^y{I_{norm_i}}}, \quad i = 1,....y,
\end{equation}\nonumber
$$

$$
\begin{equation}
p_{L_i} = \frac{L_{norm_i}}{\sum_{i=1}^z{L_{norm_i}}}, \quad i = 1,....z.
\end{equation}\nonumber
$$

**Step 3.  求各指标的信息熵**

$$
\begin{equation}
E_J = -\frac{1}{ln(x)} \sum_{i=1}^x p_{J_i} \cdot ln(p_{J_i}),
\end{equation}\nonumber
$$

$$
\begin{equation}
E_I = -\frac{1}{ln(y)} \sum_{i=1}^y p_{I_i} \cdot ln(p_{I_i}),
\end{equation}\nonumber
$$

$$
\begin{equation}
E_L = -\frac{1}{ln(z)} \sum_{i=1}^z p_{L_i} \cdot ln(p_{L_i}).
\end{equation}\nonumber
$$

**Step 4.  计算信息熵冗余度**

$$
\begin{equation}
D_J = 1 - E_J,
\end{equation}\nonumber
$$

$$
\begin{equation}
D_I = 1 - E_I,
\end{equation}\nonumber
$$

$$
\begin{equation}
D_L = 1 - E_L.
\end{equation}\nonumber
$$

**Step 5.  计算各指标的权重**

$$
\begin{equation}\label{weight_J}
W_J = \frac{D_J} {\sum_{i\in\{J,I,L\}}D_i}, \tag{11}
\end{equation}
$$

$$
\begin{equation}\label{weight_I}
W_I = \frac{D_I} {\sum_{i\in\{J,I,L\}}D_i}, \tag{12}
\end{equation}
$$

$$
\begin{equation}\label{weight_L}
W_L = \frac{D_L} {\sum_{i\in\{J,I,L\}}D_i}. \tag{13}
\end{equation}
$$

由此，便得到了各交通流风险评价指标的权重。

## 3.3  交通流调整系数计算及TFUBI费率厘定
基于式（$\ref{s_con}, \ref{s_inter}, \ref{s_large}, \ref{weight_J}, \ref{weight_I}, \ref{weight_L}$），采用加权平均法，得出单车交通流风险指数$TF_s$如下，
$$
\begin{equation}\label{tf_s}
TF_s = \prod_{x\in\{J,I,L\}} W_x\cdot x_s, \tag{14}
\end{equation}
$$
其中$TF_s\in[0,1]$，$W_J$为综合拥堵指数权重，$J_s$为单车综合拥堵指数，$W_I$为车流交织指数权重，$I_s$为单车车流交织指数，$W_L$为大型车辆指数权重，$L_s$为单车大型车辆指数。

下面，基于式（$\ref{tf_s}$）中的单车交通流风险指数，给出如下交通流调整系数计算公式，
$$
\begin{equation}\label{tf_factor}
TF_{factor} = \frac{TF_s}{\overline{TF_s}}, \tag{15}
\end{equation}
$$
其中，$\overline{TF_s}$为基准交通流风险指数，其为$X$量被保车辆的单车交通流风险指数平均值，即$\frac{\sum^X_{i=1}{TF_{s_i}}}{X}$，在实操中，$X$越大，则得到的基准交通流风险指数越客观。

最后，结合式（$\ref{tf_factor}$）与UBI费率$UBI_r$，最终得出TFUBI费率如下：
$$
\begin{equation}
TFUBI_r = UBI_r \cdot TF_{factor}.
\end{equation}\nonumber
$$


# 4  结论

本文研究了基于交通大数据的车险浮动费率，采用时空伴随交通流特征，获取了交通流风险，最终结合UBI费率计算得出TFUBI费率，主要贡献如下：

1）从若干交通流指标中提取出影响驾驶人行为进而影响出险概率的三个交通流风险评价指标，分别为综合拥堵指数，车流交织指数，大型车辆指数，并给出了选取原因及计算方式。

2）每个交通流风险评价指标具有针对所有车辆的一般性，在风险评估实操中，需具体计算每辆车的交通流风险评价指标，因此本文采用了单车多次观测取平均值的方式，得到单车或被保车辆的交通流风险评价指标值。

3）多于每个交通流风险评价指标，需通过进一步聚合得到单车或被保车辆的交通流风险指数，因此本文通过熵权法，基于若干次观测数据，以一种客观的方式计算得到其在出险风险分析中的权重。

4）最后，本文通过计算单车的交通流风险指数和基准交通流风险指数，得出单车或被保车辆的交通流调整系数，最终结合UBI费率计算得到TFUBI费率。

综上，本文在UBI费率的基础上，结合时空伴随的交通流特征，提出了TFUBI险种，并给出了其保险实操中的计算方式，从而帮助保险公司以一种客观全面的风险衡量方式，对其保险产品做出更精准的定价，最终达成保险公司与客户的双赢。

# 参考文献

[1] 孔德文. 大型车辆对多车道高速公路交通运行影响研究[D] 南京:东南大学, 2018.

[2] 陆炜文. 汽车与保险的大数据应用需要顶层设计[J]. 上海保险, 2017(04): 26-31.

[3] 孟晗. 基于驾驶行为的UBI车险保费厘定研究[D]. 杭州:浙江工商大学, 2022.

[4] 邵铖茵, 王媛媛. 借鉴美国经验法则中国特色UBI车险[J]. 上海保险, 2018(08): 48-53.

[5] 文琬, 陈阳，王高洁. UBI在"网约车"行业的应用探索[J]. 上海保险, 2018(06): 35-37.

[6] 王殿海, 付凤杰, 金盛, 马东方, 汤月华. 基于断面监测器的城市道路交通状态判别方法[P]：中国发明专利, CN103021176. 2013-04-03.

[7] 张功. 高速公路匝道分流区货车影响效应研究[D]. 西安:长安大学, 2018.

[8] SánchezGonzález,S., Bedoya-Maya, F., Calatayud, A. Understanding the Effect of Traffic Congestion on Accidents Using Big Data[J]. Sustainability 2021(13): 7500. https://doi.org/10.3390/su13137500

[9] Tang H, Mao X. Analysis on Characteristics and Causes of Traffic Accidents in Interweaving Areas of Freeways[M]. CICTP 2020(2020): 4101-4110.

[10] Wang, F., Gu, D., Chen, A. Analysis of Traffic Operation Characteristics and Calculation Model of the Length of the Connecting Section between Ramp and Intersection[J]. Sustainability, 2022(14): 629. https://doi.org/10.3390/ su14020629

[11] Zhu, Y.X., Tian, D.Z., Yan, F. Effectiveness of Entropy Weight Method in Decision-Making[J]. Mathematical Problems in Engineering. 2020(2020). https://doi.org/10.1155/2020/3564835