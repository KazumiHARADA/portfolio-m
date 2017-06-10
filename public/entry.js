/**
 * Created by haradakazumi on 2017/06/06.
 */
const React = require('react');
const ReactDOM = require('react-dom');

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const AboutMe = React.createClass( {
    render : function () {
        return (
            <div>aaaaa</div>
        )
    }
});

const LatestPosts = React.createClass( {
    render : function () {
        const style = {
            color:"red"
        };

        return (
            <div style={style}>vvvvvv</div>
        )
    }
});

const Introduction = React.createClass( {
    render : function () {
        const style = {
            display: "flex"
        };
        return (
            <div style={style}>
                <AboutMe/>
                <LatestPosts/>
            </div>
        )
    }
});

const Header = React.createClass( {
    render : function () {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </MuiThemeProvider>
        )
    }
});

const TopImage = React.createClass( {
    render : function () {
        return (
            <img src="./img/top_image.png" />
        )
    }
});


const App = React.createClass( {
    render : function () {
        return (
            <div>
                <Header/>
                <div className="main_content">
                    <TopImage />
                    <Introduction/>
                </div>
            </div>
        )
    }
});


ReactDOM.render(
    <App/>,
    document.getElementById('content')
);