import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import OneCol, { Row } from "layouts/OneCol";

const Wrapper = styled.div``;

const Home = ({ className }) => {
  const classes = ["Home"];

  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(" ")}>
      <OneCol>
        <Row>Some nice content here</Row>
      </OneCol>
    </Wrapper>
  );
};

Home.displayName = "Home";

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: null,
};

export default Home;
