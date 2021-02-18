import React, { Component } from "react";

import {
  Layout,
  Row,
  Col,
  Image,
  Typography,
} from "antd";
import moment from "moment";
import HeaderComponent from "./HeaderComponent";
import { history } from "../Store";
const { Title, Paragraph, Text } = Typography;
const { Header, Footer, Content } = Layout;
export default class DetailedNews extends Component {
  componentDidMount() {
    const { selectedNews } = this.props.home;
    Object.keys(selectedNews).length === 0 && history.push("/");
  }
  render() {
    const { selectedNews } = this.props.home;

    return (
      <Layout className="layout">
        <Header>
          <HeaderComponent />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Title level={1}>{selectedNews.title}</Title>
          <Row gutter={16}>
            <Col className="gutter-row" span={32}>
              <Image.PreviewGroup>
                <Image src={selectedNews.urlToImage} />
              </Image.PreviewGroup>
            </Col>
            <Col className="gutter-row" span={6}>
              <Paragraph style={{ fontSize: 24, textAlign: "justify" }}>
                {selectedNews.description}{" "}
              </Paragraph>
              <Paragraph style={{ fontSize: 24, textAlign: "justify" }}>
                {selectedNews?.content?.split(".")[0] &&
                  selectedNews.content.split(".")[0]}
                <a href={selectedNews.url}>&nbsp;[Read More...]</a>
              </Paragraph>
            </Col>
          </Row>

          <div>
            <Text type="secondary">By&nbsp;{selectedNews.author}</Text>
            <Text>&nbsp;|&nbsp;</Text>
            <Text type="secondary">
              {moment(selectedNews.publishedAt).fromNow()}
            </Text>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
