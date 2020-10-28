import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardBarChart } from './style';
import { Cards } from '../cards/frame/cards-frame';
import Heading from '../heading/heading';
import { ChartjsBarChartTransparent } from '../charts/chartjs';

import { orderWeekRequest, orderWeekFilter } from '../../../../store/modules/chart/actions';

const GraphLong = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { orderWeek, orderWeekLoading } = useSelector(state => {
    return {
      orderWeek: state.chart.orderWeekData,
      orderWeekLoading: state.chart.orderWeekLoading,
    };
  });

  const [state, setState] = useState({
    tab: 'today',
  });

  useEffect(() => {
    dispatch(orderWeekRequest());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const youtubeSubscribeDatasets = orderWeek !== null && [
    {
      data: orderWeek.gained,
      backgroundColor: '#eb8d8e',
      hoverBackgroundColor: '#e64c1d',
      label: 'Pedidos',
      maxBarThickness: 40,
      barThickness: 36,
    },
  ];

  const handleActiveTab = value => {
    setState({
      ...state,
      tab: value,
    });
    dispatch(orderWeekFilter(value));
  };

  return (
    <>
      {orderWeek !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.tab === 'today' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveTab('today')} to="#">
                    Hoje
                  </Link>
                </li>
                <li className={state.tab === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveTab('week')} to="#">
                    Semana
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Pedidos por dia/semana"
          size="large"
        >
          {loading || orderWeekLoading ? (
            <div className="sd-spin" style={{ height: 450 }}>
              <Spin />
            </div>
          ) : (
            <CardBarChart>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 145,
                }}
              >
                <div className="card-bar-top">
                  <p>Média de pedidos</p>
                  <Heading as="h3">
                    {orderWeek.Subscribe}
                    {orderWeek.percent && (
                      <sub>
                        <FeatherIcon icon="arrow-up" size={14} />
                        {orderWeek.percent}%
                      </sub>
                    )}
                  </Heading>
                </div>
                <ul>
                  {youtubeSubscribeDatasets &&
                    youtubeSubscribeDatasets.map((item, key) => {
                      return (
                        <li key={key + 1} className="custom-label">
                          <span
                            style={{
                              backgroundColor: item.hoverBackgroundColor,
                            }}
                          />
                          {item.label}
                        </li>
                      );
                    })}
                </ul>
              </div>

              <ChartjsBarChartTransparent
                labels={orderWeek.labels}
                datasets={youtubeSubscribeDatasets}
                height={300}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  layout: {
                    margin: {
                      top: 10,
                    },
                  },
                  legend: {
                    display: false,
                    position: 'top',
                    align: 'end',
                    labels: {
                      boxWidth: 16,
                      display: true,
                      usePointStyle: true,
                    },
                  },

                  scales: {
                    yAxes: [
                      {
                        gridLines: {
                          color: '#e5e9f2',
                          borderDash: [25, 25],
                          zeroLineColor: '#e5e9f2',
                          zeroLineWidth: 1,
                          zeroLineBorderDash: [3, 3],
                        },
                        ticks: {
                          beginAtZero: true,
                          fontSize: 12,
                          fontColor: '#182b49',
                          max: Math.max(...orderWeek.gained),
                          stepSize: Math.max(...orderWeek.gained) / 5,
                          display: true,
                          min: 0,
                          padding: 0,
                        },
                      },
                    ],
                    xAxes: [
                      {
                        gridLines: {
                          display: true,
                          zeroLineWidth: 2,
                          zeroLineColor: '#fff',
                          color: 'transparent',
                          z: 1,
                        },
                        ticks: {
                          beginAtZero: true,
                          fontSize: 22,
                          fontColor: '#182b49',
                          min: 0,
                        },
                      },
                    ],
                  },
                }}
              />
            </CardBarChart>
          )}
        </Cards>
      )}
    </>
  );
};

export default GraphLong;
