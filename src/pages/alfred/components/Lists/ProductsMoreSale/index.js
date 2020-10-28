import React, { useEffect, useState } from 'react';
import { Radio, Table } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardGroup } from './style';
import { Cards } from '../../cards/frame/cards-frame';
import { productMoreSaleRequest, productMoreSaleFilter } from '../../../../../store/modules/chart/actions';

const SocialTrafficMetrics = () => {
  const dispatch = useDispatch();
  const { socialTrafficState } = useSelector(state => {
    return {
      socialTrafficState: state.chart.productsMoreSaleData,
      soIsLoading: state.chart.productMoreSaleLoading,
    };
  });

  useEffect(() => {
    if (productMoreSaleRequest) {
      dispatch(productMoreSaleRequest());
    }
  }, [dispatch]);

  // const moreContent = (
  //   <>
  //     <NavLink to="#">
  //       <span>15 dias</span>
  //     </NavLink>
  //     <NavLink to="#">
  //       <span>30 dias</span>
  //     </NavLink>
  //     <NavLink to="#">
  //       <span>45 dias</span>
  //     </NavLink>
  //   </>
  // );

  const trafficTableColumns = [
    {
      dataIndex: 'name',
      key: 'name ',
    },
    {
      dataIndex: 'qnt',
      key: 'qnt',
    },
    {
      dataIndex: 'total',
      key: 'total',
    },
  ];

  const [state, setState] = useState({
    date: 'fifteen',
  });

  const trafficTableData =
    socialTrafficState !== null
      ? [
          {
            key: '1',
            name: <span className="traffic-title">Produto Fornecedor</span>,
            qnt: <span className="traffic-title">Quantidade</span>,
            total: <span className="traffic-title">Valor Total</span>,
          },
          ...socialTrafficState,
        ]
      : [];

  const handleActiveTypePayment = value => {
    setState({
      ...state,
      date: value,
    });
    dispatch(productMoreSaleFilter(value));
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
          title="Produtos Mais Vendidos"
          size="large"
          // more={moreContent}
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
