import React, { useState, useEffect, useCallback } from 'react';
import { Spin } from 'antd';
import { Link, NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { SessionChartWrapper, SessionState } from '../style';
import { Cards } from '../../cards/frame/cards-frame';
import { ChartjsDonutChart } from '../../charts/chartjs';

import { typeOrderFilter, typeOrderRequest } from '../../../../../store/modules/chart/actions';

const TypePayment = () => {
  const dispatch = useDispatch();
  const { dvIsLoading, typeState } = useSelector(state => {
    return {
      dvIsLoading: state.chart.typeOrderLoading,
      typeState: state.chart.typeOrderData,
    };
  });

  const [state, setState] = useState({
    date: 'today',
  });

  useEffect(() => {
    if (typeOrderRequest) {
      dispatch(typeOrderRequest());
    }
  }, [dispatch]);

  const handleActiveTypePayment = (e, value) => {
    e.preventDefault();
    setState({
      ...state,
      date: value,
    });
    dispatch(typeOrderRequest());

    console.log('teste');
  };

  const percentage = data => {
    const total = typeState[0] + typeState[1];
    const percent = (data * 100) / total;

    return Math.round(percent);
  };

  return (
    <SessionChartWrapper>
      {typeState !== null && (
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.date === 'today' ? 'active' : 'deactivate'}>
                  <a onClick={e => handleActiveTypePayment(e, 'today')}>Hoje</a>
                </li>
                <li className={state.date === 'week' ? 'active' : 'deactivate'}>
                  <a onClick={e => handleActiveTypePayment(e, 'week')}>Semana</a>
                </li>
                <li className={state.date === 'month' ? 'active' : 'deactivate'}>
                  <a onClick={e => handleActiveTypePayment(e, 'month')}>Mês</a>
                </li>
              </ul>
            </div>
          }
          title="Tipo De Pedido"
          size="large"
        >
          <div className="session-chart-inner">
            <ChartjsDonutChart
              labels={['On Line', 'Na entrega']}
              datasets={[
                {
                  data: typeState,
                  backgroundColor: ['#e64c1d', '#6ecb98'],
                  total: '10,283',
                },
              ]}
            />

            <SessionState className="session-wrap d-flex justify-content-center">
              <div className="session-single">
                <div className="chart-label">
                  <span className="label-dot dot-success" />
                  On Line
                </div>
                <span>{typeState[0]}</span>
                <sub>{`${percentage(typeState[0])}%`}</sub>
              </div>
              <div className="session-single">
                <div className="chart-label">
                  <span className="label-dot dot-info" />
                  Na entrega
                </div>
                <span>{typeState[1]}</span>
                <sub>{`${percentage(typeState[1])}%`}</sub>
              </div>
            </SessionState>
          </div>
        </Cards>
      )}
    </SessionChartWrapper>
  );
};

export default TypePayment;
