import React, { Component } from "react";
import { UpCircleFilled } from "@ant-design/icons";
import {
  Layout,
  Row,
  Col,
  Image,
  Typography,
  Space,
  Card,
  BackTop,
} from "antd";
import HeaderComponent from "./HeaderComponent";
import "antd/dist/antd.css";
import moment from "moment";
import { history } from "../Store";
const { Title, Text } = Typography;
const { Header, Footer, Content } = Layout;

export default class Home extends Component {
  componentDidMount() {
    this.props.getNewsList();
  }
  handleSelection = (e) => {
    const { current } = this.props.home;
    this.props.loadNewsList("current", e.key);
    this.props.getNewsList(current === "home" ? "" : current);
  };
  loadSelectedNews = (news) => {
    this.props.loadNewsList("selectedNews", news);
    history.push("/news");
  };
  render() {
    const { articles } = this.props.home;
    return (
      <>
        <Layout className="layout">
          <Header>
            <HeaderComponent />
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <div className="site-card-wrapper">
              <Space direction="vertical">
                {" "}
                <Row gutter={[16, 24]} justify={"center"}>
                  {articles.length > 0 &&
                    articles.map((i, index) => (
                      <Col key={index} span={16}>
                        <Card
                          hoverable={true}
                          onClick={() => this.loadSelectedNews(i)}
                          cover={
                            <Image.PreviewGroup>
                              <Image
                                style={{
                                  height: "80%",
                                  width: "100%",
                                }}
                                src={i.urlToImage}
                              />
                            </Image.PreviewGroup>
                          }
                        >
                          <Title level={2}>{i.title}</Title>{" "}
                          <div>
                            <Text type="secondary">By&nbsp;{i.author}</Text>
                            <Text>&nbsp;|&nbsp;</Text>
                            <Text type="secondary">
                              {moment(i.publishedAt).fromNow()}
                            </Text>
                          </div>
                          <p>{i.description}</p>
                        </Card>
                      </Col>
                    ))}
                  <BackTop>
                    <UpCircleFilled
                      style={{
                        color: "#001529",
                        fontSize: 40,
                      }}
                    />
                  </BackTop>
                </Row>
              </Space>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </>
    );
  }
}
