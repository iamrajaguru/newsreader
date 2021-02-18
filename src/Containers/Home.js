import { connect } from "react-redux";
import Home from "../Components/Home";
import { getNewsList, loadNewsList } from "../Actions/home";
const mapStateToProps = (state) => ({
  home: state.Home,
});
const mapDisptachToProps = { getNewsList, loadNewsList };

export default connect(mapStateToProps, mapDisptachToProps)(Home);
