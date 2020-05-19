import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classNames from "classnames";
import { withStyles } from "@material-ui/styles";
import styles from "./JssStyles/ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopied: false,
    };
    this.changeCopiedState = this.changeCopiedState.bind(this);
  }

  changeCopiedState() {
    this.setState(
      {
        isCopied: true,
      },
      () => {
        setTimeout(() => this.setState({ isCopied: false }), 1500);
      }
    );
  }

  render() {
    const { name, background, moreUrl, showFullPalette, classes } = this.props;
    const { isCopied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopiedState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            className={classNames(classes.copyMsg, {
              [classes.copyMsgShow]: isCopied,
            })}
          >
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div
            style={{ background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: isCopied,
            })}
          />

          <button className={classes.copyButton}>Copy</button>

          <div className={classes.colorName}>{name}</div>
          {showFullPalette && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <button className={classes.moreButton}>More</button>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
