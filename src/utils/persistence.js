const subjects1 = [
  {
    subjectId: '1001',
    subjectName: '库存现金',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1002',
    subjectName: '银行存款',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1012',
    subjectName: '其他货币资金',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1101',
    subjectName: '短期投资',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1101001',
    subjectName: '短期投资-股票',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1101002',
    subjectName: '短期投资-债券',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1101003',
    subjectName: '短期投资-基金',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1121',
    subjectName: '应收票据',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1122',
    subjectName: '应收账款',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1123',
    subjectName: '预付账款',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1131',
    subjectName: '应收股利',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1132',
    subjectName: '应收利息',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1221',
    subjectName: '其他应收款',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1401',
    subjectName: '材料采购',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1402',
    subjectName: '在途物资',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1403',
    subjectName: '原材料',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1404',
    subjectName: '材料成本差异',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1405',
    subjectName: '库存商品',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1407',
    subjectName: '商品进销差价',
    direction: '贷',
    type: '资产',
  },
  {
    subjectId: '1408',
    subjectName: '委托加工物资',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1411',
    subjectName: '周转材料',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1421',
    subjectName: '消耗性生物资产',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1501',
    subjectName: '长期债券投资',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1511',
    subjectName: '长期股权投资',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1601',
    subjectName: '固定资产',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1602',
    subjectName: '累计折旧',
    direction: '贷',
    type: '资产',
  },
  {
    subjectId: '1604',
    subjectName: '在建工程',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1605',
    subjectName: '工程物资',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1606',
    subjectName: '固定资产清理',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1621',
    subjectName: '生产性生物资产',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1622',
    subjectName: '生产性生物资产累计折旧',
    direction: '贷',
    type: '资产',
  },
  {
    subjectId: '1701',
    subjectName: '无形资产',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1702',
    subjectName: '累计摊销',
    direction: '贷',
    type: '资产',
  },
  {
    subjectId: '1801',
    subjectName: '长期待摊费用',
    direction: '借',
    type: '资产',
  },
  {
    subjectId: '1901',
    subjectName: '待处理财产损溢',
    direction: '借',
    type: '资产',
  }];

