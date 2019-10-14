import React from 'react';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util,
  } from 'bizcharts';
import DataSet from '@antv/data-set';
function Radar(props) {
    const { DataView } = DataSet;
    const data = [
      {
        item: 'JavaScript',
        a: 80,
        b: 30,
      },
      {
        item: 'Vue',
        a: 70,
        b: 50,
      },
      {
        item: 'React',
        a: 60,
        b: 60,
      },
      {
        item: 'Webpack',
        a: 60,
        b: 50,
      },
      {
        item: 'TypeScript',
        a: 50,
        b: 70,
      },
    
    ];
    const dv = new DataView().source(data);
    dv.transform({
      type: 'fold',
      fields: ['a', 'b'],
      // 展开字段集
      key: 'user',
      // key字段
      value: 'score', // value字段
    });
    const cols = {
      score: {
        min: 0,
        max: 80,
      },
      user: { formatter: val => ({ a: '专业技能', b: '优化后岗位组成' }[val]) },
    };
    return (
        <div>
            <Chart data={dv} height={320} padding={[10, 50, 65, 70]} scale={cols} forceFit>
                <Coord type="polar" radius={0.8} />
                <Axis
                    name="item"
                    line={null}
                    tickLine={null}
                    grid={{
                        lineStyle: {
                        lineDash: null,
                        },
                        hideFirstLine: false,
                    }}
                />
                <Tooltip />
                <Axis
                    name="score"
                    line={null}
                    tickLine={null}
                    grid={{
                        type: 'polygon',
                        lineStyle: {
                        lineDash: null,
                        },
                        alternateColor: 'rgba(0, 0, 0, 0.04)',
                    }}
                />
                <Legend name="user" marker="circle" offset={30} />
                <Geom type="line" position="item*score" color="user" size={1} />
                <Geom
                type="point"
                position="item*score"
                color="user"
                shape="circle"
                size={4}
                style={{
                    stroke: '#fff',
                    lineWidth: 1,
                    fillOpacity: 1,
                }}
                />
            </Chart>
        </div>
    )
}
export default Radar;