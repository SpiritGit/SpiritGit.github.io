---
title: 基于路侧观测设备的实时车辆定位系统
date: 2022-06-11
cover: https://github.com/SpiritGit/SpiritGit.github.io/raw/main/src/images/covers/aps.webp

---

# Algorithm Design / 算法设计技术交底材

`wxz` 
`last update`:`2022-07-22`  

[[_TOC_]]

## 专利名称

一种基于公路交通观测数据的车辆实时定位算法和系统

## 技术领域

本发明属于智慧交通信息化领域，涉及一种基于公路交通观测数据的车辆实时定位算法和系统

## 背景

## 本案特点

## 有益价值

# 发明内容

## 0. 方案简介

本方案采用流式计算的方式对车辆位置进行实时推演，主要包含5大步骤：1）接收到观测数据时刻的车辆位置估算，2）当前时空范围下的交通流速度计算，3 ）生成车辆行驶至下一拓扑顶点的时空预测轨迹，4）若预测时间内接收到新的观测数据，则以新数据返回步骤1，5）若预测时间结束仍未接收到新数据，则以预测轨迹的终点为虚拟观测数据，返回步骤1。

下文所称有序三元组指车辆通行数据中的（身份，位置，时间）信息，其中身份即车牌号，采用$v$代替，位置即空间定位，采用$s$代替，时间采用$t$代替，即为有序三元组$(v, s, t)$，其作用是定位车辆行驶过程中的时空位置。在本发明中，位置采用观测设备编号，时间即观测时间。





















关键技术点： 
- 门架/路网拓扑构建
- 行驶距离估算
- 单车转移概率估算
- 递归拓扑搜索与计算

## 应用场景

- 提供数字孪生所需实时位置
- 助力交警侧 车辆实时追踪与布控
- 助力客服侧 及时定位车辆位置进行援助
- ...

## 最终成果

基于内存数据库存储车辆未来一定时间内各时间刻度上的经纬度定位及概率

| vpn        | prop | t1         | t2         | t3         | ...  |
| ---------- | ---- | ---------- | ---------- | ---------- | ---- |
| 苏A12345_0 | 60%  | lon1, lat1 | lon2, lat2 | lon3, lat3 | ...  |
| 苏A12345_0 | 40%  | lon1, lat1 | lon2, lat2 | lon3, lat3 | ...  |
| 苏A67890_0 | 40%  | lon1, lat1 | lon2, lat2 | lon3, lat3 | ...  |
| 苏A67890_0 | 30%  | lon1, lat1 | lon2, lat2 | lon3, lat3 | ...  |
| 苏A67890_0 | 30%  | lon1, lat1 | lon2, lat2 | lon3, lat3 | ...  |
| ...        | ...  | ...        | ...        | ...        | ...  |

## 流程图

 ```flow
  start=>start: 任务开始
  a_stv=>start: 1. 接收到三元组
  cur_loc=>operation: 2. 推测当前位置(一个或多个)
  predict_trace=>operation: 3. 生成预测轨迹(与位置对应)
  redis=>operation: 4. 轨迹存入内存数据库
  timer=>operation: 5. 对每条轨迹生成计时器
  timer_judge=>condition: 6. 计时时间内是否收到新的三元组
  del_timer=>operation: 7. 删除全部计时器及预测轨迹
  simulate_stv=>start: 8. 删除当前结束计时器对应的轨迹,
  											以预测轨迹终点作为虚拟三元组	
  sendMq=>operation: 9. 对每条轨迹设置计时器
  
  start->a_stv->cur_loc->predict_trace->redis->timer->timer_judge
  
  timer_judge(yes)->del_timer->a_stv
  timer_judge(no)->simulate_stv->a_stv
  
 ```

## 具体步骤