
<script>
let regionType = 0  //0:A，B两个区   1：A区一个区
let floorType = 1   //0:四楼    1：六楼    2：七楼
let regionNum = 26  //一个区多少间宿舍
const dateMouth = [{
  value: '1',
  label: '1月'
},
{
  value: '2',
  label: '2月'
},
{
  value: '3',
  label: '3月'
},
{
  value: '4',
  label: '4月'
},
{
  value: '5',
  label: '5月'
},
{
  value: '6',
  label: '6月'
},
{
  value: '7',
  label: '7月'
},
{
  value: '8',
  label: '8月'
},
{
  value: '9',
  label: '9月'
},
{
  value: '10',
  label: '10月'
},
{
  value: '11',
  label: '11月'
},
{
  value: '12',
  label: '12月'
}
]

const regionData = [ // 区域种类
  [{
    value: '1',
    label: 'A区'
  }, {
    value: '2',
    label: 'B区'
  }],
  [{
    value: '1',
    label: 'A区'
  }]
]

const floorData = [ // 楼层种类
  [{
    value: '1',
    label: '一楼'
  }, {
    value: '2',
    label: '二楼'
  }, {
    value: '3',
    label: '三楼'
  },
  {
    value: '4',
    label: '四楼'
  }],
  [{
    value: '1',
    label: '一楼'
  }, {
    value: '2',
    label: '二楼'
  }, {
    value: '3',
    label: '三楼'
  },
  {
    value: '4',
    label: '四楼'
  }, {
    value: '5',
    label: '五楼'
  },
  {
    value: '6',
    label: '六楼'
  }
  ],
  [{
    value: '1',
    label: '一楼'
  }, {
    value: '2',
    label: '二楼'
  }, {
    value: '3',
    label: '三楼'
  },
  {
    value: '4',
    label: '四楼'
  }, {
    value: '5',
    label: '五楼'
  },
  {
    value: '6',
    label: '六楼'
  }, {
    value: '7',
    label: '七楼'
  }
  ]
]

const allData={
  value:'0',
  label:'全部'
}

export default {
  floorData,
  floorType,
  regionData,
  regionType,
  dateMouth,
  regionNum,
  allData
}

</script>
