import React from 'react'
import {Link} from 'react-router-dom'
import millify from 'millify'
import { Typography,Row,Col,Statistic } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './CryptoCurrencies'
import News from './News'
const { Title } = Typography;

 const Homepage = () => {
    
    const {data,isFetching}=useGetCryptosQuery(10);
    // console.log(data);
    const globalStats=data?.data?.stats;
    if(isFetching) return 'Loading...';
    return (
       <>
       <Typography.Title level={2} className='heading'>Global Crypto stats</Typography.Title>
       <Row >
           <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
           <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges}/></Col>
           <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
           <Col span={12}><Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)}/></Col>
           <Col span={12}><Statistic title="Total markets" value={globalStats.totalMarkets}/></Col>
       </Row>
       <div className='home-heading-container'>
           <Title level={2} className="home-title">Top 10 cryptocurrencies in the world</Title>
           <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
       </div>
       <Cryptocurrencies simplified/>
       <div className='home-heading-container'>
           <Title level={2} className="home-title">Latest crypto news</Title>
           <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
       </div>
       <News simplified/>
       </>
    )
}

export default Homepage