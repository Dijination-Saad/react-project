import * as echarts from 'echarts';
import 'echarts-gl';
import { useEffect } from 'react';
import '../Styles/Style.css'

const LifeExpectancyChart = () => {
  useEffect(() => {
    const fetchDataAndRenderChart = async () => {
      try {
        const response = await fetch('./data/life-expectancy-table.json'); //api data 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Yeh JSON hona chahiye
        const chartDom = document.getElementById('main');
        const myChart = echarts.init(chartDom);

        const option = {
            tooltip: {},
            grid3D: {
              viewControl: {
                // Rotate and zoom control
                autoRotate: true,
              },
              width: '50%',
              boxDepth: 80,
              boxHeight: 80,
            },
            xAxis3D: {
              type: 'value',
              name: 'Population',
            },
            yAxis3D: {
              type: 'value',
              name: 'Life Expectancy',
            },
            zAxis3D: {
              type: 'value',
              name: 'Income',
            },
            series: [
              {
                type: 'scatter3D',
                symbolSize: 10,
                encode: {
                  x: 'Population',
                  y: 'Life Expectancy',
                  z: 'Income',
                  tooltip: [0, 1, 2, 3, 4],
                },
                itemStyle: {
                  opacity: 0.8,
                  color: '#1f77b4',
                },
              },
            ],
            grid: [
              { left: '50%', width: '20%' },
              { left: '75%', width: '20%' },
            ],
            xAxis: [
              {
                type: 'value',
                gridIndex: 0,
                name: 'Income',
                axisLabel: { rotate: 50, interval: 0 },
              },
            ],
            yAxis: [
              { type: 'value', gridIndex: 0, name: 'Life Expectancy' },
            ],
          };
          

        myChart.setOption(option);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndRenderChart();
  }, []);

  return <div id="main" style={{ width: '100%', height: '500px' }}></div>;
};

export default LifeExpectancyChart;



