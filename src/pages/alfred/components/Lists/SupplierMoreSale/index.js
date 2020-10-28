import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Scrollbar from 'perfect-scrollbar-react';
import { CardGroup } from './style';
import { Cards } from '../../cards/frame/cards-frame';
import { supplierMoreSaleRequest, supplierMoreSaleFilter } from '../../../../../store/modules/chart/actions';

const SocialTrafficMetrics = () => {
  const dispatch = useDispatch();
  const { socialTrafficState } = useSelector(state => {
    return {
      socialTrafficState: state.chart.supplierMoreSaleData,
      soIsLoading: state.chart.supplierMoreSaleLoading,
    };
  });

  console.log('socialTrafficState', socialTrafficState);

  useEffect(() => {
    if (supplierMoreSaleRequest) {
      dispatch(supplierMoreSaleRequest());
    }
  }, [dispatch]);

  const moreContent = (
    <>
      {/* <NavLink to="#">
        <span>15 dias</span>
      </NavLink>
      <NavLink to="#">
        <span>30 dias</span>
      </NavLink>
      <NavLink to="#">
        <span>45 dias</span>
      </NavLink> */}
    </>
  );

  const trafficTableColumns = [
    {
      dataIndex: 'supplierName',
      key: 'supplierName ',
    },
    {
      dataIndex: 'lastMonth',
      key: 'lastMonth',
    },
    {
      dataIndex: 'thisMonth',
      key: 'thisMonth',
    },
  ];

  const [state, setState] = useState({
    date: 'fifteen',
  });

  const trafficTableData =
    socialTrafficState !== null
      ? [
          {
            key: '01',
            supplierName: <span className="traffic-title">Produto Fornecedor</span>,
            lastMonth: <span className="traffic-title">Quantidade</span>,
            thisMonth: <span className="traffic-title">Valor Total</span>,
          },
          ...socialTrafficState,
        ]
      : [];

  const handleActiveTypePayment = value => {
    setState({
      ...state,
      date: value,
    });
    dispatch(supplierMoreSaleFilter(value));
  };

  return (
    <CardGroup>
      <div className="full-width-table">
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.date === 'fifteen' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveTypePayment('fifteen')} to="#">
                    15 dias
                  </Link>
                </li>
                <li className={state.date === 'thirty' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveTypePayment('thirty')} to="#">
                    30 dias
                  </Link>
                </li>
                <li className={state.date === 'forty-five' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveTypePayment('forty-five')} to="#">
                    45 dias
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Fornecedores Com Mais Vendas"
          size="large"
          more={moreContent}
        >
          <div className="traffic-table table-responsive">
            <Table columns={trafficTableColumns} dataSource={trafficTableData} pagination={false} />
          </div>
        </Cards>
      </div>
    </CardGroup>
  );
};

export default SocialTrafficMetrics;
