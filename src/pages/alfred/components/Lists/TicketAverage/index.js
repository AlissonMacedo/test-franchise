import React, { useEffect } from 'react';
import { Row, Col, Radio, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { Focard, CardGroup, TextFooterCard } from './style';
import { Cards } from '../../cards/frame/cards-frame';
import Heading from '../../heading/heading';
import { ticketAverageRequest } from '../../../../../store/modules/chart/actions';
import { SessionChartWrapper } from '../../graphCircle/style';

const TicketAverage = () => {
  const dispatch = useDispatch();
  const { ticketAverageData, ticketAverageLoading } = useSelector(state => {
    return {
      ticketAverageData: state.chart.ticketAverageData,
      ticketAverageLoading: state.chart.ticketAverageLoading,
    };
  });

  useEffect(() => {
    if (ticketAverageRequest) {
      dispatch(ticketAverageRequest());
    }
  }, []);

  console.log('ticketAverageData', ticketAverageData);

  return (
    <SessionChartWrapper>
      <div className="forcast-overview">
        {ticketAverageData !== null && (
          <Cards title="Ticket Médio" size="large">
            {ticketAverageLoading ? (
              <div className="sd-spin">
                <Spin />
              </div>
            ) : (
              <Row gutter={25} justify="center">
                <Col
                  xl={24}
                  md={24}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Col md={12} sm={24} xs={24}>
                    <Focard>
                      <div className="focard-details growth-upward">
                        <h4>MarketPlace</h4>
                        <Heading as="h1">{ticketAverageData.Marketplace.value}</Heading>
                        <p className="focard-status">
                          <span className="focard-status__percentage">
                            <FeatherIcon icon="trending-up" />
                            {`${ticketAverageData.Marketplace.percent}%`}
                          </span>
                        </p>
                      </div>
                    </Focard>
                  </Col>
                  <Col md={12} sm={24} xs={24}>
                    <Focard>
                      <div className="focard-details growth-upward">
                        <h4>Empresarial</h4>
                        <Heading as="h1">{ticketAverageData.Empresarial.value}</Heading>
                        <p className="focard-status">
                          <span className="focard-status__percentage">
                            <FeatherIcon icon="trending-up" />
                            {`${ticketAverageData.Empresarial.percent}%`}
                          </span>
                        </p>
                      </div>
                    </Focard>
                  </Col>
                </Col>
                <TextFooterCard>
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

export default TicketAverage;
