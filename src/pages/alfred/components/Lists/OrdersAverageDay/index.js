import React, { useEffect } from 'react';
import { Row, Col, Radio, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Focard, CardGroup, TextFooterCard } from './style';
import { SessionChartWrapper } from '../../graphCircle/style';
import { Cards } from '../../cards/frame/cards-frame';
import Heading from '../../heading/heading';
import { ordersAverageDayRequest } from '../../../../../store/modules/chart/actions';

const OrdersAverageDay = () => {
  const dispatch = useDispatch();
  const { ticketAverageData, ticketAverageLoading } = useSelector(state => {
    return {
      ticketAverageData: state.chart.ordersAverageDayData,
      ticketAverageLoading: state.chart.ordersAverageDayLoading,
    };
  });

  useEffect(() => {
    if (ordersAverageDayRequest) {
      dispatch(ordersAverageDayRequest());
    }
  }, [dispatch]);

  console.log('ticketAverageData', ticketAverageData);

  return (
    <SessionChartWrapper>
      <div className="forcast-overview">
        {ticketAverageData !== null && (
          <Cards title="Média De Pedidos Por Dia" size="large">
            {ticketAverageLoading ? (
              <div className="sd-spin">
                <Spin />
              </div>
            ) : (
              <Row gutter={25} justify="center">
                <div
                  className="focard-details growth-upward"
                  style={{
                    marginRight: 20,
                    marginTop: 70,
                  }}
                >
                  <h4>MarketPlace</h4>
                  <Heading as="h1">{ticketAverageData?.Marketplace?.value}</Heading>
                  <p className="focard-status">
                    <span className="focard-status__percentage">
                      <FeatherIcon icon="trending-up" />
                      {`${ticketAverageData?.Marketplace?.percent}%`}
                    </span>
                  </p>
                </div>
                <div className="focard-details growth-upward" style={{ marginLeft: 20, marginTop: 70 }}>
                  <h4>Empresarial</h4>
                  <Heading as="h1">{ticketAverageData?.Empresarial?.value}</Heading>
                  <p className="focard-status">
                    <span className="focard-status__percentage">
                      <FeatherIcon icon="trending-up" />
                      {`${ticketAverageData?.Empresarial?.percent}%`}
                    </span>
                  </p>
                </div>
                <TextFooterCard style={{ marginTop: 70 }}>
                  <span>Em relacão à última semana</span>
                </TextFooterCard>
              </Row>
            )}
          </Cards>
        )}
      </div>
    </SessionChartWrapper>
  );
};

export default OrdersAverageDay;
