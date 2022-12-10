import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { AppLayout } from './../layout';
import { NoMatch } from './../pages/public/noMatch';
import { Home } from './../pages/public/home';
import { Dashboard } from './../pages/private/dashboard';

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};
