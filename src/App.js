import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuTop from './components/MenuTop';

// Pages
import Home from './pages/home';
import Movie from './pages/movie/movie';
import Error404 from './pages/error404';

export default function App() {
  const { Header, Content } = Layout
  return (
    <Layout>
      <Router>
        <Header style={{zIndex: 1}}>
          <MenuTop />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  )
}