import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { Button } from '@low-code/components';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export const Canvas: React.FC = () => {
  return (
    <Editor resolver={{ Button }}>
      {/* 设置 Layout 为 100% 的高度和宽度 */}
      <Layout style={{ height: '100%', width: '100%' }}>
        {/* Header */}
        <Header style={{ color: 'white', textAlign: 'center', backgroundColor: '#001529' }}>
          Header
        </Header>

        {/* Main layout */}
        <Layout style={{ flex: 1, display: 'flex' }}>
          {/* Left Sidebar */}
          <Sider width="20%" style={{ backgroundColor: '#f0f2f5' }}>
            Left Sidebar
          </Sider>

          {/* Main Content */}
          <Content style={{ padding: '0 24px', minHeight: '100%', backgroundColor: '#fff' }}>
            Main Content
            <Frame>
              <Element is={Button} canvas>
                Click me
              </Element>
            </Frame>
          </Content>

          {/* Right Sidebar */}
          <Sider width="20%" style={{ backgroundColor: '#f0f2f5' }}>
            Right Sidebar
          </Sider>
        </Layout>

        {/* Footer */}
        <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: 'white' }}>
          Footer
        </Footer>
      </Layout>
    </Editor>
  );
};
