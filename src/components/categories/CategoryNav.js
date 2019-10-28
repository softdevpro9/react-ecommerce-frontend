import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CategoryNav = (props) => {

    return (
        <div>Category Nav Bar is here.....</div>
    )

}

const mapStateToProps = state => {
    // console.log("mapStateToProps", state);
      return {
        categories: state.categoryReducer
      };    
}

export default connect(mapStateToProps)(CategoryNav);