import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { SessionChartWrapper, SessionState } from '../style';
import { Cards } from '../../cards/frame/cards-frame';
import { ChartjsDonutChart } from '../../charts/chartjs';

import { typePaymentFilter, typePaymentRequest } from '../../../../../store/modules/chart/actions';

const TypePayment = () => {
  const dispatch = useDispatch();
  const { dvIsLoading, typeState } = useSelector(state => {
    return {
      dvIsLoading: state.chart.typePaymentLoading,
      typeState: state.chart.typePaymentData,
    };
  });

  const [state, setState] = useState({
    date: 'today',
  });

  useEffect(() => {
    if (typePaymentRequest) {
      dispatch(typePaymentRequest());
    }
  }, []);

  const handleActiveTypePayment = value => {
    setState({
      ...state,
      date: value,
    });
    dispatch(typePaymentFilter(value));
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
                  <Link onClick={() => handleActiveTypePayment('today')} to="#">
                    Hoje
                  </Link>
                </li>
                <li className={state.date === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveTypePayment('week')} to="#">
                    Semana
                  </Link>
                </li>
                <li className={state.date === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveTypePayment('month')} to="#">
                    Mês
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Tipo De Pagamento"
          size="large"
        >
          {dvIsLoading ? (
            <div className="sd-spin">
              <Spin />
            </div>
          ) : (
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
          )}
        </Cards>
      )}
    </SessionChartWrapper>
  );
};

export default TypePayment;
