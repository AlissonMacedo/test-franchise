import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
import { ChartjsLineChart } from '../../charts/chartjs';
import { Cards } from '../../cards/frame/cards-frame';
import { gmvRequest } from '../../../../../store/modules/chart/actions';

function GraphLine() {
  const dispatch = useDispatch();
  const { gmvLoading, gmvState } = useSelector(state => {
    return {
      gmvLoading: state.chart.gmvLoading,
      gmvState: state.chart.gmvData,
    };
  });

  console.log('gmvState', gmvState);
  useEffect(() => {
    if (gmvRequest) {
      dispatch(gmvRequest());
    }
  }, [dispatch]);

  return (
    <div className="account-card">
      {gmvLoading ? (
        <div className="sd-spin">
          <Spin />
        </div>
      ) : (
        gmvState && (
          <Cards title="GMV">
            <ChartjsLineChart
              labels={gmvState.labels}
              datasets={[
                {
                  data: gmvState.value,
                  borderColor: '#6ecb98',
                  borderWidth: 3,
                  fill: false,
                  pointBackgroundColor: '#6ecb98',
                  pointBorderColor: '#7159c1',
                  pointHoverBorderColor: '#333',
                  pointBorderWidth: 2,
                  pointHoverBorderWidth: 3,
                  pointHoverRadius: 5,
                  z: 5,
                },
              ]}
              height={window.innerWidth <= 575 ? 230 : 100}
              options={{
                legend: {
                  display: false,
                },
                elements: {
                  point: {
                    radius: 5,
                    z: 5,
                  },
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        max: 5,
                        min: 0,
                        stepSize: 0.5,
                      },
                    },
                  ],
                },

                tooltips: {
                  mode: 'label',
                  intersect: false,
                  backgroundColor: '#ffffff',
                  position: 'average',
                  titleFontColor: '#5A5F7D',
                  titleFontSize: 13,
                  titleSpacing: 15,
                  bodyFontColor: '#868EAE',
                  bodyFontSize: 12,
                  borderColor: '#F1F2F6',
                  borderWidth: 2,
                  bodySpacing: 15,
                  xPadding: 15,
                  yPadding: 15,
                  z: 999999,
                  custom(tooltip) {
                    if (!tooltip) return;
                    // disable displaying the color box;
                    tooltip.displayColors = false;
                  },
                  callbacks: {
                    title() {
                      return `GMV`;
                    },
                    label(t, d) {
                      const { yLabel, xLabel } = t;
                      return `${xLabel}: $${yLabel}k`;
                    },
                    labelColor(tooltipItem, chart) {
                      return {
                        backgroundColor: '#000',
                        borderColor: 'transparent',
                      };
                    },
                  },
                },

                scales: {
                  yAxes: [
                    {
                      gridLines: {
                        color: '#e5e9f2',
                        borderDash: [3, 3],
                        zeroLineColor: '#e5e9f2',
                        zeroLineWidth: 1,
                        zeroLineBorderDash: [3, 3],
                      },
                      ticks: {
                        beginAtZero: true,
                        fontSize: 13,
                        fontColor: '#182b49',
                        max: 100,
                        stepSize: 50,
                        padding: 10,
                        callback(label) {
                          return `${label}k`;
                        },
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: true,
                        zeroLineWidth: 2,
                        zeroLineColor: 'transparent',
                        color: 'transparent',
                        z: 1,
                      },
                    },
                  ],
                },
              }}
            />
          </Cards>
        )
      )}
    </div>
  );
}

export default GraphLine;
