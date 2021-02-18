import { connect } from "react-redux";
import DetailedNews from "../Components/DetailedNews";
import { getNewsList, loadNewsList } from "../Actions/home";
const mapStateToProps = (state) => ({
  home: state.Home,
});
const mapDisptachToProps = { getNewsList, loadNewsList };

export default connect(mapStateToProps, mapDisptachToProps)(DetailedNews);
