import React from 'react';
import { Outlet } from 'react-router-dom';

function EventPage() {
  return (
    <div>
      <h4>이벤트 페이지</h4>
      <Outlet />
    </div>
  )
}

export default EventPage;