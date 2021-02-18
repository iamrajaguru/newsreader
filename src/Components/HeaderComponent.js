import React, { Component } from "react";
import {
  Menu,
} from "antd";
import {
  HomeOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import sources from "../Utils";
import { getNewsList, loadNewsList } from "../Actions/home";
import { history } from "../Store";
const { SubMenu } = Menu;

class HeaderComponent extends Component {
  componentDidMount() {
    this.props.getNewsList();
  }
  handleSelection = (e) => {
    history.push("/");
    this.props.loadNewsList("current", e.key);
    const { current } = this.props.home;
    this.props.getNewsList(current === "home" ? "" : current);
  };
  render() {
    const { current } = this.props.home;
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item
          icon={<HomeOutlined />}
          key="home"
          onClick={(e) => this.handleSelection(e)}
          active={current === "home" ? true : false}
        >
          Home
        </Menu.Item>
        {Object.keys(this.props.home.selectedNews).length === 0 && (
          <SubMenu key="SubMenu" icon={<FileSearchOutlined />} title="Sources">
            <Menu.ItemGroup>
              {sources.map((i) => (
                <Menu.Item key={i.id} onClick={(e) => this.handleSelection(e)}>
                  {i.name}
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          </SubMenu>
        )}
      </Menu>
    );
  }
}
const mapStateToprops = (state) => ({
  home: state.Home,
});
const mapDisptachToprops = { getNewsList, loadNewsList };

export default connect(mapStateToprops, mapDisptachToprops)(HeaderComponent);