const subjects2 = [
  {
    subjectId: '2001',
    subjectName:
  '短期借款',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2201',
    subjectName:
  '应付票据',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2202',
    subjectName:
  '应付账款',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2203',
    subjectName:
  '预收账款',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2211',
    subjectName:
  '应付职工薪酬',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221',
    subjectName:
  '应交税费',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221001',
    subjectName:
  '应交税费-应交增值税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100101',
    subjectName:
  '应交税费-应交增值税-进项税额',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100102',
    subjectName:
  '应交税费-应交增值税-已交税金',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100103',
    subjectName:
  '应交税费-应交增值税-转出未交增值税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100104',
    subjectName:
  '应交税费-应交增值税-减免税款',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100105',
    subjectName:
  '应交税费-应交增值税-销项税额',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100106',
    subjectName:
  '应交税费-应交增值税-出口退税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100107',
    subjectName:
  '应交税费-应交增值税-进项税额转出',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100108',
    subjectName:
  '应交税费-应交增值税-出口抵减内销产品应纳税额',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100109',
    subjectName:
  '应交税费-应交增值税-转出多交增值税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '222100110',
    subjectName:
  '应交税费-应交增值税-销项税额抵减',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221002',
    subjectName:
  '应交税费-未交增值税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221003',
    subjectName:
  '应交税费-应交消费税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221004',
    subjectName:
  '应交税费-应交营业税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221005',
    subjectName:
  '应交税费-应交资源税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221006',
    subjectName:
  '应交税费-应交所得税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221007',
    subjectName:
  '应交税费-应交土地增值税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221008',
    subjectName:
  '应交税费-应交城市维护建设税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221009',
    subjectName:
  '应交税费-应交房产税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221010',
    subjectName:
  '应交税费-应交城镇土地使用税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221011',
    subjectName:
  '应交税费-应交车船使用税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221012',
    subjectName:
  '应交税费-应交个人所得税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221013',
    subjectName:
  '应交税费-教育费附加',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221014',
    subjectName:
  '应交税费-地方教育费附加',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221015',
    subjectName:
  '应交税费-矿产资源补偿费',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221016',
    subjectName:
  '应交税费-排污费',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221017',
    subjectName:
  '应交税费-印花税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221018',
    subjectName:
  '应交税费-预交增值税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221019',
    subjectName:
  '应交税费-待抵扣进项税额',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221020',
    subjectName:
  '应交税费-待认证进项税额',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221021',
    subjectName:
  '应交税费-待转销项税额',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221022',
    subjectName:
  '应交税费-增值税留抵税额',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221023',
    subjectName:
  '应交税费-简易计税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221024',
    subjectName:
  '应交税费-转让金融商品应交增值税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2221025',
    subjectName:
  '应交税费-代扣代交增值税',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2231',
    subjectName:
  '应付利息',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2232',
    subjectName:
  '应付利润',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2241',
    subjectName:
  '其他应付款',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2401',
    subjectName:
  '递延收益',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2501',
    subjectName:
  '长期借款',
    direction:
  '贷',
    type:
  '负债',
  },
  {
    subjectId: '2701',
    subjectName:
  '长期应付款',
    direction:
  '贷',
    type:
  '负债',
  },
];
const subjects3 = [
  {
    subjectId: '3001',
    subjectName:
  '实收资本',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3002',
    subjectName:
  '资本公积',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3101',
    subjectName:
  '盈余公积',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3101001',
    subjectName:
  '盈余公积-法定盈余公积',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3101002',
    subjectName:
  '盈余公积-任意盈余公积',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3101003',
    subjectName:
  '盈余公积-法定公益金',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3103',
    subjectName:
  '本年利润',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3104',
    subjectName:
  '利润分配',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3104001',
    subjectName:
  '利润分配-其他转入',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3104002',
    subjectName:
  '利润分配-提取法定盈余公积',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3104003',
    subjectName:
  '利润分配-提取法定公益金',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3104004',
    subjectName:
  '利润分配-提取任意盈余公积',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3104005',
    subjectName:
  '利润分配-应付利润',
    direction:
  '贷',
    type:
  '净资产',
  },
  {
    subjectId: '3104006',
    subjectName:
  '利润分配-未分配利润',
    direction:
  '贷',
    type:
  '净资产',
  },
];
const subjects4 = [
  {
    subjectId: '4001',
    subjectName:
  '生产成本',
    direction:
  '借',
    type:
  '收入',
  },
  {
    subjectId: '4101',
    subjectName:
  '制造费用',
    direction:
  '借',
    type:
  '收入',
  },
  {
    subjectId: '4301',
    subjectName:
  '研发支出',
    direction:
  '借',
    type:
  '收入',
  },
  {
    subjectId: '4401',
    subjectName:
  '工程施工',
    direction:
  '借',
    type:
  '收入',
  },
  {
    subjectId: '4403',
    subjectName:
  '机械作业',
    direction:
  '借',
    type:
  '收入',
  },
];
const subjects5 = [
  {
    subjectId: '5001',
    subjectName:
  '主营业务收入',
    direction:
  '贷',
    type:
  '费用',
  },
  {
    subjectId: '5051',
    subjectName:
  '其他业务收入',
    direction:
  '贷',
    type:
  '费用',
  },
  {
    subjectId: '5111',
    subjectName:
  '投资收益',
    direction:
  '贷',
    type:
  '费用',
  },
  {
    subjectId: '5301',
    subjectName:
  '营业外收入',
    direction:
  '贷',
    type:
  '费用',
  },
  {
    subjectId: '5301001',
    subjectName:
  '营业外收入-非流动资产处置净收益',
    direction:
  '贷',
    type:
  '费用',
  },
  {
    subjectId: '5301002',
    subjectName:
  '营业外收入-政府补助',
    direction:
  '贷',
    type:
  '费用',
  },
  {
    subjectId: '5301003',
    subjectName:
  '营业外收入-捐赠收益',
    direction:
  '贷',
    type:
  '费用',
  },
  {
    subjectId: '5301004',
    subjectName:
  '营业外收入-盘盈收益',
    direction:
  '贷',
    type:
  '费用',
  },
  {
    subjectId: '5401',
    subjectName:
  '主营业务成本',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5402',
    subjectName:
  '其他业务成本',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5403',
    subjectName:
  '税金及附加',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601',
    subjectName:
  '销售费用',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601001',
    subjectName:
  '销售费用-销售人员职工薪酬',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601002',
    subjectName:
  '销售费用-业务招待费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601003',
    subjectName:
  '销售费用-修理费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601004',
    subjectName:
  '销售费用-办公费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601005',
    subjectName:
  '销售费用-水电费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601006',
    subjectName:
  '销售费用-差旅费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601007',
    subjectName:
  '销售费用-折旧费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601008',
    subjectName:
  '销售费用-摊销费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601009',
    subjectName:
  '销售费用-展览费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601010',
    subjectName:
  '销售费用-商品维修费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601011',
    subjectName:
  '销售费用-运输费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601012',
    subjectName:
  '销售费用-装卸费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601013',
    subjectName:
  '销售费用-包装费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601014',
    subjectName:
  '销售费用-保险费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601015',
    subjectName:
  '销售费用-广告费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5601016',
    subjectName:
  '销售费用-业务宣传费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602',
    subjectName:
  '管理费用',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602001',
    subjectName:
  '管理费用-管理人员职工薪酬',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602002',
    subjectName:
  '管理费用-业务招待费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602003',
    subjectName:
  '管理费用-修理费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602004',
    subjectName:
  '管理费用-办公费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602005',
    subjectName:
  '管理费用-水电费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602006',
    subjectName:
  '管理费用-差旅费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602007',
    subjectName:
  '管理费用-折旧费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602008',
    subjectName:
  '管理费用-摊销费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602009',
    subjectName:
  '管理费用-开办费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602010',
    subjectName:
  '管理费用-研究费用',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602011',
    subjectName:
  '管理费用-咨询费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5602012',
    subjectName:
  '管理费用-长期待摊费用摊销',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5603',
    subjectName:
  '财务费用',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5603001',
    subjectName:
  '财务费用-利息费用',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5603002',
    subjectName:
  '财务费用-手续费',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5603003',
    subjectName:
  '财务费用-汇兑损益',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5603004',
    subjectName:
  '财务费用-现金折扣',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711',
    subjectName:
  '营业外支出',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711001',
    subjectName:
  '营业外支出-非流动资产处置净损失',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711002',
    subjectName:
  '营业外支出-赞助支出',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711003',
    subjectName:
  '营业外支出-捐赠支出',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711004',
    subjectName:
  '营业外支出-盘亏损失',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711005',
    subjectName:
  '营业外支出-坏账损失',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711006',
    subjectName:
  '营业外支出-存货毁损报废损失',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711007',
    subjectName:
  '营业外支出-无法收回的长期债券投资损失',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711008',
    subjectName:
  '营业外支出-无法收回的长期股权投资损失',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711009',
    subjectName:
  '营业外支出-自然灾害等不可抗力因素造成的损失',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711010',
    subjectName:
  '营业外支出-税收滞纳金',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5711011',
    subjectName:
  '营业外支出-罚款支出',
    direction:
  '借',
    type:
  '费用',
  },
  {
    subjectId: '5801',
    subjectName:
  '所得税费用',
    direction:
  '借',
    type:
  '费用',
  },
];
const other = [{
  subjectId: '6000',
  subjectName: '其他流动资产',
  direction: null,
  type: '其他',
},
{
  subjectId: '6001',
  subjectName: '其他非流动资产',
  direction: null,
  type: '其他',
},
{
  subjectId: '8000',
  subjectName: '其他流动负债',
  direction: null,
  type: '其他',
},
{
  subjectId: '8001',
  subjectName: '其他非流动负债',
  direction: null,
  type: '其他',
},
];

export { subjects1, subjects2, subjects3, subjects4, subjects5, other };
