import React from 'react';
import { Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function ShoseCard({ shoes, i }) {
  const navigate = useNavigate();

	return (
		<Col key={ i } onClick={() => { navigate(`/detail/${i}`) }}>
			<img src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`} width="80%" />
			<h4>{ shoes[i].title }</h4>
			<p>{ shoes[i].price }</p>
		</Col>
	);
}

export default ShoseCard;